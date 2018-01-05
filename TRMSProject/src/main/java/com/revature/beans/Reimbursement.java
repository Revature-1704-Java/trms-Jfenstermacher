package com.revature.beans;

import java.util.Date;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Reimbursement {

	private int id;
	private int employeeId;
	private String description;
	private int eventId;
	private Date dateCreated;
	private String justification;
	private float timeMissed;
	private String status;
	private String deniedJustification;
	private int supervisorId;
	private int headId;
	private int bencoId;
	private float exceedAmount;
	private String exceedJustification;
	
	public Reimbursement(){
		
	}
	
	public Reimbursement(int employeeId, String description, int eventId, Date dateCreated,
			String justification, float timeMissed, String status, int supervisorId, int headId, int bencoId) {
		super();
		this.employeeId = employeeId;
		this.description = description;
		this.eventId = eventId;
		this.dateCreated = dateCreated;
		this.justification = justification;
		this.timeMissed = timeMissed;
		this.status = status;
		this.supervisorId = supervisorId;
		this.headId = headId;
		this.bencoId = bencoId;
	}
	
	public Reimbursement(int id, int employeeId, String description, int eventId, Date dateCreated,
			String justification, float timeMissed, String status, String deniedJustification, int supervisorId,
			int headId, int bencoId, float exceedAmount, String exceedJustification) {
		super();
		this.id = id;
		this.employeeId = employeeId;
		this.description = description;
		this.eventId = eventId;
		this.dateCreated = dateCreated;
		this.justification = justification;
		this.timeMissed = timeMissed;
		this.status = status;
		this.deniedJustification = deniedJustification;
		this.supervisorId = supervisorId;
		this.headId = headId;
		this.bencoId = bencoId;
		this.exceedAmount = exceedAmount;
		this.exceedJustification = exceedJustification;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getEventId() {
		return eventId;
	}
	public void setEventId(int eventId) {
		this.eventId = eventId;
	}
	/*@XmlElement(name="created_at")
	@XmlJavaTypeAdapter(DateAdapter.class)*/
	public Date getDateCreated() {
		return dateCreated;
	}
	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}
	public String getJustification() {
		return justification;
	}
	public void setJustification(String justification) {
		this.justification = justification;
	}
	public float getTimeMissed() {
		return timeMissed;
	}
	public void setTimeMissed(float timeMissed) {
		this.timeMissed = timeMissed;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getDeniedJustification() {
		return deniedJustification;
	}
	public void setDeniedJustification(String deniedJustification) {
		this.deniedJustification = deniedJustification;
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
	public float getExceedAmount() {
		return exceedAmount;
	}
	public void setExceedAmount(float exceedAmount) {
		this.exceedAmount = exceedAmount;
	}
	public String getExceedJustification() {
		return exceedJustification;
	}
	public void setExceedJustification(String exceedJustification) {
		this.exceedJustification = exceedJustification;
	}

	public int getBencoId() {
		return bencoId;
	}

	public void setBencoId(int bencoId) {
		this.bencoId = bencoId;
	}

	@Override
	public String toString() {
		return "Reimbursement [id=" + id + ", employeeId=" + employeeId + ", description=" + description + ", eventId="
				+ eventId + ", dateCreated=" + dateCreated + ", justification=" + justification + ", timeMissed="
				+ timeMissed + ", status=" + status + ", deniedJustification=" + deniedJustification + ", supervisorId="
				+ supervisorId + ", headId=" + headId + ", bencoId=" + bencoId + ", exceedAmount=" + exceedAmount
				+ ", exceedJustification=" + exceedJustification + "]";
	}
	
}
