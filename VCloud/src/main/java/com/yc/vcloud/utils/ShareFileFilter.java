package com.yc.vcloud.utils;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


public class ShareFileFilter implements Filter {
	private String errorPage="page/downloadshare.jsp";
	@Override
	public void destroy() {

	}

	@Override
	public void doFilter(ServletRequest arg0, ServletResponse arg1, FilterChain arg2)
			throws IOException, ServletException {
		HttpServletRequest request=(HttpServletRequest) arg0;
		HttpServletResponse response=(HttpServletResponse) arg1;
		
		String uri=request.getRequestURI();
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out=response.getWriter();
		HttpSession session=request.getSession();
		session.setAttribute("shareFile", uri.substring(uri.lastIndexOf("/")+1));
		String basePath=request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/";
//		out.print("<script>location.href='"++"'</script>");
		response.sendRedirect(basePath+errorPage);
//		out.print("<script>$.post('uploadFile/findShareFile',{temp:"+uri.substring(uri.lastIndexOf("/")+1)+"},function(data){if(data!=null){location.href='"+basePath+errorPage+"'}else{location.href='"+basePath+"page/oth/404.jsp'}})</script>");
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
		if(arg0.getInitParameter("errorPage")!=null){
			errorPage=arg0.getInitParameter("errorPage");
		}
	}

}
