package com.yc.vcloud.mapper;

import com.yc.vcloud.entity.VCadmin;

public interface VCAdminMapper {
	/**
	 * 管理员登录
	 * @param admin:登录 的对象
	 * @return
	 */
	VCadmin adminLogin(VCadmin admin);
	
}
