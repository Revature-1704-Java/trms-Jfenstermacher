package com.revature.servlet;

import javax.servlet.http.HttpServlet;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.revature.beans.Employee;
import com.revature.dao.LoginDAO;

@Path("/login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	@GET
	@Produces ({ "application/json" })
	public Employee returnUser(@HeaderParam("em") String email, @HeaderParam("pass") String pass){
		LoginDAO ldao = new LoginDAO();
		
		Employee emp = ldao.returnUser(email, pass);
		
		
		if (emp == null) {
			emp = new Employee(9000, "dummy", "dummy", "dummy", 9000, 9000, 9000);
		}
		
		return emp;
	}
	
	/*@GET
	@Produces ({ "application/json" })
	public Employee returnUser(){
		LoginDAO ldao = new LoginDAO();
		
		Employee emp = ldao.returnUser("1emp@gmail.com", "nope");
		
		if (emp == null) {
			emp = new Employee(9000, "dummy", "dummy", "dummy", 9000, 9000, 9000);
		}
		
		return emp;
	}*/
	
	
}