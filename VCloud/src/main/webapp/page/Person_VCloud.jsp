<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<base href="/VCloud/">
<meta charset="UTF-8">
<title>VCloud__网盘</title>
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
<script src="js/vclound.js"></script>
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
				<li id="left_li"><a href="page/index.jsp">主页</a></li>
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
								<td><a href="page/docupload.jsp"> <i
										style="display: block; width: 40px; height: 40px; background: url(images/word.png); background-size: cover;"></i>
										<span
										style="font-size: 15px; margin-left: -20px; color: rgb(225, 230, 246);">文档</span></a>
								</td>
								<td><a href="page/pic_currentupload_empty.jsp"> <i
										style="display: block; width: 40px; height: 40px; background: url(images/pic.png); background-size: cover;"></i>
										<span
										style="font-size: 15px; margin-left: -15px; color: rgb(225, 230, 246);">图片</span></a>
								</td>
							</tr>
						</table>
					</div>
				</li>
				<li id="left_li"><a href="page/share.jsp">分享</a></li>
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
			<a class="g-button" href="page/myshare.jsp" data-button-index="8"
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
			<a class="g-button" href="backstore.jsp" data-button-index="9"
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
			<div class="aside-absolute-container"
				style="visibility: visible; position: absolute; width: 100%; height: 155px; top: 460px; bottom: auto;">
			</div>
			<!-- 容量进度条 -->
	         <div class="progressbar" data-perc="${countSize/1024/10 }">
	            <div class="contain">容量:${countSize }MB/10G</div>
				<div class="bar"><span></span></div>
			</div>
		</div>
	</div>
	<!--上传文件、新建文件夹-->
	<div id="layoutMain" class="frame-main">
		<div class="module-toolbar">
				<div>
					<ul class="upfileds">
						<li>
							<div class="time-upfileimg">
								<form id="upload" action="uploadFile/VCFileLoad" method="post" enctype="multipart/form-data">
									<input id="h5Input0" type="file"
										style="width: 100px; height: 39px; position: absolute; opacity: 0; cursor: pointer;"
										name="uploadFile" accept="*/*" title="点击选择文件" multiple="multiple"
										onchange="upFileLoad()"/>
								</form>
							</div>
						</li>
						<li class="upfileInputjia">
							<div>
								<div class="upfileimgjia"></div>
								<a href="javascript:upfileSpanjia()" style="width: 80px;"><span
									class="upfileSpanjia">新建文件夹</span></a>
							</div>
						</li>
					</ul>
				</div>
		</div>
		<!--控制lay块的隐藏与显示  -->
		<div class="list-grid-switch">
			<a class="list-switch" href="javascript:void(0)" onClick="lswitch()"></a>
			<a class="grid-switch" href="javascript:void(0)" onClick="gswitch()"></a>
		</div>
	</div>
	<div class="content">
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
									class="count-tips" style="line-height: 43px;"></span>
									<a class="lg-button" href="javascript:shareFile();"> <span
										class="lg-button-right"> <em class="icon-share-gray"
											title="分享"></em> <span class="text" style="width: auto;">分享</span>
									</span>
								</a> <a class="lg-button" href="javascript:downloadFile();"> <span
										class="lg-button-right"> <em class="icon-download-gray"
											title="下载"></em> <span class="text" style="width: auto;">下载</span>
									</span>
								</a> <a class="lg-button" href="javascript:deleteFile();"> <span
										class="lg-button-right"> <em class="icon-del-gray"
											title="删除"></em> <span class="text" style="width: auto;">删除</span>
									</span>
								</a> <a class="lg-button" href="javascript:void(0);"> <span
										class="lg-button-right"> <span class="text"
											style="width: auto;">复制</span>
									</span>
								</a> <a class="lg-button" href="javascript:void(0);"> <span
										class="lg-button-right"> <span class="text"
											style="width: auto;">移动</span>
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
			<br><input id="publicpath-text" type="text" value="" readonly="readonly" style="width:380px;height:30px;margin-top:10px;margin-left:10px;"/>
			<a id="copypath" onclick="copypublicpath()"></a>  <br>
			<span style="margin-left:10px;font-size:14px;font-family: cursive;margin-top:10px;display: inline-block;">
			 1.生成文件下载链接</span> <br>
			 <span style="margin-left:10px;font-size:14px;font-family: cursive;margin-top:8px;display: inline-block;">
			 2.把链接通过QQ、微博、人人网、QQ空间等方式分享给好友
			</span>
		</div>
		
	</div>
	<div id="personsuc">
		<img id="close" src="images/close.png" onclick="closepersonsuc()">
		<img src="images/success.png" style="width:30px;height:30px;float:left;margin-left:10px;margin-top:20px;">
		<span style="color: rgb(49,173,238);font-size:18px;font-family:monospace;margin-left:10px;margin-top:20px;display: inline-block;">成功创建私密链接</span>
		<div>
			<br><input id="personpath-text" type="text"  readonly="readonly" style="width:483px;height:30px;margin-top:10px;margin-left:10px;"/>
			<span style="margin-left:10px;font-size:12px;margin-top:10px;display: inline-block;font-family: monospace;">
				提取密码
			</span>
			<br><input id="personpwd" type="text" readonly="readonly" style="width:83px;height:28px;margin-top:10px;margin-left:10px;"/>
			<a id="copypath2" onclick="copypersonpath()"></a>  <br>
			<span style="margin-left:10px;font-size:14px;font-family: cursive;margin-top:10px;display: inline-block;">
				可以将链接发送给你的QQ好友等
			</span>
		</div>
	</div>
	<div id="download" >
		<span style="color: rgb(49,173,238);font-size:18px;font-family:monospace;margin-left:150px;margin-top:20px;display: inline-block; ">文件正在下载中,请等待..</span>
		<div>
			<img src="images/wait.gif" style="width: 400px; height: 150px; margin-left: 50px;" >
		</div>
	</div>
</body>
</html>