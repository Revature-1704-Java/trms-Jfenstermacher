package com.revature.util;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import oracle.jdbc.OracleDriver;

public class ConnectionUtil {
	public static Connection getConnection() throws SQLException, IOException {
		String url = "jdbc:oracle:thin:@mydbinstance.cmq5zi4bnpd0.us-east-2.rds.amazonaws.com:1521:ORCL";
		String user = "TRMSAdmin";
		String password = "p4ssw0rd";
		
		OracleDriver oracleDriver = new OracleDriver();
		DriverManager.registerDriver(oracleDriver);
		
		return DriverManager.getConnection(url, user, password);
	}
}