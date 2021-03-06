<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html  class="no-js">
<head>
<meta charset="UTF-8">
<base href="/VCloud/">
<title>VClound -最近上传</title>
<link type="text/css" rel="stylesheet" href="css/piv_currentupload_empty.css"/>
<link type="text/css" rel="stylesheet" href="css/index.css">
<link type="text/css" rel="stylesheet" href="css/vclound.css">
<link type="text/css" rel="stylesheet" href="css/progressbar.css">
<link href="images/云准备.gif" rel="shortcut icon">
<script src="js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="js/index.js"></script>
<script type="text/javascript" src="js/pic_timeline_empty.js"></script>
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
        <li class="list-item-all">
            <a class="b-no-ln" href="javascript:chageBg(this,'list-item-all')">
                <span class="text">
                    <span class="img-ico-disk"></span>
                    <span class="item-title">全部</span>
                </span>
            </a>
        </li>
            <li class="list-item-pic">
                <a class="b-no-ln" href="javascript:chageBg(this,'list-item-pic')">
                    <span class="text">
                        <span class="img-ico-pic"></span>
                        <span class="item-title">图片</span>
                    </span>
                </a>
            </li>
        <li class="list-item-doc">
            <a class="b-no-ln" href="javascript:chageBg(this,'list-item-doc')">
                <span class="text">
                    <span class="img-ico-doc"></span>
                    <span class="item-title">文档</span>
                </span>
            </a>
        </li>
        <li class="list-item-video">
            <a class="b-no-ln" href="javascript:chageBg(this,'list-item-video')">
                <span class="text">
                    <span class="img-ico-video"></span>
                    <span class="item-title">视频</span>
                </span>
            </a>
        </li>
        <li class="list-item-bt">
            <a class="b-no-ln" href="javascript:chageBg(this,'list-item-bt')">
                <span class="text">
                    <span class="img-ico-bt"></span>
                    <span class="item-title">种子</span>
                </span>
            </a>
        </li>
        <li class="list-item-music">
            <a class="b-no-ln" href="javascript:chageBg(this,'list-item-music')">
                <span class="text">
                    <span class="img-ico-music"></span>
                    <span class="item-title">音乐</span>
                </span>
            </a>
        </li>
        <li class="list-item-oth">
            <a class="b-no-ln" href="javascript:chageBg(this,'list-item-oth')">
                <span class="text">
                    <span class="img-ico-oth"></span>
                    <span class="item-title">其它</span>
                </span>
            </a>
        </li>
    </ul>
    <div class="item-separator" style="display: block;"></div>
        <ul class="middle-button-container">
        	<a class="g-button" href="/share/manage" data-button-index="8" data-button-id="b1" style="">
                <span class="g-button-right">
                    <em class="icon-aside-share" title="我的分享"></em>
                    <span class="text" style="width: auto;">我的分享</span>
                </span>
       		</a>
        	<span class="g-dropdown-button" style="display: none;">
        	<a class="g-button" href="javascript:void(0);" data-button-index="" data-button-id="b3">
                <span class="g-button-right">
                    <span class="text" style="width: auto;">更多</span>
                </span>
       		</a>
        	<span class="menu" style="width: 64px;"></span>
        </ul>
        <div class="item-separator" style="display: block;"></div>
            <ul class="bottom-button-container">
                <a class="g-button" href="page/backstore.jsp" data-button-index="9" data-button-id="b5" style="">
                    <span class="g-button-right">
                        <em class="icon-aside-recyclebin" title="回收站"></em>
                        <span class="text" style="width: auto;">回收站</span>
                    </span>
                </a>
                <span class="g-dropdown-button" style="display: none;">
                    <a class="g-button" href="javascript:void(0);" data-button-index="" data-button-id="b7">
                        <span class="g-button-right">
                            <span class="text" style="width: auto;">更多</span>
                        </span>
                    </a>
                <span class="menu" style="width: 64px;">
                    <a class="g-button-menu g-menu-hasIcon" href="javascript:void(0);" data-menu-id="b-menu0" style="display:none;">
                        <em class="icon icon-aside-recyclebin"></em>
                        回收站
                    </a>
            	</span>
            </span>
    	</ul>
        <div class="item-separator" style="display: block;"></div>
     	 <div style="width: 100%; height: 220px; background: transparent none repeat scroll 0% 0%;">
            <div class="aside-absolute-container" style="visibility: visible; position: absolute; width: 100%; height: 155px; top: 460px; bottom: auto;">
        </div>
        <!-- 容量进度条 -->
         <div class="progressbar" data-perc="${countSize/1024/10 }">
            <div class="contain">容量:${countSize }MB/10G</div>
			<div class="bar"><span></span></div>
		</div>
	</div>
</div>
        <div class="module-list">
        	<div class="module-timeline-list">
            	<ul class="clearfix">
                	<li><a href="page/pic_timeline_empty.jsp" data-val="0" hidefocus="true">时光轴</a></li>
                    <li  class="selected"><a data-val="1" href="page/pic_currentupload_empty.jsp" hidefocus="true">最近上传</a></li>
                </ul>
            </div>
            
            <c:choose>
            	<c:when test="${empty photo}">
		             <div class="empty-upload" style="display: block;">
		            	<div class="history-list">
		                    <span class="history-list-dir">全部文件</span>
		                    <span class="history-list-tips">已全部加载，共0个</span>
		                </div>
						<div class="no_file_upload"></div>
		            </div>
            	</c:when>
            	<c:otherwise>
            		<c:set var="allcount" value="0"></c:set>
            		<c:forEach items="${photo}" var="item">
            			<c:set var="allcount" value="${allcount+1 }"></c:set>
            		</c:forEach>
            		<div class="module-timeline" style="display: block;">
            			<div class="history-list">
		                    <span class="history-list-dir">全部文件</span>
		                    <span class="history-list-tips">已全部加载，共${allcount }个</span>
		                </div>
		                	<div class="list-view-header">
				<div  class="list-header">
					<!-- 中间的导航栏 -->
					<ul class="list-cols">
						<li class="first-col" style="width: 60%;">
							<div class="check">
								<span class="check-icon0" onclick="filenameIcon(0)"
									style="background: rgba(0, 0, 0, 0) url('images/list-view_4e60b0c.png') no-repeat scroll -9px -12px; height: 14px; left: 11px; width: 14px; top: 20px; margin: 15px 10px; float: left;"></span>
								 <span
									class="list-header-operatearea"> <span
									class="count-tips" style="line-height: 43px;">已选中6个文件/文件夹</span>
									<a class="lg-button" href="javascript:void(0);"> <span
										class="lg-button-right"> <em class="icon-share-gray"
											title="分享"></em> <span class="text" style="width: auto;">分享</span>
									</span>
								</a> <a class="lg-button" href="javascript:void(0);"> <span
										class="lg-button-right"> <em class="icon-download-gray"
											title="下载"></em> <span class="text" style="width: auto;">下载</span>
									</span>
								</a> <a class="lg-button" href="javascript:void(0);"> <span
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
					</ul>
				</div>
			</div>
		                 <div class="upload-list" style="display: block;">
            				<c:forEach items="${photo}" var="item">
					            <img class="img" src="/VCloud/sources/${item.temp2 }">
            				</c:forEach>
            			  </div>
		            </div>
            	</c:otherwise>
            </c:choose>
        </div>
    </div>
</body>
</html>