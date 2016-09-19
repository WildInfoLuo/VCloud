package com.yc.vcloud.handler;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.gson.Gson;
import com.yc.vcloud.entity.VCRecyle;
import com.yc.vcloud.entity.VCUser;
import com.yc.vcloud.service.VCRecyleService;
import com.yc.vcloud.utils.SessionAttribute;

@Controller
@RequestMapping("/recyle")
public class VCRecyleHandler {
	
	@Autowired
	private VCRecyleService vCRecyleService;
	
	@RequestMapping("/getAllRecyles")
	public String getAll(HttpSession session,PrintWriter out){
		System.out.println("in");
		VCUser user = (VCUser)session.getAttribute(SessionAttribute.USERLOGIN);
		List<VCRecyle> list = vCRecyleService.getUserRecyle(user.getUserid());
		Gson gs = new Gson();
		String rs = gs.toJson(list);
		out.println(rs);
		out.flush();
		out.close();
		return "backstore";
	}
	
}
