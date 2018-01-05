package com.revature.test;

import java.util.Date;

import com.revature.beans.Reimbursement;
import com.revature.dao.ReimbursementDAO;

public class Tester {
	public static void main(String[] args){
		ReimbursementDAO rdao = new ReimbursementDAO();
		
		Reimbursement[] reimbursements = rdao.returnUserReimbursements(1);
		
		//int rCount = rdao.returnCount(1);
		
		Reimbursement reimbursement = new Reimbursement(4, "what what", 1, new Date(),
				"justification", (float)1.25, "SUPER", 1, 1, 1);
		rdao.addReimbursement(reimbursement);
		
		for (int i = 0; i < reimbursements.length; i++)
		{
			System.out.println(reimbursements[i].getEmployeeId() + " " +reimbursements[i].getEmployeeId() + " " + reimbursements[i].getDescription());
		}
	}
}
