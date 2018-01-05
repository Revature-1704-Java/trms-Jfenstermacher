package com.revature.beans;

import java.util.Date;

public class Event {

	private int eventId;
	private Date startDate;
	private String eventTime;
	private String eventLocation;
	private double eventCost;
	private int gradingId;
	private int eventTypeId;
	public int getEventId() {
		return eventId;
	}
	
	public Event() { }
	
	public Event(int eventId, Date startDate, String eventTime, String eventLocation, double eventCost, int gradingId,
			int eventTypeId) {
		super();
		this.eventId = eventId;
		this.startDate = startDate;
		this.eventTime = eventTime;
		this.eventLocation = eventLocation;
		this.eventCost = eventCost;
		this.gradingId = gradingId;
		this.eventTypeId = eventTypeId;
	}
	
	public void setEventId(int eventId) {
		this.eventId = eventId;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public String getEventTime() {
		return eventTime;
	}
	public void setEventTime(String eventTime) {
		this.eventTime = eventTime;
	}
	public String getEventLocation() {
		return eventLocation;
	}
	public void setEventLocation(String eventLocation) {
		this.eventLocation = eventLocation;
	}
	public double getEventCost() {
		return eventCost;
	}
	public void setEventCost(double eventCost) {
		this.eventCost = eventCost;
	}
	public int getGradingId() {
		return gradingId;
	}
	public void setGradingId(int gradingId) {
		this.gradingId = gradingId;
	}
	public int getEventTypeId() {
		return eventTypeId;
	}
	public void setEventTypeId(int eventTypeId) {
		this.eventTypeId = eventTypeId;
	}
	
}
