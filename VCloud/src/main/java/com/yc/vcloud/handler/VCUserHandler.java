package com.yc.vcloud.handler;

import java.io.PrintWriter;
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

import com.google.gson.Gson;
import com.yc.vcloud.entity.VCUser;
import com.yc.vcloud.service.VCUserService;
import com.yc.vcloud.utils.CouldMessage;

@Controller
@RequestMapping("/user")
public class VCUserHandler {
	@Autowired
	private VCUserService service;

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String register(@Valid @ModelAttribute("user") VCUser user, BindingResult result,HttpSession session,
			HttpServletRequest request,ModelMap map) {
		System.out.println(user.getCode());
		System.out.println("asd"+session.getAttribute("code"));
		user.setAddress(request.getRemoteAddr());
		if(session.getAttribute("code")==null){
			map.put("regErrorMsg", "验证码已失效");
			return "register";
		}
		if(user.getCode().equals(session.getAttribute("code"))){
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
		session.setAttribute("code", num);
		cl.CouldMessageContent(tel, num);
		Gson gson = new Gson();
		out.println(gson.toJson(num));
		out.flush();
		out.close();
	}

	@RequestMapping(value = "login", method = RequestMethod.POST)
	public String Login(@Valid @ModelAttribute("user") VCUser user, BindingResult result, HttpServletRequest request,
			PrintWriter out) {
		// 如果有错误的话，那么将返回注册页面
		if (result.hasErrors()) {
			return "login";
		}
		if (service.login(user).size()>0) {
			System.out.println("登录成功");
			return "index";
		}
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
		session.removeAttribute("code");
		out.println(1);
		out.flush();
		out.close();
	}
	
}
