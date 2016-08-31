package com.yc.vcloud.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.vcloud.entity.VCUser;
import com.yc.vcloud.mapper.VCUserMapper;
import com.yc.vcloud.service.VCUserService;
import com.yc.vcloud.utils.Encrypt;

@Service("vCUserService")
public class VCUserServiceImpl implements VCUserService {
	@Autowired
	private VCUserMapper vcmapper;

	@Override
	public int register(VCUser user) {
		// 密码加密 的操作
		user.setUpwd(Encrypt.md5AndSha(user.getUpwd()));
		try {
			return vcmapper.add(user);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return 0;
	}

	@Override
	public List<VCUser> login(VCUser user) {
		// 密码加密 的操作
		user.setUpwd(Encrypt.md5AndSha(user.getUpwd()));
		return vcmapper.login(user);
	}

}
