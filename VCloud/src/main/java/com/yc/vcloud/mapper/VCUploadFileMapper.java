package com.yc.vcloud.mapper;

import java.util.List;

import com.yc.vcloud.entity.VCShareFile;
import org.apache.ibatis.annotations.Param;

import com.yc.vcloud.entity.VCRecyle;
import com.yc.vcloud.entity.VCUploadCount;
import com.yc.vcloud.entity.VCUploadFile;
import com.yc.vcloud.entity.VCUser;

public interface VCUploadFileMapper {
	
	List<VCUploadFile> getFiles(VCUploadFile file);
	
	boolean insertFile(VCUploadFile file);

	List<VCUploadFile> getAllPhoto(VCUploadFile file);

	boolean uploadFile(VCUploadFile file);

	List<VCUploadCount> getPhotoCount();
	
	boolean delFiles(String paths);
	
	List<VCUploadFile> getAllDoc(VCUploadFile file);

	VCUploadCount getDocCount();

	List<VCUploadFile> getAllMusic(VCUploadFile file);

	VCUploadCount getMusicCount();

	boolean shareFile(VCShareFile list);

	List<VCUploadFile> findShareFile(VCShareFile file);
	
	List<VCUploadFile> getAllFileWang(@Param("userid")int userid,@Param("filepath")String filepath);

	boolean insertRecyle(@Param("deletepath")String filepath,@Param("deletedate")String date,@Param("userid")int userid);
	
	List<VCRecyle> getUserRecyle(int userid);
	
	String surePwd(VCShareFile file);

	List<VCUploadFile> findAllShareFile(VCUser user);

	void cancelshareFile(VCShareFile sf);
}
