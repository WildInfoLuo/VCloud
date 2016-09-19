package com.yc.vcloud.service.impl;

import static org.junit.Assert.*;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.vcloud.entity.VCRecyle;
import com.yc.vcloud.service.VCRecyleService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class VCRecyleServiceImplTest {
	
	@Autowired
	private VCRecyleService vCRecyleService;

	@Test
	public void testGetUserRecyle() {
		List<VCRecyle> list = vCRecyleService.getUserRecyle(10041);
		LogManager.getLogger().debug(list);
		assertNotNull(list);
	}

}
