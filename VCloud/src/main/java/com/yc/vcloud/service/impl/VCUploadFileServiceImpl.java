package com.yc.vcloud.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.vcloud.entity.VCUploadFile;
import com.yc.vcloud.entity.VCadmin;
import com.yc.vcloud.mapper.VCUploadFileMapper;
import com.yc.vcloud.service.VCAdminService;
import com.yc.vcloud.service.VCUploadFileService;

@Service("vCUploadFileService")
public class VCUploadFileServiceImpl implements VCUploadFileService {
	
	@Autowired
	private VCUploadFileMapper vCUploadFileMapper;

	@Override
	public List<VCUploadFile> getUserFiles(VCUploadFile file) {
		return vCUploadFileMapper.getFiles(file);
	}

	@Override
	public boolean insertDir(VCUploadFile vCUploadFile) {
		return vCUploadFileMapper.insertFile(vCUploadFile);
	}

	
}
