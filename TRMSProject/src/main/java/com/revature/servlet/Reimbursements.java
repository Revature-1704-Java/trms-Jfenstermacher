package com.revature.servlet;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.revature.beans.Employee;
import com.revature.beans.Reimbursement;
import com.revature.dao.ReimbursementDAO;

@Path("/reimbursements")
public class Reimbursements {
	
	@GET
	@Path("{id}")
	@Produces ({ "application/json" })
	public Reimbursement[] returnUserReimbursements(@PathParam("id") int eid){
		ReimbursementDAO rdao = new ReimbursementDAO();
		
		Reimbursement[] reimbursements = rdao.returnUserReimbursements(eid);
		
		return reimbursements;
	}
	
	@POST
	@Path("add")
	@Consumes({ "application/json"})
	@Produces({ "application/json" })
	public boolean addReimbursement(Reimbursement reimbursement){
		ReimbursementDAO rdao = new ReimbursementDAO();
		
		System.out.println("An add was attempted");
		
		System.out.println(reimbursement);
		
		return rdao.addReimbursement(reimbursement);
	}
	

	@GET
	@Path("total/{eid}")
	@Produces({ "application/json" })
	public double totalReimbursements(@PathParam("eid") int eid){
		ReimbursementDAO rdao = new ReimbursementDAO();
		
		return rdao.totalReimbursement(eid);
	}
	
	@POST
	@Path("assigned")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public Reimbursement[] returnAssignedReimbursements(Employee employee){
		ReimbursementDAO rdao = new ReimbursementDAO();
		
		return rdao.getAssignedReimbursements(employee);
	}
	
	@GET
	@Path("delete/{rid}")
	@Produces({ "application/json" })
	public boolean deleteReimbursement(@PathParam("rid") int rid){
		ReimbursementDAO rdao = new ReimbursementDAO();
		
		System.out.println("Delete attempt");
		
		return rdao.deleteReimbursement(rid);
	}
	
	@GET
	@Path("update/{rid}")
	public void updateReimbursement(@PathParam("rid") int rid){
		ReimbursementDAO rdao = new ReimbursementDAO();
		
		System.out.println("UPDATE IS OCCURING!");
		
		rdao.updateReimbursement(rid);
	}
	
	@GET
	@Path("deny/{rid}")
	public void denyReimbursement(@PathParam("rid") int rid) {
		ReimbursementDAO rdao = new ReimbursementDAO();
		
		System.out.println("deny is occuring");
		
		rdao.denyReimbursement(rid);
	}
}
