package com.yc.vcloud.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.vcloud.entity.VCRecyle;
import com.yc.vcloud.mapper.VCUploadFileMapper;
import com.yc.vcloud.service.VCRecyleService;

@Service("vCRecyleService")
public class VCRecyleServiceImpl implements VCRecyleService {
	
	@Autowired
	private VCUploadFileMapper vCUploadFileMapper;

	@Override
	public List<VCRecyle> getUserRecyle(int userid) {
		return vCUploadFileMapper.getUserRecyle(userid);
	}

}
