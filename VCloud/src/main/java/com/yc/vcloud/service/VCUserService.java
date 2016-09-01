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
	
	/**
	 * 验证用户名是否存在
	 * @param username  用户名
	 * @return
	 */
	public VCUser checkUsername(String username);
	
	/**
	 * 验证手机号是否被使用
	 * @param phone
	 * @return
	 */
	public VCUser checkPhone(String phone);
}
