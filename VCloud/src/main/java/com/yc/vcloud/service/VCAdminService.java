package com.yc.vcloud.service;

import com.yc.vcloud.entity.VCadmin;

public interface VCAdminService {
	
	/**
	 * 管理员登录
	 * @param admin：登录的对象
	 * @return
	 */
	public VCadmin backLogin(VCadmin admin);
	
}
