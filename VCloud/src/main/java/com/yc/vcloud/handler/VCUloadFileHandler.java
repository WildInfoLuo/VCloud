package com.yc.vcloud.handler;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import com.google.gson.Gson;
import com.yc.vcloud.entity.VCShareFile;
import com.yc.vcloud.entity.VCUploadCount;
import com.yc.vcloud.entity.VCUploadFile;
import com.yc.vcloud.entity.VCUser;
import com.yc.vcloud.service.VCUploadFileService;
import com.yc.vcloud.utils.DownloadDemo2;
import com.yc.vcloud.utils.SessionAttribute;

@Controller
@RequestMapping("/uploadFile")
@SessionAttributes(value={SessionAttribute.PHOTO,SessionAttribute.DOC,SessionAttribute.MUSIC})
public class VCUloadFileHandler {
	@Autowired
	private VCUploadFileService vCUploadFileService;
	@RequestMapping(value="/getUserFiles/{filepath}",method=RequestMethod.POST)
	public String getUserFiles(@PathVariable("filepath") String filepath ,HttpSession session,PrintWriter out){
		VCUser user = (VCUser)session.getAttribute(SessionAttribute.USERLOGIN);
		VCUploadFile file = new VCUploadFile(user.getUserid(),filepath.equals("null")?null:filepath);

		List<VCUploadFile> files = vCUploadFileService.getUserFiles(file);

		/*
		 * Map<String,String []> map = new HashMap<String,String []>();
		 * Map<String,String> dates = new HashMap<String,String >(); Set<String>
		 * keys = null; for(VCUploadFile f:files){ String [] fstr =
		 * f.getFilepath().split("/"); keys = map.keySet();
		 * if(keys.contains(fstr[1])){ String [] s = map.get(fstr[1]); }
		 * map.put(fstr[1], fstr); }
		 * System.out.println("map==>"+map.get("我的资源")[2]);
		 * 
		 * System.out.println("key==>"+keys);
		 * 
		 */

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


	/**
	 * 在网盘页面上传文件
	 * 
	 * @param date
	 * @return
	 * @throws IOException
	 * @throws IllegalStateException
	 */
	@RequestMapping(value = "/VCFileLoad", method = RequestMethod.POST)
	public String VCFileLoad(@RequestParam String nextpath,VCUploadFile uploadFile,HttpServletRequest request, HttpSession session,PrintWriter out)
			throws IllegalStateException, IOException {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String uploadpath = "../sources/";
		String filename = "";
		int length = 0;
		// System.out.println(filename + "民" + filesize + "时间" + date);
		long startTime = System.currentTimeMillis();// 开始时间赋值
		// 将当前上下文初始化给 CommonsMutipartResolver （多部分解析器）
		CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(
				request.getSession().getServletContext());
		// 检查form中是否有enctype="multipart/form-data"
		if (multipartResolver.isMultipart(request)) {
			// 将request变成多部分request
			MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
			// 获取multiRequest 中所有的文件名
			@SuppressWarnings("rawtypes")
			Iterator iter = multiRequest.getFileNames();
			while (iter.hasNext()) {
				// 一次遍历所有文件
				MultipartFile file = multiRequest.getFile(iter.next().toString());
				if (file != null) {
					String path = request.getServletContext().getRealPath("/") + uploadpath
							+ file.getOriginalFilename();
					// 上传
					filename = file.getOriginalFilename();
					File files = new File(path);
					file.transferTo(files);
					length = (int) files.length() / 1024;
				}
			}
		}
		VCUser user = (VCUser) session.getAttribute(SessionAttribute.USERLOGIN);
		VCUploadFile file = new VCUploadFile(user.getUserid(), nextpath + filename+"/", length,
				sdf.format(new Date()), "文件", filename,"0");
		boolean flag = vCUploadFileService.uploadFile(file);
		System.out.println("文件上传后"+user.getUserid()+nextpath);
		List<VCUploadFile> wangFile=vCUploadFileService.getAllFileWang(user.getUserid(),nextpath);
		session.setAttribute(SessionAttribute.FILESESSION, wangFile);
		Gson gson=new Gson();
		out.print(gson.toJson(wangFile));
		out.flush();
		out.close();
		if (flag) {
			long endTime = System.currentTimeMillis();
			System.out.println("运行时间：" + String.valueOf(endTime - startTime) + "ms");
			return "Person_VCloud";
		}
		return null;
	}

	/**
	 * 在图形界面上传图片
	 * @param request
	 * @param session
	 * @return
	 * @throws IllegalStateException
	 * @throws IOException
	 */
	@RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
	public String springUpload(HttpServletRequest request, HttpSession session,ModelMap map)
			throws IllegalStateException, IOException {
		String uploadpath = "../sources/";
		long startTime = System.currentTimeMillis();
		int length = 0;
		String filename = "";
		VCUser user = (VCUser) session.getAttribute(SessionAttribute.USERLOGIN);
		SimpleDateFormat sbf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		// 将当前上下文初始化给 CommonsMutipartResolver （多部分解析器）
		CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(
				request.getSession().getServletContext());
		// 检查form中是否有enctype="multipart/form-data"
		if (multipartResolver.isMultipart(request)) {
			// 将request变成多部分request
			MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
			// 获取multiRequest 中所有的文件名
			 List<MultipartFile> files = multiRequest.getFiles("files");
			 for (MultipartFile multipartFile : files) {  
				if (multipartFile != null) {
					filename = multipartFile.getOriginalFilename();
					String path = request.getServletContext().getRealPath("/") + uploadpath
							+ multipartFile.getOriginalFilename();
					System.out.println("path12" + path);
					// 上传
					File f = new File(path);
					multipartFile.transferTo(f);
					length = (int) (f.length() / 1024);
				}
				VCUploadFile file = new VCUploadFile(user.getUserid(), "/我的资源/新建文件夹/" + filename+"/", length,
						sbf.format(new Date()), "图片", filename,"0");
				 vCUploadFileService.uploadFile(file);
			}
		}
		
		VCUploadFile file = new VCUploadFile(user.getUserid(), null);
		List<VCUploadFile> files = vCUploadFileService.getAllPhoto(file);
		map.put(SessionAttribute.PHOTO, files);
		long endTime = System.currentTimeMillis();
		System.out.println("运行时间：" + String.valueOf(endTime - startTime) + "ms");
		return "pic_timeline_empty";
	}
	
	/**
	 * 在图形界面上传文档
	 * @param request
	 * @param session
	 * @return
	 * @throws IllegalStateException
	 * @throws IOException
	 */
	@RequestMapping(value = "/uploadDoc", method = RequestMethod.POST)
	public String docUpload(HttpServletRequest request, HttpSession session,ModelMap map)
			throws IllegalStateException, IOException {
		String uploadpath = "../sources/";
		long startTime = System.currentTimeMillis();
		int length = 0;
		String filename = "";
		VCUser user = (VCUser) session.getAttribute(SessionAttribute.USERLOGIN);
		SimpleDateFormat sbf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		// 将当前上下文初始化给 CommonsMutipartResolver （多部分解析器）
		CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(
				request.getSession().getServletContext());
		// 检查form中是否有enctype="multipart/form-data"
		if (multipartResolver.isMultipart(request)) {
			// 将request变成多部分request
			MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
			// 获取multiRequest 中所有的文件名
			 List<MultipartFile> files = multiRequest.getFiles("files");
			 for (MultipartFile multipartFile : files) {  
				if (multipartFile != null) {
					filename = multipartFile.getOriginalFilename();
					String path = request.getServletContext().getRealPath("/") + uploadpath
							+ multipartFile.getOriginalFilename();
					System.out.println("path12" + path);
					// 上传
					File f = new File(path);
					multipartFile.transferTo(f);
					length = (int) (f.length() / 1024);
				}
				VCUploadFile file = new VCUploadFile(user.getUserid(), "/我的资源/新建文件夹/" + filename+"/", length,
						sbf.format(new Date()), "文档", filename,"0");
				 vCUploadFileService.uploadFile(file);
			}

		}
		VCUploadFile file = new VCUploadFile(user.getUserid(), null);
		List<VCUploadFile> files = vCUploadFileService.getAllDoc(file);
		map.put(SessionAttribute.DOC, files);
		long endTime = System.currentTimeMillis();
		System.out.println("运行时间：" + String.valueOf(endTime - startTime) + "ms");
		return "docupload";
	}
	
	/**
	 * 在图形界面上传音乐
	 * @param request
	 * @param session
	 * @return
	 * @throws IllegalStateException
	 * @throws IOException
	 */
	@RequestMapping(value = "/uploadMusic", method = RequestMethod.POST)
	public String musicUpload(HttpServletRequest request, HttpSession session,ModelMap map)
			throws IllegalStateException, IOException {
		String uploadpath = "../sources/";
		long startTime = System.currentTimeMillis();
		int length = 0;
		String filename = "";
		VCUser user = (VCUser) session.getAttribute(SessionAttribute.USERLOGIN);
		SimpleDateFormat sbf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		// 将当前上下文初始化给 CommonsMutipartResolver （多部分解析器）
		CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(
				request.getSession().getServletContext());
		// 检查form中是否有enctype="multipart/form-data"
		if (multipartResolver.isMultipart(request)) {
			// 将request变成多部分request
			MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
			// 获取multiRequest 中所有的文件名
			 List<MultipartFile> files = multiRequest.getFiles("files");
			 for (MultipartFile multipartFile : files) {  
				if (multipartFile != null) {
					filename = multipartFile.getOriginalFilename();
					String path = request.getServletContext().getRealPath("/") + uploadpath
							+ multipartFile.getOriginalFilename();
					// 上传
					File f = new File(path);
					multipartFile.transferTo(f);
					length = (int) (f.length() / 1024);
				}
				System.out.println(multipartFile.getOriginalFilename());
				VCUploadFile file = new VCUploadFile(user.getUserid(), "/我的资源/新建文件夹/" + filename+"/", length,
						sbf.format(new Date()), "音乐", filename,"0");
				 vCUploadFileService.uploadFile(file);
			}

		}
	
		VCUploadFile file = new VCUploadFile(user.getUserid(), null);
		List<VCUploadFile> files = vCUploadFileService.getAllMusic(file);
		map.put(SessionAttribute.MUSIC, files);
		long endTime = System.currentTimeMillis();
		System.out.println("运行时间：" + String.valueOf(endTime - startTime) + "ms");
		return "musicupload";
	}

	/**
	 * 显示图片的方法
	 * @param request
	 * @param session
	 * @param map
	 * @param out
	 */
	@RequestMapping(value = "/findAllphoto", method = RequestMethod.POST)
	public void findAllphoto(HttpServletRequest request, HttpSession session, ModelMap map, PrintWriter out) {
		VCUser user = (VCUser) session.getAttribute(SessionAttribute.USERLOGIN);
		VCUploadFile file = new VCUploadFile(user.getUserid(), null);
		List<VCUploadFile> files = vCUploadFileService.getAllPhoto(file);
		List<VCUploadCount> count = vCUploadFileService.getPhotoCount();
		session.setAttribute(SessionAttribute.PHOTOCOUNT, count);
		if (files != null) {
			map.put(SessionAttribute.PHOTO, files);
		}
		out.println(1);
		out.flush();
		out.close();

	}
	
	@RequestMapping(value = "/findAllDoc", method = RequestMethod.POST)
	public void findAllDoc(HttpServletRequest request, HttpSession session, ModelMap map, PrintWriter out) {
		VCUser user = (VCUser) session.getAttribute(SessionAttribute.USERLOGIN);
		VCUploadFile file = new VCUploadFile(user.getUserid(), null);
		List<VCUploadFile> files = vCUploadFileService.getAllDoc(file);
		VCUploadCount count = vCUploadFileService.getDocCount();
		session.setAttribute(SessionAttribute.DOCCOUNT, count);
		if (files != null) {
			map.put(SessionAttribute.DOC, files);
		}
		out.println(1);
		out.flush();
		out.close();

	}
	
	@RequestMapping(value = "/findAllMusic", method = RequestMethod.POST)
	public void findAllMusic(HttpServletRequest request, HttpSession session, ModelMap map, PrintWriter out) {
		VCUser user = (VCUser) session.getAttribute(SessionAttribute.USERLOGIN);
		VCUploadFile file = new VCUploadFile(user.getUserid(), null);
		List<VCUploadFile> files = vCUploadFileService.getAllMusic(file);
		VCUploadCount count = vCUploadFileService.getMusicCount();
		session.setAttribute(SessionAttribute.MUSICCOUNT, count);
		if (files != null) {
			map.put(SessionAttribute.MUSIC, files);
		}
		out.println(1);
		out.flush();
		out.close();

	}
	//分享文件的方法
	@ResponseBody
	@RequestMapping(value="/shareFile",method=RequestMethod.POST)
	public void shareFiles(@RequestParam(value="delpaths[]") String[] delpaths,HttpSession session,String password,HttpServletRequest request,PrintWriter out){
		VCUser user = (VCUser) session.getAttribute(SessionAttribute.USERLOGIN);
		SimpleDateFormat sbf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String time=String.valueOf(System.currentTimeMillis());
		String basePath=request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/page/share/"+time;
		VCShareFile sf;
		for(String str:delpaths){
			if(""!=str && str!=null){
				if(""!=password && password!=null){
					sf=new VCShareFile(0, user.getUserid(), str, password, sbf.format(new Date()), time);
				}else{
				    sf=new VCShareFile(0, user.getUserid(), str, "", sbf.format(new Date()), time);
				}
				vCUploadFileService.shareFile(sf);
			}
		}
		out.println(basePath);
		out.flush();
		out.close();
	}
	
	@RequestMapping(value="/findShareFile",method=RequestMethod.POST)
	public void findShareFile(HttpSession session,HttpServletRequest request,PrintWriter out){
		String time =(String) session.getAttribute("shareFile");
		VCShareFile file = new VCShareFile(0, 0, "", "", "", time);
		String pwd=vCUploadFileService.surePwd(file);
		if(pwd!=null){
			out.println(1);
			out.flush();
			out.close();
//			return "downloadshare";
		}else{
			List<VCUploadFile> files = vCUploadFileService.findShareFile(file);
			Gson gs = new Gson();
			String fileStr = gs.toJson(files);
			out.println(fileStr);
			out.flush();
			out.close();
//			return "downloadshare";
		}
		
	}
	
	@RequestMapping(value="/findAllShareFile",method=RequestMethod.POST)
	public void findAllShareFile(HttpSession session,HttpServletRequest request,PrintWriter out){
		VCUser user = (VCUser) session.getAttribute(SessionAttribute.USERLOGIN);
		List<VCUploadFile> files = vCUploadFileService.findAllShareFile(user);
		Gson gs = new Gson();
		String fileStr = gs.toJson(files);
		out.println(fileStr);
		out.flush();
		out.close();
	}
	
	@RequestMapping(value="/cancelshareFile",method=RequestMethod.POST)
	public void cancelshareFile(@RequestParam(value="delpaths[]")  String[] delpaths,HttpSession session,HttpServletRequest request,PrintWriter out){
		VCUser user = (VCUser) session.getAttribute(SessionAttribute.USERLOGIN);
		VCShareFile sf;
		for(String str:delpaths){
				sf=new VCShareFile(0, user.getUserid(), str, "", "", "");
				vCUploadFileService.cancelshareFile(sf);
		}
		List<VCUploadFile> files = vCUploadFileService.findAllShareFile(user);
		Gson gs = new Gson();
		String fileStr = gs.toJson(files);
		out.println(fileStr);
		out.flush();
		out.close();
	}
	
	@RequestMapping(value="/surepwd",method=RequestMethod.POST)
	public void surepwd(HttpSession session,HttpServletRequest request,PrintWriter out,String pwd,ModelMap map){
		String time =(String) session.getAttribute("shareFile");
		VCShareFile file = new VCShareFile(0, 0, "", "", "", time);
		String truepwd=vCUploadFileService.surePwd(file);
		if(pwd.equals(truepwd)){
			List<VCUploadFile> files = vCUploadFileService.findShareFile(file);
			Gson gs = new Gson();
			String fileStr = gs.toJson(files);
			out.println(fileStr);
			out.flush();
			out.close();
		}else{
			out.println(1);
			out.flush();
			out.close();
		}
		
	}
	//删除文件的方法
	@RequestMapping(value="/delFile",method=RequestMethod.POST)
	public String delFiles(@RequestParam(value="delpaths[]") String[] delpaths,@RequestParam(value="date")String date,
							PrintWriter out, HttpSession session){
		VCUser user = (VCUser) session.getAttribute(SessionAttribute.USERLOGIN);
		System.out.println("date===>"+date);
		System.out.println("delpaths===>"+delpaths.length);
		boolean flag= false;
		for(String str:delpaths){
			if(""!=str && str!=null){
				flag = vCUploadFileService.delFiles(str);
				vCUploadFileService.insertRecyle(str, date, user.getUserid());
			}
		}
		out.println(flag);
		out.flush();
		out.close();
		return "Person_VCloud";
	}
	
	@RequestMapping(value="/downloadFile",method=RequestMethod.POST)
	public void downloadFile(@RequestParam(value="delpaths[]")  String[] delpaths,HttpSession session,HttpServletRequest request,PrintWriter out){
		String basePath=request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/../sources/";
		
		for(String str:delpaths){
			if(str!=""){
				DownloadDemo2 download=new DownloadDemo2();
				download.downloadFile(basePath+str.split("/")[str.split("/").length-1], "D:/VCloudDownload/", 5);
				while(true){
					if(download.i==5){
						break;
					}
				}
			}
		}
		
		out.println(1);
		out.flush();
		out.close();
	}
}
