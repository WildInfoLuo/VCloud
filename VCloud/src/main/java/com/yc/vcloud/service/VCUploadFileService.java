package com.yc.vcloud.service;

import java.util.List;

import com.yc.vcloud.entity.VCUploadFile;

public interface VCUploadFileService {
	
	List<VCUploadFile> getUserFiles(int userid);
	
	boolean insertDir(VCUploadFile vCUploadFile);
	
}
