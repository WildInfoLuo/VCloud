package com.yc.vcloud.handler;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Iterator;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import com.google.gson.Gson;
import com.yc.vcloud.entity.VCUploadCount;
import com.yc.vcloud.entity.VCUploadFile;
import com.yc.vcloud.entity.VCUser;
import com.yc.vcloud.service.VCUploadFileService;
import com.yc.vcloud.utils.SessionAttribute;

@Controller
@RequestMapping("/uploadFile")
@SessionAttributes(SessionAttribute.PHOTO)
public class VCUloadFileHandler {
	@Autowired
	private VCUploadFileService vCUploadFileService;

	@RequestMapping(value="/getUserFiles/{filepath}",method=RequestMethod.POST)
	public String getUserFiles(@PathVariable("filepath") String filepath ,HttpSession session,PrintWriter out){
		VCUser user = (VCUser)session.getAttribute(SessionAttribute.USERLOGIN);
		VCUploadFile file = new VCUploadFile(user.getUserid(),filepath.equals("null")?null:filepath);
		List<VCUploadFile> files = vCUploadFileService.getUserFiles(file);
		Gson gs = new Gson();
		String fileStr = gs.toJson(files);
		out.println(fileStr);
		out.flush();
		out.close();
		return "Person_VCloud";
	}
	
	@RequestMapping(value="/addDir/{date}",method=RequestMethod.POST)
	public String addDir(@RequestParam String name,@PathVariable String date,HttpSession session,PrintWriter out){
		VCUser user = (VCUser) session.getAttribute(SessionAttribute.USERLOGIN);
		String n = "/"+name+"/";
		System.out.println("===>"+n);
		VCUploadFile file = new VCUploadFile(user.getUserid(), n, date);
		boolean flag = vCUploadFileService.insertDir(file);
		out.print(flag);
		out.flush();
		out.close();
		return "Person_VCloud";
	}
	
	
	@RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
    public String  springUpload(HttpServletRequest request,HttpSession session) throws IllegalStateException, IOException
    {
		String uploadpath="../sources/";
         long  startTime=System.currentTimeMillis();
         int length=0;
         String filename="";
         SimpleDateFormat sbf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
         //将当前上下文初始化给  CommonsMutipartResolver （多部分解析器）
        CommonsMultipartResolver multipartResolver=new CommonsMultipartResolver(
                request.getSession().getServletContext());
        //检查form中是否有enctype="multipart/form-data"
        if(multipartResolver.isMultipart(request))
        {
            //将request变成多部分request
            MultipartHttpServletRequest multiRequest=(MultipartHttpServletRequest)request;
           //获取multiRequest 中所有的文件名
            Iterator iter=multiRequest.getFileNames();
             
            while(iter.hasNext())
            {
                //一次遍历所有文件
                MultipartFile file=multiRequest.getFile(iter.next().toString());
                if(file!=null)
                {
                	filename=file.getOriginalFilename();
                    String path=request.getServletContext().getRealPath("/")+uploadpath+file.getOriginalFilename();
                    System.out.println("path12"+path);
                    //上传
                    File f=new File(path);
                    file.transferTo(f);
                    length=(int) (f.length()/1024);
                }
                 
            }
           
        }
        VCUser user = (VCUser) session.getAttribute(SessionAttribute.USERLOGIN);
    	VCUploadFile file = new VCUploadFile(user.getUserid(),"/我的资源/新建文件夹/"+filename,length,sbf.format(new Date()),"图片",filename);
		boolean flag = vCUploadFileService.uploadFile(file);
		VCUploadFile file1 = new VCUploadFile(user.getUserid(),null);
		List<VCUploadFile> files = vCUploadFileService.getAllPhoto(file1);
		session.setAttribute(SessionAttribute.PHOTO, files);
		if(flag){
			 long  endTime=System.currentTimeMillis();
		     System.out.println("运行时间："+String.valueOf(endTime-startTime)+"ms");
		     return "pic_timeline_empty";
		}
		return null;
    }
	
	
	@RequestMapping(value = "/findAllphoto", method = RequestMethod.POST)
    public void  findAllphoto(HttpServletRequest request,HttpSession session,ModelMap map,PrintWriter out){
		VCUser user = (VCUser) session.getAttribute(SessionAttribute.USERLOGIN);
		VCUploadFile file = new VCUploadFile(user.getUserid(),null);
		List<VCUploadFile> files = vCUploadFileService.getAllPhoto(file);
		List<VCUploadCount> count=vCUploadFileService.getPhotoCount();
		session.setAttribute(SessionAttribute.PHOTOCOUNT,count);
		if(files!=null){
			map.put(SessionAttribute.PHOTO, files);
		}
		out.println(1);
		out.flush();
		out.close();
	}
	
	@RequestMapping(value="/delFile",method=RequestMethod.POST)
	public String delFiles(@RequestParam List<String> delpaths){
		System.out.println("===>"+delpaths);
		return "Person_VCloud";
	}
	
	
}
