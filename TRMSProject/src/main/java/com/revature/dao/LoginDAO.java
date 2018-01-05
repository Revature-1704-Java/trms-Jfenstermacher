package com.revature.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.revature.beans.Employee;
import com.revature.util.ConnectionUtil;

public class LoginDAO {
Connection conn;
	
	public LoginDAO() {
		try {
			conn = ConnectionUtil.getConnection();
		} catch (Exception e){
			System.out.println(e.getMessage());
		}
	}
	public Employee returnUser(String email, String pass){
		Employee emp = null;
		try {
			PreparedStatement ps = conn.prepareStatement("SELECT * FROM employees WHERE email=? AND pass=?");
			
			ps.setString(1, email);
			ps.setString(2, pass);
			ResultSet rs = ps.executeQuery();
			if (rs.next()){
				int empId = rs.getInt("EMPLOYEEID");
				String last = rs.getString("LASTNAME");
				String first = rs.getString("FIRSTNAME");
				int empTypeId = rs.getInt("EMPLOYEETYPEID");
				int supId = rs.getInt("SUPERVISORID");
				int headId = rs.getInt("HEADID");
				emp = new Employee(empId, last, first, email, empTypeId, supId, headId);
			}
			
			ps.close();
			rs.close();
		} catch (Exception e){
			System.out.println(e.getMessage());
		}
		
		return emp;
	}
}
