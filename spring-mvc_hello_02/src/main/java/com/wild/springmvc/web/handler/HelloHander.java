package com.wild.springmvc.web.handler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloHander {

	// 请求响应的地址
	@RequestMapping("/hello")
	public String hello(String name) {
		System.out.println("进来了..." + name);
		return "success";
	}

	/**
	 * "*" 匹配任意一级 ?匹配任意一个字符 **多级
	 * 
	 * @return
	 */
	/*@RequestMapping("/hello/*")
	public String helloAll() {
		System.out.println("进来了...");
		return "success";
	}*/

	@RequestMapping(value = "/hello02", headers = { "Connection=close" })
	public String hello02(String connection) {
		System.out.println("====>请求参数connection:" + connection);
		return "success";
	}
}
