package com.yc.vcloud.service;

import java.util.List;

import com.yc.vcloud.entity.VCUser;

public interface VCUserService {
	/**
	 * 注册用户
	 * @param user
	 * @return
	 */
	public int register(VCUser user);
	/**
	 * 登录用户
	 * @param utel：登录以电话登录
	 * @param pwd
	 * @return
	 */
	public List<VCUser> login(VCUser user);
}
