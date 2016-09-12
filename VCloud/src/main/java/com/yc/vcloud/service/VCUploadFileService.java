package com.yc.vcloud.service;

import java.util.List;

import com.yc.vcloud.entity.VCUploadCount;
import com.yc.vcloud.entity.VCUploadFile;

public interface VCUploadFileService {
	
	List<VCUploadFile> getUserFiles(VCUploadFile file);
	
	boolean insertDir(VCUploadFile vCUploadFile);

	List<VCUploadFile> getAllPhoto(VCUploadFile file);

	boolean uploadFile(VCUploadFile file);

	List<VCUploadCount> getPhotoCount();

	List<VCUploadFile> getAllDoc(VCUploadFile file);

	VCUploadCount getDocCount();

}
