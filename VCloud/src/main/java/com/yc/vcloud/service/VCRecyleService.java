package com.yc.vcloud.service;

import java.util.List;

import com.yc.vcloud.entity.VCRecyle;

public interface VCRecyleService {
	List<VCRecyle> getUserRecyle(int userid);

	boolean returnFile(String deletepath);
}
