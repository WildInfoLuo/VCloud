package com.yc.vcloud.service.impl;

import static org.junit.Assert.*;

import org.apache.logging.log4j.LogManager;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.vcloud.entity.VCadmin;
import com.yc.vcloud.service.VCAdminService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class VCAdminServiceImplTest {
	
	@Autowired
	private VCAdminService vCAdminService;

	@Test
	public void testBackLogin() {
		VCadmin admin = vCAdminService.backLogin(new VCadmin("15197462069","a"));
		LogManager.getLogger().debug("admin==>"+admin);
		assertNotNull(admin);
	}

}
