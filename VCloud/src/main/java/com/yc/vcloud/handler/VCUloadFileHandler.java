package com.yc.vcloud.handler;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

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
	
	
	@RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
    public String  springUpload(HttpServletRequest request) throws IllegalStateException, IOException
    {
		String uploadpath="../sources/";
         long  startTime=System.currentTimeMillis();
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
                    String path=request.getServletContext().getRealPath("/")+uploadpath+file.getOriginalFilename();
                    //上传
                    file.transferTo(new File(path));
                }
                 
            }
           
        }
        long  endTime=System.currentTimeMillis();
        System.out.println("运行时间："+String.valueOf(endTime-startTime)+"ms");
        return "pic_timeline_empty";
    }
	
	
	@RequestMapping(value = "/findAllphoto", method = RequestMethod.GET)
    public String  findAllphoto(HttpServletRequest request,HttpSession session){
		
		return "pic_timeline_empty";
	}
}
