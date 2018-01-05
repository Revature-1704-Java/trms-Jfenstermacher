package com.revature.beans;

public class Employee {
	
	private int id;
	private String last;
	private String first;
	private String email;
	private int employeeTypeId;
	private int supervisorId;
	private int headId;
	
	public Employee() {
		
	}
	
	public Employee(int id, String last, String first, String email, int employeeTypeId, int supervisorId, int headId) {
		super();
		this.id = id;
		this.last = last;
		this.first = first;
		this.email = email;
		this.employeeTypeId = employeeTypeId;
		this.supervisorId = supervisorId;
		this.headId = headId;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirst() {
		return first;
	}
	public void setFirst(String first) {
		this.first = first;
	}
	public String getLast() {
		return last;
	}
	public void setLast(String last) {
		this.last = last;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getEmployeeTypeId() {
		return employeeTypeId;
	}
	public void setEmployeeTypeId(int employeeTypeId) {
		this.employeeTypeId = employeeTypeId;
	}
	public int getSupervisorId() {
		return supervisorId;
	}
	public void setSupervisorId(int supervisorId) {
		this.supervisorId = supervisorId;
	}
	public int getHeadId() {
		return headId;
	}
	public void setHeadId(int headId) {
		this.headId = headId;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", last=" + last + ", first=" + first + ", email=" + email + ", employeeTypeId="
				+ employeeTypeId + ", supervisorId=" + supervisorId + ", headId=" + headId + "]";
	}
}
