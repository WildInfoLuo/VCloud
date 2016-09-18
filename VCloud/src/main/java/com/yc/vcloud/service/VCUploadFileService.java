package com.yc.vcloud.service;

import java.util.List;

import com.yc.vcloud.entity.VCShareFile;
import com.yc.vcloud.entity.VCUploadCount;
import com.yc.vcloud.entity.VCUploadFile;

public interface VCUploadFileService {
	
	List<VCUploadFile> getUserFiles(VCUploadFile file);
	
	boolean insertDir(VCUploadFile vCUploadFile);

	List<VCUploadFile> getAllPhoto(VCUploadFile file);

	boolean uploadFile(VCUploadFile file);

	List<VCUploadCount> getPhotoCount();
	
	//删除文件夹的方法
	boolean delFiles(List<String> paths);

	List<VCUploadFile> getAllDoc(VCUploadFile file);

	VCUploadCount getDocCount();

	List<VCUploadFile> getAllMusic(VCUploadFile file);

	VCUploadCount getMusicCount();

	boolean shareFile(VCShareFile list);

	List<VCUploadFile> findShareFile(VCShareFile file);

}
