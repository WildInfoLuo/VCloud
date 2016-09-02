package com.yc.vcloud.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.vcloud.entity.VCadmin;
import com.yc.vcloud.mapper.VCAdminMapper;
import com.yc.vcloud.service.VCAdminService;

@Service("vCAdminService")
public class VCAdminServiceImpl implements VCAdminService {
	
	@Autowired
	private VCAdminMapper vCAdminMapper;

	@Override
	public VCadmin backLogin(VCadmin admin) {
		return vCAdminMapper.adminLogin(admin);
	}

}
