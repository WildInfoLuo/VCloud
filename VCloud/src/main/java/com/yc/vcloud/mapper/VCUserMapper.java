package com.yc.vcloud.mapper;

import java.util.List;

import com.yc.vcloud.entity.VCUser;

public interface VCUserMapper {

	/**
	 * 注册
	 * @param uname
	 * @param utel：登录必须有电话号码
	 * @param upwd：密码
	 * @param gender：性别
	 * @param address：登录地址
	 * @return
	 */
	public int add( VCUser user);
	
	/**
	 * 登录用户
	 * @param utel：登录以电话登录
	 * @param pwd
	 * @return
	 */
	public List<VCUser> login(VCUser user);
}
