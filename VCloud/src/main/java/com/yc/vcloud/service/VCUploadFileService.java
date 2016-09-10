package com.yc.vcloud.service;

import java.util.List;

import com.yc.vcloud.entity.VCUploadFile;

public interface VCUploadFileService {
	
	List<VCUploadFile> getUserFiles(VCUploadFile file);
	
	boolean insertDir(VCUploadFile vCUploadFile);
	
}
