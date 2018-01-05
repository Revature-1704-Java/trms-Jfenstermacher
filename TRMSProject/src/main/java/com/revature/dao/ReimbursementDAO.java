package com.revature.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.revature.beans.Employee;
import com.revature.beans.Reimbursement;
import com.revature.util.ConnectionUtil;

public class ReimbursementDAO {
	Connection conn;
	
	public ReimbursementDAO() {
		try {
			conn = ConnectionUtil.getConnection();
		} catch (Exception e){
			System.out.println(e.getMessage());
		}
	}
	
	public Reimbursement[] returnUserReimbursements(int eid){
		Reimbursement[] reimbursements = null;
		try {
			String sql = "SELECT COUNT(*) AS cnt FROM reimbursements WHERE employeeID = ?";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, eid);
			ResultSet rs = ps.executeQuery();
			
			rs.next();
			
			int count = rs.getInt("cnt");
			
			if (count > 0){
				sql = "SELECT * FROM reimbursements WHERE employeeID = ?";
				ps = conn.prepareStatement(sql);
				ps.setInt(1, eid);
				
				rs = ps.executeQuery();
				
				reimbursements = constructReimbursements(count, rs);
			}
			
			ps.close();
			rs.close();
		} catch(Exception e) {
			System.out.println(e.getMessage());
		}
		
		return reimbursements;
	}
	
	public Reimbursement[] getAssignedReimbursements(Employee employee){
		Reimbursement[] reimbursements = null;
		
		try {
			String sql = null;
			int etid = employee.getEmployeeTypeId();
			switch(etid){
				case(2):
					sql = "SELECT * FROM reimbursements WHERE status='SUPER' AND supervisorID = ?";
					break;
				case(3):
					sql = "SELECT * FROM reimbursements WHERE status='HEAD' AND headID = ?";
					break;
				case(4):
					sql = "SELECT * FROM reimbursements WHERE status='BENCO' AND bencoID = ?";
					break;
			}
			System.out.println(sql);
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, employee.getId());
			
			ResultSet rs = ps.executeQuery();
			reimbursements = smartConstruct(rs);
			
			rs.close();
			ps.close();
			
		} catch (Exception e){
			System.out.println(e.getMessage());
		}
		
		return reimbursements;
	}
	
	public boolean addReimbursement(Reimbursement reimbursement){
		boolean rowAdded = false;
		
		try {
			PreparedStatement ps = conn.prepareStatement("SELECT COUNT(*) AS cnt FROM reimbursements");
			ResultSet rs = ps.executeQuery();
			rs.next();
			int initalCount = rs.getInt("CNT");
			
			String sql = "{ CALL INSERT_REIMBURSEMENT(?, ?, ?, ?, ?, ?, ?, ?, ?, ?) }";
			
			CallableStatement cs = conn.prepareCall(sql);
			cs.setInt(1, reimbursement.getEmployeeId());
			cs.setString(2, reimbursement.getDescription());
			cs.setInt(3, reimbursement.getEventId());
			cs.setDate(4, new java.sql.Date(reimbursement.getDateCreated().getTime()));
			cs.setString(5, reimbursement.getJustification());
			cs.setFloat(6, reimbursement.getTimeMissed());
			cs.setString(7, "HEAD");
			cs.setInt(8, reimbursement.getSupervisorId());
			cs.setInt(9, reimbursement.getHeadId());
			cs.setInt(10, 2);
			
			cs.execute();
			
			cs.close();
			
			rs = ps.executeQuery();
			rs.next();
			int finalCount = rs.getInt("CNT");
			
			if (initalCount < finalCount) 
				rowAdded = true;
			
			ps.close();
			rs.close();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}		
		return rowAdded;
	}
	
	public boolean deleteReimbursement(int reimbursementID){
		boolean success = false;
		
		try {
			PreparedStatement ps = conn.prepareStatement("SELECT COUNT(*) AS cnt FROM reimbursements");
			ResultSet rs = ps.executeQuery();
			rs.next();
			int initalCount = rs.getInt("CNT");
			
			String sql = "{ CALL delete_reimbursement(?) }";
			CallableStatement cs = conn.prepareCall(sql);
			cs.setInt(1, reimbursementID);
			
			cs.execute();
			
			cs.close();
			
			rs = ps.executeQuery();
			rs.next();
			int finalCount = rs.getInt("CNT");
			
			if (initalCount > finalCount) 
				success = true;
			
			ps.close();
			rs.close();
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		return success;
	}
	
	public double totalReimbursement(int eid){
		double total = 0;
		
		try {
			PreparedStatement ps = conn.prepareStatement("SELECT SUM(total) AS TOTAL FROM totalreimb WHERE employeeID = ? GROUP BY employeeID");
			ps.setInt(1, eid);
			
			ResultSet rs = ps.executeQuery();
			if (rs.next()){
				total = rs.getDouble("total");
			}
			
			ps.close();
			rs.close();
		} catch (Exception e){
			System.out.println(e.getMessage());
		}
		
		return total;
	}
	
	public void updateReimbursement(int rid){
	
		try {
			String sql = "SELECT * FROM reimbursements WHERE reimbursementID = ?";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, rid);
			ResultSet rs = ps.executeQuery();
			
			rs.next();
			String status = rs.getString("status");
			System.out.println(status);
			
			switch(status){
				case("SUPER"):
					sql = "UPDATE reimbursements SET status='HEAD' WHERE reimbursementID = ?";
					break;
				case("HEAD"):
					sql = "UPDATE reimbursements SET status='BENCO' WHERE reimbursementID = ?";
					break;
				case("BENCO"):
					sql = "UPDATE reimbursements SET status='APPROVED' WHERE reimbursementID = ?";
					break;
			}
			System.out.println(sql);
			ps = conn.prepareStatement(sql);
			ps.setInt(1, rid);
			ps.executeQuery();
			ps = conn.prepareStatement("COMMIT");
			ps.executeQuery();
			
			ps.close();
			rs.close();
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	public void denyReimbursement(int rid){
		try {
			String sql = "UPDATE reimbursements SET status='DENIED' WHERE reimbursementID = ?";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, rid);
			ps.executeQuery();
			
			ps = conn.prepareStatement("COMMIT");
			ps.executeQuery();
			
			ps.close();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	private Reimbursement[] constructReimbursements(int reimbursementCount, ResultSet rs){
		Reimbursement[] reimbursements = new Reimbursement[reimbursementCount];
		
		try {
			for (int i = 0; i < reimbursementCount; i++){
				rs.next();
				int reimburseId = rs.getInt("ReimbursementID");
				int empId = rs.getInt("EmployeeId");
				String descript = rs.getString("Description");
				int eventId = rs.getInt("EventId");
				Date dateCreated = new Date(rs.getDate("datecreated").getTime());
				String justification = rs.getString("Justification");
				float timeMissed = rs.getFloat("TimeMissed");
				String status = rs.getString("Status");
				String deniedJustification = rs.getString("deniedJustification");
				int supervisorId = rs.getInt("SupervisorId");
				int headId = rs.getInt("HEADID");
				int bencoId = rs.getInt("BencoId");
				float exceedAmount = rs.getFloat("EXCEEDAMOUNT");
				String exceedJustification = rs.getString("EXCEEDJUSTIFICATION");
				
				reimbursements[i] = new Reimbursement(	reimburseId, empId, descript, eventId, dateCreated, 
														justification, timeMissed, status, deniedJustification,
														supervisorId, headId, bencoId, exceedAmount, exceedJustification);
			}
		} catch (Exception e){
			System.out.print(e.getMessage());
		}
		
		return reimbursements;
	}
	
	private Reimbursement[] smartConstruct(ResultSet rs) throws SQLException{
		List<Reimbursement> reimbs = new ArrayList<>();
		
		while (rs.next()){
			int reimburseId = rs.getInt("ReimbursementID");
			int empId = rs.getInt("EmployeeId");
			String descript = rs.getString("Description");
			int eventId = rs.getInt("EventId");
			Date dateCreated = new Date(rs.getDate("datecreated").getTime());
			String justification = rs.getString("Justification");
			float timeMissed = rs.getFloat("TimeMissed");
			String status = rs.getString("Status");
			String deniedJustification = rs.getString("deniedJustification");
			int supervisorId = rs.getInt("SupervisorId");
			int headId = rs.getInt("HEADID");
			int bencoId = rs.getInt("BencoId");
			float exceedAmount = rs.getFloat("EXCEEDAMOUNT");
			String exceedJustification = rs.getString("EXCEEDJUSTIFICATION");
			
			Reimbursement tmp = new Reimbursement(	reimburseId, empId, descript, eventId, dateCreated, 
					justification, timeMissed, status, deniedJustification,
					supervisorId, headId, bencoId, exceedAmount, exceedJustification);
			reimbs.add(tmp);
		}
		
		return reimbs.toArray(new Reimbursement[reimbs.size()]);
	}
}
