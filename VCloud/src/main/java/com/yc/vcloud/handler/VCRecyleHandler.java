package com.yc.vcloud.handler;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.google.gson.Gson;
import com.yc.vcloud.entity.VCRecyle;
import com.yc.vcloud.entity.VCUser;
import com.yc.vcloud.service.VCRecyleService;
import com.yc.vcloud.service.VCUploadFileService;
import com.yc.vcloud.utils.SessionAttribute;

@Controller
@RequestMapping("/recyle")
public class VCRecyleHandler {
	
	@Autowired
	private VCRecyleService vCRecyleService;
	
	@Autowired
	private VCUploadFileService vCUploadFileService;
	
	@RequestMapping("/getAllRecyles")
	public String getAll(HttpSession session,PrintWriter out){
		VCUser user = (VCUser)session.getAttribute(SessionAttribute.USERLOGIN);
		List<VCRecyle> list = vCRecyleService.getUserRecyle(user.getUserid());
		Gson gs = new Gson();
		String rs = gs.toJson(list);
		System.out.println("recyle===>"+rs);
		out.println(rs);
		out.flush();
		out.close();
		return "backstore";
	}
	
	@RequestMapping("/returnRe")
	public String returnRe(@RequestParam (value="delpaths[]") String[] delpaths ,HttpSession session,PrintWriter out){
		VCUser user = (VCUser)session.getAttribute(SessionAttribute.USERLOGIN);
		List<VCRecyle> list = vCRecyleService.getUserRecyle(user.getUserid());
		boolean flag = false;
		for(String str:delpaths){
			System.out.println(str);
			flag = vCRecyleService.returnFile(str);
			boolean f = vCUploadFileService.reFile(str);
			System.out.println(f);
		}
		
		/*out.println(flag);
		out.flush();
		out.close();*/
		return "backstore";
	}
	
}
