<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<base href="/VCloud/page/back/">
<title>VCloud后台管理系统</title>
<link rel="stylesheet" type="text/css" href="css/easyui.css">
<link rel="stylesheet" type="text/css" href="css/icon.css">
<link rel="stylesheet" type="text/css" href="css/demo.css">
<script type="text/javascript" src="js/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="js/jquery.easyui.min.js"></script>
<script type="text/javascript" src="js/index.js"></script>
<script type="text/javascript">
		function quit(){
			$.post("../../userServlet",{op:"quit"},function(data){
				if(data>0){
					location.href="index.jsp";
				}
			});
		}
	</script>
</head>
<body class="easyui-layout">
	<div data-options="region:'north',border:false"
		style="height: 60px; background: #B3DFDA; padding: 10px">
		欢迎您,${admins.aname} <a href="javascript:quit()">注销</a>
	</div>
	<div data-options="region:'west',split:true,title:'菜单'"
		style="width: 200px; padding: 10px;">
		<ul class="easyui-tree">
			<li><span>菜单</span>
				<ul>
					<li>用户管理</li>
					<li>上传文件管理</li>
				</ul>
			</li>
		</ul>
	</div>
	<div data-options="region:'east',split:true,collapsed:true,title:'帮助'"
		style="width: 100px; padding: 10px;">east region</div>
	<div data-options="region:'south',border:false"
		style="height: 50px; background: #A9FACD; padding: 10px;">south
		region</div>
	<div data-options="region:'center',title:'操作'">
		<div id="center_area" class="easyui-tabs" data-options="fit:true">
			<!-- 树具体内容的显示区域 -->
		</div>
	</div>
</body>
</html>