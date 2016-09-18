<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<base href="/VCloud/">
<meta charset="UTF-8">
<title>分享</title>
<!--右键菜单样式-->
<link rel="stylesheet" href="css/base.css" />
<link rel="stylesheet" href="css/gizmoMenu.css" />

<link type="text/css" rel="stylesheet" href="css/vclound.css" />
<link type="text/css" rel="stylesheet" href="css/index.css">
<link type="text/css" rel="stylesheet" href="css/progressbar.css">
<link type="text/css" rel="stylesheet" href="css/share.css">
<link href="images/yun.gif" rel="shortcut icon">
<script src="js/jquery-1.11.3.min.js">
	
</script>
<script type="text/javascript" src="js/share.js"></script>
<script src="js/ajaxfileupload.js"></script>
<script type="text/javascript" src="js/index.js"></script>

<script type="text/javascript" src="js/gizmoMenu.js"></script>
<script type="text/javascript">
	$(document).ready(function() {
		$('.container').gizmoMenu({
			'menu' : 'gizmoDropDown'
		});

		$('#hamburger_example').gizmoMenu({
			'menu' : 'gizmoBurger'
		});

		$('#horizontal_example').gizmoMenu({
			'menu' : 'gizmoHorizontal'
		});
	});
</script>
</head>
<body>
	<div id="bg" class="bg" style="display:none;"></div>
	<div id="navbar">
		<div id="navbar_left">
			<img alt="千度云盘" src="images/logo2.png">
			<ul>
				<li id="left_li"><a href="index.jsp">主页</a></li>
				<li class="cjh" id="left_li" onmouseover="showH()"
					onmouseout="hiddenH()">
					<!--" --> <a href="page/Person_VCloud.jsp">网盘</a> <a><img
						id="f-icon" src="images/down.png"
						style="width: 11px; height: 11px; margin-top: 20px; margin-left: 3px; position: absolute;"></a>
					<div id="navbar_hidden" onmouseout="hiddenH()">
						<table id="navbar_table" style="width: 300px; height: 70px;"
							cellspacing="0" cellpadding="8">
							<tr>
								<td><a href="page/Person_VCloud.jsp"> <i
										style="display: block; width: 40px; height: 40px; background: url(images/cloud.png); background-size: cover; margin-left: 15px;"></i>
										<span
										style="font-size: 15px; margin-left: -15px; color: rgb(225, 230, 246);">网盘</span></a>
								</td>
								<td><a href="#"> <i
										style="display: block; width: 40px; height: 40px; background: url(images/tv.png); background-size: cover;"></i>
										<span
										style="font-size: 15px; margin-left: -20px; color: rgb(225, 230, 246);">视频</span></a>
								</td>
								<td><a href="#"> <i
										style="display: block; width: 40px; height: 40px; background: url(images/word.png); background-size: cover;"></i>
										<span
										style="font-size: 15px; margin-left: -20px; color: rgb(225, 230, 246);">文档</span></a>
								</td>
								<td><a href="pic_currentupload_empty.jsp"> <i
										style="display: block; width: 40px; height: 40px; background: url(images/pic.png); background-size: cover;"></i>
										<span
										style="font-size: 15px; margin-left: -15px; color: rgb(225, 230, 246);">图片</span></a>
								</td>
							</tr>
						</table>
					</div>
				</li>
				<li id="left_li"><a href="share.jsp">分享</a></li>
				<li id="left_li"><a href="#">应用</a></li>
			</ul>
		</div>
		<div id="navbar_right">
			<ul>
				<li style="width:120px;">
					<c:if test="${userLogin != null }">
						<a>${userLogin.uname }，您好</a>
					</c:if>
					<c:if test="${userLogin == null }">
						<a href="page/login.jsp">未登录</a>
					</c:if>
				</li>
				<li><a href="user/logout">注销</a></li>
				<li><a href="#">通知</a></li>
				<li><a href="#">更多>></a></li>
			</ul>
		</div>
		<div id="search">
			<ul>
				<li><input type="text" name="searchkey" id="searchkey"
					placeholder="请输入您要搜索的关键字" /><input type="button" name="searchbu"
					id="searchbu" value="搜索" /></li>
			</ul>
		</div>
	</div>

	<div class="content" style="margin-left: 80px;">
		<div class="module-list">
			<span class="history-list-dir">全部文件</span> <span
				class="history-list-tips">已全部加载，共6个</span>
			<div class="list-view-header">
				<div class="list-header">
					<!-- 中间的导航栏 -->
					<ul class="list-cols">
						<li class="first-col" style="width: 60%;">
							<div class="check">
								<span class="check-icon0" onclick="filenameIcon(0)"
									style="background: rgba(0, 0, 0, 0) url('images/list-view_4e60b0c.png') no-repeat scroll -9px -12px; height: 14px; left: 11px; width: 14px; top: 20px; margin: 15px 10px; float: left;"></span>
								<span class="textCla" style="line-height: 43px;">文件名</span> <span
									class="list-header-operatearea"> <span
									class="count-tips" style="line-height: 43px;">已选中6个文件/文件夹</span>
									 <a class="lg-button" href="javascript:void(0);"> <span
										class="lg-button-right"> <em class="icon-download-gray"
											title="下载"></em> <span class="text" style="width: auto;">下载</span>
									</span>
								</a> 
								</span>
							</div>
						</li>
						<li class="col" style="width: 15%; line-height: 43px;"><span
							class="text">大小</span> <span class="order-icon"></span></li>
						<li class="last-col"
							style="width: 21%; cursor: pointer; line-height: 43px;"
							onClick="lastColicon()"><span class="text">修改日期</span> <span
							class="order-icon"></span></li>
					</ul>
				</div>
			</div>
			<div class="list-view-container">
				<div class="module-list-view  container">
					<!-- 先设置隐藏的样式 -->
					<div class="list-view">
						<div class="list-empty-tips" style="display: none;">
							<div class="tip-text">正在加载，请稍候…</div>
						</div>
					</div>
				</div>
				<div class="content-view">
					<div class="grid-view" style="margin-top: 0px;">
						<dd class="g-clearfix">
						</dd>
					</div>
				</div>

			</div>
		</div>
	</div>
	<div id="pwdinput">
		<span style="color: rgb(49,173,238);font-size:18px;font-family:monospace;margin-left:10px;margin-top:20px;display: inline-block;">请输入提取密码</span>
		<div>
			<span id="pwdError" style="margin-left:190px;font-size:12px;display: inline-block;font-family: monospace;color: red;">
			</span>
			<br>
			<span style="margin-left:150px;font-size:12px;margin-top:10px;display: inline-block;font-family: monospace;">
				提取密码
			</span>
			<input id="pwd" type="text"  style="width:83px;height:28px;margin-top:30px;margin-left:50px;"/>
			<br><a id="surepwd" onclick="surepwd()"></a>
		</div>
	</div>
	
	<div class="gizmoMenu gizmoDropDown">
		<ul>
			<li><i class="fa fa-camera-retro"></i><a href="#">查看</a><img
				style="margin-top: 5px; margin-left: 70px;" src="images/jian.png" />
				<ul>
					<li><i class="fa fa-bullseye"></i><a href="#">列表</a></li>
					<li><i class="fa fa-cubes"></i><a href="#">缩略图</a></li>
				</ul></li>
			<li><i class="fa fa-camera-retro"></i><a href="#">排序方式</a><img
				style="margin-top: 5px; margin-left: 38px;" src="images/jian.png" />
				<ul>
					<li><i class="fa fa-bullseye"></i><a href="#">名称</a></li>
					<li><i class="fa fa-cubes"></i><a href="#">大小</a></li>
					<li><i class="fa fa-bullseye"></i><a href="#">修改日期</a></li>
				</ul></li>
			<li><i class="fa fa-arrow-right"></i><a href="#">刷新</a></li>
			<li><i class="fa fa-arrow-right"></i><a href="#">重新加载页面</a></li>
			<li id="file"><img src="images/yfile.png" /><i
				class="fa fa-arrow-right"></i><a href="#">新建文件夹</a></li>
		</ul>
	</div>
	
</body>
</html>