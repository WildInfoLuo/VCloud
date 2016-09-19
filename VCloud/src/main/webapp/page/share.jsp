<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<base href="/VCloud/">
<meta charset=UTF-8">
<title>VCloud__分享</title>

<link type="text/css" rel="stylesheet" href="css/vclound.css" />
<link type="text/css" rel="stylesheet" href="css/index.css">
<link type="text/css" rel="stylesheet" href="css/share.css">
<link href="images/云准备.gif" rel="shortcut icon">
<script src="js/jquery-1.11.3.min.js">
	
</script>
<script src="js/vclound.js"></script>
<script type="text/javascript" src="js/index.js"></script>
<script type="text/javascript" src="js/share.js"></script>
<script type="text/javascript" src="js/ZeroClipboard.js"></script>
</head>
<body>
	<div id="navbar">
		<div id="navbar_left">
			<img alt="千度云盘" src="images/logo2.png">
			<ul>
				<li id="left_li"><a href="index.jsp">主页</a></li>
				<li class="cjh" id="left_li" onmouseover="showH()"
					onmouseout="hiddenH()">
					<!--" --> <a href="Person_VCloud.jsp">网盘</a>
					<div id="navbar_hidden" onmouseout="hiddenH()">
						<table id="navbar_table" style="width: 300px; height: 70px;"
							cellspacing="0" cellpadding="8">
							<tr>
								<td><a href="#"> <i
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
								<td><a href="#"> <i
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
	</div>

	<div class="module-aside">
		<ul class="menu-list">
			<li class="list-item-all"><a class="b-no-ln"
				href="javascript:chageBg(this,'list-item-all')"> <span
					class="text"> <span class="img-ico-disk"></span> <span
						class="item-title">全部</span>
				</span>
			</a></li>
			<li class="list-item-pic"><a class="b-no-ln"
				href="javascript:chageBg(this,'list-item-pic')"> <span
					class="text"> <span class="img-ico-pic"></span> <span
						class="item-title">图片</span>
				</span>
			</a></li>
			<li class="list-item-doc"><a class="b-no-ln"
				href="javascript:chageBg(this,'list-item-doc')"> <span
					class="text"> <span class="img-ico-doc"></span> <span
						class="item-title">文档</span>
				</span>
			</a></li>
			<li class="list-item-video"><a class="b-no-ln"
				href="javascript:chageBg(this,'list-item-video')"> <span
					class="text"> <span class="img-ico-video"></span> <span
						class="item-title">视频</span>
				</span>
			</a></li>
			<li class="list-item-bt"><a class="b-no-ln"
				href="javascript:chageBg(this,'list-item-bt')"> <span
					class="text"> <span class="img-ico-bt"></span> <span
						class="item-title">种子</span>
				</span>
			</a></li>
			<li class="list-item-music"><a class="b-no-ln"
				href="javascript:chageBg(this,'list-item-music')"> <span
					class="text"> <span class="img-ico-music"></span> <span
						class="item-title">音乐</span>
				</span>
			</a></li>
			<li class="list-item-oth"><a class="b-no-ln"
				href="javascript:chageBg(this,'list-item-oth')"> <span
					class="text"> <span class="img-ico-oth"></span> <span
						class="item-title">其它</span>
				</span>
			</a></li>
		</ul>
		<div class="item-separator" style="display: block;"></div>
		<ul class="middle-button-container">
			<a class="g-button" href="/share/manage" data-button-index="8"
				data-button-id="b1" style=""> <span class="g-button-right">
					<em class="icon-aside-share" title="我的分享"></em> <span class="text"
					style="width: auto;">我的分享</span>
			</span>
			</a>
			<span class="g-dropdown-button" style="display: none;"> <a
				class="g-button" href="javascript:void(0);" data-button-index=""
				data-button-id="b3"> <span class="g-button-right"> <span
						class="text" style="width: auto;">更多</span>
				</span>
			</a> <span class="menu" style="width: 64px;"></span>
		</ul>
		<div class="item-separator" style="display: block;"></div>
		<ul class="bottom-button-container">
			<a class="g-button" href="/disk/recyclebin" data-button-index="9"
				data-button-id="b5" style=""> <span class="g-button-right">
					<em class="icon-aside-recyclebin" title="回收站"></em> <span
					class="text" style="width: auto;">回收站</span>
			</span>
			</a>
			<span class="g-dropdown-button" style="display: none;"> <a
				class="g-button" href="javascript:void(0);" data-button-index=""
				data-button-id="b7"> <span class="g-button-right"> <span
						class="text" style="width: auto;">更多</span>
				</span>
			</a> <span class="menu" style="width: 64px;"> <a
					class="g-button-menu g-menu-hasIcon" href="javascript:void(0);"
					data-menu-id="b-menu0" style="display: none;"> <em
						class="icon icon-aside-recyclebin"></em> 回收站
				</a>
			</span>
			</span>
		</ul>
		<div class="item-separator" style="display: block;"></div>
		<div
			style="width: 100%; height: 236px; background: transparent none repeat scroll 0% 0%;">
		</div>
	</div>
	
	<!-- 分享 -->
	<div id="shareCon"></div>
	<div id="sharebut" onclick="javascript:showShare()"></div>
	<div id="shareshow">
		<h3 id="shareh3">文件列表<img id="close" src="images/close.png" onclick="closeShare()"></h3>
		<div id="showall">
			<span style="width:40%;float:left;">全部文件</span>
			<div id="search" style="float:left;margin-left:163px;">
				<img id="search-icon" src="images/search.png">
				<input type="text" id="search-key" placeholder="搜索我的网盘文件">
				<img id="search-enter" src="images/enter.png">
			</div>
			<!--控制lay块的隐藏与显示  -->
			<div class="share-grid-switch">
				<a class="list-switch" href="javascript:void(0)" onClick="lswitch()"></a>
				<a class="grid-switch" href="javascript:void(0)" onClick="gswitch()"></a>
			</div>
		</div>
		<div id="name">
			<div style="width:60%;height:40px;float:left;"  id="file">
				<span class="check-icon0" onclick="filenameIcon(0)"
									style="background: rgba(0, 0, 0, 0) url('images/list-view_4e60b0c.png') no-repeat scroll -9px -12px; height: 14px; left: 11px; width: 14px; top: 20px; margin: 15px 10px; float: left;"></span>
								<span class="textCla" style="line-height: 43px;">文件名</span> <span
									class="list-header-operatearea"> <span
									class="count-tips" style="line-height: 43px;"></span>
			</div>
			<div style="width:20%;float:left;"  id="file">
				<span class="text">大小</span>
			</div>
			<div  style="width:20%;float:left;"  id="file">
				<span class="text" onClick="lastColicon()" style="margin-left:7px;">修改日期</span> <span class="order-icon"></span>
			</div>
		</div>
		
		<div id="sharefile">
			<div  id="file2">
				<div style="width: 60%; height: 40px; float: left;" id="file1">
					<span class="check-icon1" onclick="filenameIcon(1)" ></span>
					<div class="filenameicon"></div>
					<a href="#" style="margin-left: 8px;">我的资源</a>
				</div>
				<div style="width: 20%; float: left;"  id="file1">
					<span class="text">-</span>
				</div>
				<div style="width: 20%; float: left;" id="file1">
					<span class="text" onClick="lastColicon()">2016-06-06</span>
				</div>
			</div>
		</div>
		<div id="sharefoot">
			<!-- <div id="localup"></div> -->
			<div id="certain" onclick="showpath()"></div>
		</div>
	</div>
	<div id="sharepath">
		<img id="close" src="images/close.png" onclick="closeSharePath()">
		<a id="publicpath" onclick="showpublic()"></a>
		<span>(任何复制使用此链接的人均可查看下载该文件...)</span>
		<a id="personpath"  onclick="showperson()"></a>
		<span>(只有拥有密钥的人复制使用此链接才可查看下载该文件...)</span>
	</div>
	
	<div id="publicsuc">
		<img id="close" src="images/close.png" onclick="closepublicsuc()">
		<img src="images/success.png" style="width:30px;height:30px;float:left;margin-left:10px;margin-top:20px;">
		<span style="color: rgb(49,173,238);font-size:18px;font-family:monospace;margin-left:10px;margin-top:20px;display: inline-block;">成功创建公开链接</span>
		<div>
			<br><input id="publicpath-text" type="text" readonly="readonly" value="sd" style="width:380px;height:30px;margin-top:10px;margin-left:10px;"/>
			<a id="copypath"  onclick="copypublicpath()"></a>  <br>
			<span style="margin-left:10px;font-size:14px;font-family: cursive;margin-top:10px;display: inline-block;">
			 可以发送给好友:</span> <br>
			 <span style="margin-left:10px;font-size:14px;font-family: cursive;margin-top:8px;display: inline-block;">
			   <a target="blank" href="tencent://message/?uin=635809507&Site=potisoft&Menu=yes"  class="menuclass">罗大伟</a>
			   <a target="blank" href="tencent://message/?uin=396411601&Site=potisoft&Menu=yes"  class="menuclass">小辉辉</a>
			   <a target="blank" href="tencent://message/?uin=517302276&Site=potisoft&Menu=yes"  class="menuclass">张老黑</a>
			</span>
		</div>
		
	</div>
	<div id="personsuc">
		<img id="close" src="images/close.png" onclick="closepersonsuc()">
		<img src="images/success.png" style="width:30px;height:30px;float:left;margin-left:10px;margin-top:20px;">
		<span style="color: rgb(49,173,238);font-size:18px;font-family:monospace;margin-left:10px;margin-top:20px;display: inline-block;">成功创建私密链接</span>
		<div>
			<br><input id="personpath-text" type="text" value="sdfsd" readonly="readonly" style="width:483px;height:30px;margin-top:10px;margin-left:10px;"/>
			<span style="margin-left:10px;font-size:12px;margin-top:10px;display: inline-block;font-family: monospace;">
				提取密码
			</span>
			<br><input id="personpwd" type="text" readonly="readonly" style="width:83px;height:28px;margin-top:10px;margin-left:10px;"/>
			<a id="copypath2" onclick="copypersonpath()"></a>  <br>
			<span style="margin-left:10px;font-size:14px;font-family: cursive;margin-top:10px;display: inline-block;">
			 可以发送给好友:</span> <br>
			 <span style="margin-left:10px;font-size:14px;font-family: cursive;margin-top:8px;display: inline-block;">
			   <a target="blank" href="tencent://message/?uin=635809507&Site=potisoft&Menu=yes"  class="menuclass">罗大伟</a>
			   <a target="blank" href="tencent://message/?uin=396411601&Site=potisoft&Menu=yes"  class="menuclass">小辉辉</a>
			   <a target="blank" href="tencent://message/?uin=517302276&Site=potisoft&Menu=yes"  class="menuclass">张老黑</a>
			</span>
		</div>
	</div>
	
</body>

<script type="text/javascript" src="js/jquery.zclip.min.js"></script>

</html>