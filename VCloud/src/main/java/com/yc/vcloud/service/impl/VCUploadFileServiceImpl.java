package com.yc.vcloud.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.vcloud.entity.VCUploadCount;
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

	@Override
	public List<VCUploadFile> getAllPhoto(VCUploadFile file) {
		return vCUploadFileMapper.getAllPhoto(file);
	}

	@Override
	public boolean uploadFile(VCUploadFile file) {
		return vCUploadFileMapper.uploadFile(file);
	}

	@Override
	public List<VCUploadCount> getPhotoCount() {
		return vCUploadFileMapper.getPhotoCount();
	}

	@Override
	public boolean delFiles(List<String> paths) {
		return vCUploadFileMapper.delFiles(paths);
	}
	public List<VCUploadFile> getAllDoc(VCUploadFile file) {
		return vCUploadFileMapper.getAllDoc(file);
	}

	@Override
	public VCUploadCount getDocCount() {
		return vCUploadFileMapper.getDocCount();
	}

	@Override
	public List<VCUploadFile> getAllMusic(VCUploadFile file) {
		return vCUploadFileMapper.getAllMusic(file);
	}

	@Override
	public VCUploadCount getMusicCount() {
		return vCUploadFileMapper.getMusicCount();
	}

}
