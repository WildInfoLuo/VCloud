package com.yc.vcloud.service.impl;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.vcloud.entity.VCUser;
import com.yc.vcloud.service.VCUserService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class VCUserServiceImplTest {
	@Autowired
	private VCUserService service;

	@Test
	public void testRegister() {
		int user = service.register(new VCUser("V3","15616647284","a","192.168.15.254"));
		System.out.println("用户名为：" + user);
	}
	
	@Test
	public void testLogin() {
		List<VCUser> user = service.login(new VCUser("15197462069", "a"));
		System.out.println("用户名为：" + user);
	}

}
