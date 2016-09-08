package com.yc.vcloud.service.impl;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.vcloud.entity.VCUploadFile;
import com.yc.vcloud.service.VCUploadFileService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class VCUploadFileServiceImplTest {
	
	@Autowired
	private VCUploadFileService vCUploadFileService;

	@Test
	public void testGetUserFiles() {
		List<VCUploadFile> files = vCUploadFileService.getUserFiles(10041);
		System.out.println("===>"+files);
		assertNotNull(files);
	}
	
	@Test
	public void testInsertUserFiles() {
		VCUploadFile file = new VCUploadFile(10041, "sdf", "2016-09-08 15:57:20");
		boolean flag = vCUploadFileService.insertDir(file);
		System.out.println("===>"+flag);
		assertEquals(flag, true);
	}

}
