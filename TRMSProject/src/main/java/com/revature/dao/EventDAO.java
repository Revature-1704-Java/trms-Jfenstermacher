package com.revature.dao;

import java.sql.Connection;

import com.revature.util.ConnectionUtil;

public class EventDAO {
	Connection conn;
	
	public EventDAO() {
		try {
			conn = ConnectionUtil.getConnection();
		} catch (Exception e){
			System.out.println(e.getMessage());
		}
	}
}
