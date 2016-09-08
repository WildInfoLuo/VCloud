package com.yc.vcloud.handler;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.google.gson.Gson;
import com.yc.vcloud.entity.VCUploadFile;
import com.yc.vcloud.entity.VCUser;
import com.yc.vcloud.service.VCUploadFileService;
import com.yc.vcloud.utils.SessionAttribute;

@Controller
@RequestMapping("/uploadFile")
public class VCUloadFileHandler {
	@Autowired
	private VCUploadFileService vCUploadFileService;

	@RequestMapping(value="/getUserFiles",method=RequestMethod.POST)
	public String getUserFiles(HttpSession session,PrintWriter out){
		VCUser user = (VCUser)session.getAttribute(SessionAttribute.USERLOGIN);
		List<VCUploadFile> files = vCUploadFileService.getUserFiles(user.getUserid());
		Gson gs = new Gson();
		String file = gs.toJson(files);
		out.println(file);
		out.flush();
		out.close();
		System.out.println("===>"+file);
		return "Person_VCloud";
	}
	
	@RequestMapping(value="/addDir/{name}/{date}",method=RequestMethod.POST)
	public String addDir(@PathVariable("name")String name,@PathVariable String date,HttpSession session){
		VCUser user = (VCUser) session.getAttribute(SessionAttribute.USERLOGIN);
		VCUploadFile file = new VCUploadFile(user.getUserid(), name, date);
		boolean flag = vCUploadFileService.insertDir(file);
		System.out.println(name);
		System.out.println(flag);
		return "Person_VCloud";
	}
	
}
