package com.yc.vcloud.service.impl;

import static org.junit.Assert.*;

import java.util.ArrayList;
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
		VCUploadFile file = new VCUploadFile(10041,"null");
		List<VCUploadFile> files = vCUploadFileService.getUserFiles(file);
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
	
	@Test
	public void testDelUserFiles() {
		List<String> list = new ArrayList<String>();
		list.add("/我的资源/");
		list.add("/新建文件夹/");
		boolean flag = vCUploadFileService.delFiles(list);
		System.out.println("===>"+flag);
		assertEquals(flag, true);
	}

}
