package com.wild.springmvc.web.handler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloHander {
	
	@RequestMapping("/hello")
	public String hello(){
		System.out.println("进来了...");
		return "success";
	}
}
