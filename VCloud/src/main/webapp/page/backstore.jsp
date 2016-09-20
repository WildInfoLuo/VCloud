<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<base href="/VCloud/" />
<meta charset=UTF-8">
<title>回收站</title>

<!--右键菜单样式-->
<link rel="stylesheet" href="css/base.css" />
<link rel="stylesheet" href="css/gizmoMenu.css" />

<link type="text/css" rel="stylesheet" href="css/vclound.css" />
<link type="text/css" rel="stylesheet" href="css/index.css">

<link rel="stylesheet" href="css/backstroe.css" />

<link href="images/yun.gif" rel="shortcut icon">
<script src="js/jquery-1.11.3.min.js">
	
</script>
<script src="js/backstroe.js"></script>
<script type="text/javascript" src="js/index.js"></script>

<script type="text/javascript" src="js/gizmoMenu.js"></script>
<script type="text/javascript" src="js/backstroe.js"></script>
</head>
<body>

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
								<td><a href="page/pic_timeline_empty.jsp"> <i
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
			<a class="g-button" href="page/share.jsp" data-button-index="8"
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
			<a class="g-button" href="page/backstore.jsp" data-button-index="9"
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
		</div>
	</div>
	<div style="float:left; width:1186px;">
		 <div class="bar">
			<span class="clear-btn" >
				<img  alt="清空回收站" src="images/img/clearback.png">
			</span>
		 </div>
		 
		 <div class="module-crumbs" >
			<div class="title global-clearfix">
				<span class="crumbs" >回收站</span>
				<span class="loaded">已加载0个</span>
			</div>
		</div>
		
		<div class="module-recyclebin-empty" style="display: none;">
			<p class="img records records-17"></p>
			<p class="text">
			回收站为你保存10天内删除的文件
			</p>
		</div>
		
		<div class="list-view-home" style="display: block;"  >
			<div class="list-view-header">
				<div class="list-header">
					<!-- 中间的导航栏 -->
					<ul class="list-cols">
						<li class="first-col" style="width: 40%; ">
							<div class="check">
								<span class="check-icon0" onclick="filenameIcon(0)"
									style="background: rgba(0, 0, 0, 0) url('images/list-view_4e60b0c.png') no-repeat scroll -9px -12px; height: 14px; left: 11px; width: 14px; top: 20px; margin: 15px 10px; float: left;"></span>
								<span class="textCla" style="line-height: 43px;">文件名</span> <span class="list-header-operatearea" style="display: none;"> <span
									class="count-tips" style="line-height: 43px;"></span>
									  <a class="lg-button" href="javascript:showRecyle();"> <span
										class="lg-button-right"> <em class="icon-return-gray"
											title="还原"></em> <span class="text" style="width: auto;">还原</span>
									</span>
								</a> 
							</div>
						</li>
						<li class="col" style="width: 15%; line-height: 43px;"><span
							class="text">大小</span> <span class="order-icon"></span>
						</li>
						<li class="col" style="width: 15%; line-height: 43px;"><span
							class="text">删除时间</span> <span class="order-icon"></span>
						</li>
						<li class="col" style="width: 15%; line-height: 43px;"><span
							class="text">有效时间</span> <span class="order-icon"></span>
						</li>
					</ul>
				</div>
			</div>
			<div class="list-view-container ">
				<div class="module-list-view  container">
					<div class="list-view">
						<div class="list-empty-tips" style="display: none;">
						<div class="tip-text">正在加载，请稍候…</div>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div id="returnsure">
		<h3 id="shareh3">确认还原<img id="close" src="images/close.png" onclick="closeShare()"></h3>
		<span style="display: block; text-align: center;margin-left:185px; margin-top:20px;position: absolute;">确认删除选中的文件??</span>
		<br/><div id="certain" onclick="returnFile()"></div>
		<div id="cancel" onclick="closeShare()"></div>
	</div>
</body>
</html>