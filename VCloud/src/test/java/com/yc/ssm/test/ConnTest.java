package com.yc.ssm.test;

import static org.junit.Assert.assertNotNull;

import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.apache.logging.log4j.LogManager;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class ConnTest {

	@Autowired
	private DataSource dataSource;
	
	@Test
	public void testConn() {
		Connection conn;
		try {
			conn = dataSource.getConnection();
			assertNotNull(conn);
			System.out.println(conn);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	}

}
