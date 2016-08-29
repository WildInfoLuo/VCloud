<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset=UTF-8">
<title>VCloud__网盘</title>

<link type="text/css" rel="stylesheet" href="../css/vclound.css" />
<link type="text/css" rel="stylesheet" href="../css/index.css">
<link type="text/css" rel="stylesheet" href="../css/share.css">
<link href="../images/云准备.gif" rel="shortcut icon">
<script src="../js/jquery-1.11.3.min.js">
	
</script>
<script src="../js/vclound.js"></script>
<script type="text/javascript" src="../js/index.js"></script>
</head>
<body>

	<div id="navbar">
		<div id="navbar_left">
			<img alt="千度云盘" src="../images/logo2.png">
			<ul>
				<li id="left_li"><a href="../index.jsp">主页</a></li>
				<li class="cjh" id="left_li" onmouseover="showH()"
					onmouseout="hiddenH()">
					<!--" --> <a href="Person_VCloud.jsp">网盘</a> <a><img
						id="f-icon" src="../images/down.png"
						style="width: 11px; height: 11px; margin-top: 20px; margin-left: 3px; position: absolute;"></a>
					<a
					style="background-image: url(images/down.png); width: 10px; height: 10px;"></a>
					<div id="navbar_hidden" onmouseout="hiddenH()">
						<table id="navbar_table" style="width: 300px; height: 70px;"
							cellspacing="0" cellpadding="8">
							<tr>
								<td><a href="#"> <i
										style="display: block; width: 40px; height: 40px; background: url(../images/cloud.png); background-size: cover; margin-left: 15px;"></i>
										<span
										style="font-size: 15px; margin-left: -15px; color: rgb(225, 230, 246);">网盘</span></a>
								</td>
								<td><a href="#"> <i
										style="display: block; width: 40px; height: 40px; background: url(../images/tv.png); background-size: cover;"></i>
										<span
										style="font-size: 15px; margin-left: -20px; color: rgb(225, 230, 246);">视频</span></a>
								</td>
								<td><a href="#"> <i
										style="display: block; width: 40px; height: 40px; background: url(../images/word.png); background-size: cover;"></i>
										<span
										style="font-size: 15px; margin-left: -20px; color: rgb(225, 230, 246);">文档</span></a>
								</td>
								<td><a href="#"> <i
										style="display: block; width: 40px; height: 40px; background: url(../images/pic.png); background-size: cover;"></i>
										<span
										style="font-size: 15px; margin-left: -15px; color: rgb(225, 230, 246);">图片</span></a>
								</td>
							</tr>
						</table>
					</div>
				</li>
				<li id="left_li"><a href="#">分享</a></li>
				<li id="left_li"><a href="#">应用</a></li>
			</ul>
		</div>
		<div id="navbar_right">
			<ul>
				<li style="width: 120px;"><a>用户名</a></li>
				<li><a href="#">注销</a></li>
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
		<h3 id="shareh3">文件列表</h3>
		<div id="showall">
			<span>全部文件</span>
		</div>
		<div id="name">
			<div style="width:60%;height:40px;float:left;">
				<span class="check-icon2" onClick="checkIcon()"></span> 
				<span>文件名</span>
			</div>
			<div style="width:20%;float:left;">
				<span class="text">大小</span>
			</div>
			<div  style="width:20%;float:left;">
				<span class="text" onClick="lastColicon()" style="margin-left:7px;">修改日期</span> <span class="order-icon"></span>
			</div>
		</div>
		
		<div id="name">
			<div style="width:60%;height:40px;float:left;">
				<span class="check-icon2" onClick="checkIcon()"></span> 
				<span>我的资源</span>
			</div>
			<div style="width:20%;float:left;">
				<span class="text">-</span>
			</div>
			<div  style="width:20%;float:left;">
				<span class="text" onClick="lastColicon()">2016-06-06</span>
			</div>
			
		</div>
	</div>
</body>
</html>