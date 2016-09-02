package com.yc.vcloud.handler;

import javax.validation.Valid;

import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.yc.vcloud.entity.VCadmin;
import com.yc.vcloud.service.VCAdminService;

@Controller
@RequestMapping("/admin")
@SessionAttributes("admins")
public class VCAdminHandler {
	
	@Autowired
	private VCAdminService vCAdminService;

	@RequestMapping(value="/login",method=RequestMethod.POST)
	public String adminLogin(@Valid VCadmin admin,BindingResult result,ModelMap map){
		if(result.hasErrors()){
			return "backlogin";
		}
		if(vCAdminService.backLogin(admin) != null){
			map.put("admins", admin);
			LogManager.getLogger().debug("admin==>"+admin);
			return "";
		}
		return "backlogin";
	}
	
}
