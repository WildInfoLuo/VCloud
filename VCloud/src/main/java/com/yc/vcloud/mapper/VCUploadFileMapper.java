package com.yc.vcloud.mapper;

import java.util.List;

import com.yc.vcloud.entity.VCUploadFile;
import com.yc.vcloud.entity.VCUser;

public interface VCUploadFileMapper {
	
	List<VCUploadFile> getFiles(VCUploadFile file);
	
	boolean insertFile(VCUploadFile file);
}
