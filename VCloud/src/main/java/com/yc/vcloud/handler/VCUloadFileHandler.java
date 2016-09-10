package com.yc.vcloud.handler;

import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

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

	@RequestMapping(value="/getUserFiles/{filepath}",method=RequestMethod.POST)
	public String getUserFiles(@PathVariable String filepath ,HttpSession session,PrintWriter out){
		VCUser user = (VCUser)session.getAttribute(SessionAttribute.USERLOGIN);
		VCUploadFile file = new VCUploadFile(user.getUserid(),filepath.equals("null")?null:filepath);
		List<VCUploadFile> files = vCUploadFileService.getUserFiles(file);
		System.out.println(files);
		/*Map<String,String []> map = new HashMap<String,String []>();
		Map<String,String> dates = new HashMap<String,String >(); 
		Set<String> keys = null;
		for(VCUploadFile f:files){
			String [] fstr = f.getFilepath().split("/");
			keys = map.keySet();
			if(keys.contains(fstr[1])){
				String [] s = map.get(fstr[1]);
			}
			map.put(fstr[1], fstr);
		}
		System.out.println("map==>"+map.get("我的资源")[2]);
		
		System.out.println("key==>"+keys);
		
		*/
		Gson gs = new Gson();
		String fileStr = gs.toJson(files);
		out.println(fileStr);
		out.flush();
		out.close();
		return "Person_VCloud";
	}
	
	@RequestMapping(value="/addDir/{name}/{date}",method=RequestMethod.POST)
	public String addDir(@PathVariable("name")String name,@PathVariable String date,HttpSession session,PrintWriter out){
		VCUser user = (VCUser) session.getAttribute(SessionAttribute.USERLOGIN);
		VCUploadFile file = new VCUploadFile(user.getUserid(), name, date);
		boolean flag = vCUploadFileService.insertDir(file);
		out.print(flag);
		out.flush();
		out.close();
		return "Person_VCloud";
	}
	
}
