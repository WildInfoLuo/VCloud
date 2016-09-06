package com.yc.vcloud.handler;

import java.io.PrintWriter;
import java.util.List;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
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

import com.google.gson.Gson;
import com.yc.vcloud.entity.VCUser;
import com.yc.vcloud.service.VCUserService;
import com.yc.vcloud.utils.CouldMessage;
import com.yc.vcloud.utils.SessionAttribute;

@Controller
@RequestMapping("/user")
@SessionAttributes(SessionAttribute.USERLOGIN)
public class VCUserHandler {
	@Autowired
	private VCUserService service;
	
	@ModelAttribute
	public void getModel(ModelMap map){
		map.put(SessionAttribute.USERLOGIN, new VCUser());
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String register(@Valid @ModelAttribute("user") VCUser user, BindingResult result,HttpSession session,
			HttpServletRequest request,ModelMap map) {
		user.setAddress(request.getRemoteAddr());
		if(session.getAttribute(SessionAttribute.TELRLOGIN)==null){
			map.put("regErrorMsg", "验证码已失效");
			return "register";
		}
		if(user.getCode().equals(session.getAttribute(SessionAttribute.TELRLOGIN))){
			if (service.register(user) > 0) {
				// 成功注册，发送邮件，激活帐号
				return "login";
			}
		}else{
			map.put("regErrorMsg", "验证码不正确");
			return "register";
		}
		// 如果有错误的话，那么将返回注册页面
		if (result.hasErrors()) {
			map.put("regErrorMsg", "注册失败");
			return "register";
		}
		
		return "register";
	}

	/**
	 * 获取电话号码得出验证码
	 * 
	 * @param user
	 * @param out
	 */
	@RequestMapping(value = "/message", method = RequestMethod.POST)
	public void MessageResiter(PrintWriter out, HttpServletRequest request,HttpSession session) {
		CouldMessage cl = new CouldMessage();
		String tel = request.getParameter("tel");
		String num = getCharAndNumr(4);
		session.setAttribute(SessionAttribute.TELRLOGIN, num);
		cl.CouldMessageContent(tel, num);
		Gson gson = new Gson();
		out.println(gson.toJson(num));
		out.flush();
		out.close();
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String Login(VCUser userLogin, BindingResult result, HttpServletRequest request,
			PrintWriter out,ModelMap map) {
		// 如果有错误的话，那么将返回注册页面
		 List<VCUser> users = service.login(userLogin);
		if (users.size()>0) {
			map.put(SessionAttribute.USERLOGIN, users.get(0));
			LogManager.getLogger().debug("user==>"+userLogin);
			return "index";
		}else{
			map.put("logErrorMsg", "用户名或密码输入不正确");
			return "login";
		}
		
	}
	
	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String LogOut(HttpSession session) {
		session.removeAttribute(SessionAttribute.USERLOGIN);
		return "login";
	}

	/**
	 * java生成随机数字和字母组合
	 * 
	 * @param length[生成随机数的长度]
	 * @return
	 */
	public String getCharAndNumr(int length) {
		String val = "";
		Random random = new Random();
		for (int i = 0; i < length; i++) {
			// 输出字母还是数字
			String charOrNum = random.nextInt(2) % 2 == 0 ? "char" : "num";
			// 字符串
			if ("char".equalsIgnoreCase(charOrNum)) {
				// 取得大写字母还是小写字母
				int choice = random.nextInt(2) % 2 == 0 ? 65 : 97;
				val += (char) (choice + random.nextInt(26));
			} else if ("num".equalsIgnoreCase(charOrNum)) { // 数字
				val += String.valueOf(random.nextInt(10));
			}
		}
		return val;
	}
	
	@RequestMapping(value ="/checkzcname",method=RequestMethod.POST)
	public void checkname(HttpServletRequest request,PrintWriter out){
		String username=(String) request.getParameter("usname");
		VCUser user=service.checkUsername(username);
		if(user==null){
			out.println(1);
		}else{
			out.println(0);
		}
		out.flush();
		out.close();
	}
	
	@RequestMapping(value ="/checkzcphone",method=RequestMethod.POST)
	public void checkzcphone(HttpServletRequest request,PrintWriter out){
		String phone=(String) request.getParameter("phone");
		VCUser user=service.checkPhone(phone);
		if(user==null){
			out.println(1);
		}else{
			out.println(0);
		}
		out.flush();
		out.close();
	}
	
	//定时清除验证码
	@RequestMapping(value ="/clearcode",method=RequestMethod.POST)
	public void clearcode(HttpSession session,PrintWriter out){
		session.removeAttribute(SessionAttribute.TELRLOGIN);
		out.println(1);
		out.flush();
		out.close();
	}
	
}
