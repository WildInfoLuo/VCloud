package com.yc.vcloud.utils;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.filter.OncePerRequestFilter;

/**
 * 登录过滤
 * 
 * @author Luo_dawei
 *
 */
public class LoginInterceptor extends OncePerRequestFilter {
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		// 不过滤的uri
		String[] notFilter = new String[] { "login.jsp", "back/backlogin.jsp", "index.html", "register.jsp" };
		// 请求的uri
		String uri = request.getRequestURI();
		// uri中包含page时才进行过滤
		if (uri.contains("page")) {
			// 是否过滤
			boolean doFilter = true;
			for (String s : notFilter) {
				if (!uri.contains(s)) {
					// 如果uri中包含不过滤的uri，则不进行过滤
					doFilter = false;
					break;
				}
			}
			if (doFilter) {
				// 执行过滤
				// 从session中获取登录者实体
				Object objUser = request.getSession().getAttribute(SessionAttribute.USERLOGIN);
				Object objAdmin = request.getSession().getAttribute(SessionAttribute.ADMINLOGIN);
				if (null == objUser) {
					// 如果session中不存在登录者实体，则弹出框提示重新登录
					// 设置request和response的字符集，防止乱码
					request.setCharacterEncoding("UTF-8");
					response.setCharacterEncoding("UTF-8");
					response.setContentType("text/html;charset=utf-8");
					PrintWriter out = response.getWriter();
					StringBuilder builder = new StringBuilder();
					builder.append("<script type=\"text/javascript\">");
					builder.append("alert('您好,请先登录bbb!');");
					builder.append("location.href='login.jsp';");
					builder.append("</script>");
					out.print(builder.toString());
				} else {
					// 如果session中存在登录者实体，则继续
					filterChain.doFilter(request, response);
				}
				if (null == objAdmin) {
					// 如果session中不存在登录者实体，则弹出框提示重新登录
					// 设置request和response的字符集，防止乱码
					request.setCharacterEncoding("UTF-8");
					response.setCharacterEncoding("UTF-8");
					response.setContentType("text/html;charset=utf-8");
					PrintWriter out = response.getWriter();
					StringBuilder builder = new StringBuilder();
					builder.append("<script type=\"text/javascript\">");
					builder.append("alert('您好,请先登录aaa!');");
					builder.append("location.href='login.jsp';");
					builder.append("</script>");
					out.print(builder.toString());
				} else {
					// 如果session中存在登录者实体，则继续
					filterChain.doFilter(request, response);
				}
			} else {
				// 如果不执行过滤，则继续
				filterChain.doFilter(request, response);
			}
		} else {
			// 如果uri中不包含background，则继续
			filterChain.doFilter(request, response);
		}
	}
}
