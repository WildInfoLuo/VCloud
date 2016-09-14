package com.yc.vcloud.mapper;

import java.util.List;

import com.yc.vcloud.entity.VCUploadCount;
import com.yc.vcloud.entity.VCUploadFile;
import com.yc.vcloud.entity.VCUser;

public interface VCUploadFileMapper {
	
	List<VCUploadFile> getFiles(VCUploadFile file);
	
	boolean insertFile(VCUploadFile file);

	List<VCUploadFile> getAllPhoto(VCUploadFile file);

	boolean uploadFile(VCUploadFile file);

	List<VCUploadCount> getPhotoCount();
	
	boolean delFiles(String[] paths);
	
	List<VCUploadFile> getAllDoc(VCUploadFile file);

	VCUploadCount getDocCount();

	List<VCUploadFile> getAllMusic(VCUploadFile file);

	VCUploadCount getMusicCount();
}
