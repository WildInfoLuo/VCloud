package com.yc.vcloud.handler;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.google.gson.Gson;
import com.yc.vcloud.entity.VCadmin;
import com.yc.vcloud.service.VCAdminService;

@Controller
@RequestMapping("/admin")
@SessionAttributes("admins")
public class VCAdminHandler {
	
	@Autowired
	private VCAdminService vCAdminService;
	
	@ModelAttribute
	public void getModel(ModelMap map){
		map.put("admins", new VCadmin());
	}

	//后台登录
	@RequestMapping(value="/login",method=RequestMethod.POST)
	public String adminLogin(@Valid @ModelAttribute("admin") VCadmin admin,BindingResult result,ModelMap map){
		 VCadmin admin2 = vCAdminService.backLogin(admin);
		if(vCAdminService.backLogin(admin) != null){
			map.put("admins", admin2);
			LogManager.getLogger().debug("admin==>"+admin);
			return "back/index";
		}
		
		if(result.hasErrors()){
			return "back/backlogin";
		}
		
		return "back/backlogin";
	}
	
	//检验验证码的正确性
	@RequestMapping(value="/checkcode/{code}")
	public void checkCode(@PathVariable String code,HttpSession session,PrintWriter out,HttpServletResponse response){
		String yzm = (String) session.getAttribute("rand");
		response.setContentType("text/html");
		//Response.ContentType = "text/html"; 
		if(yzm.equalsIgnoreCase(code)){
			out.print(1);
		}else{
			out.print(0);
		}
		out.flush();
		out.close();
	}
}
