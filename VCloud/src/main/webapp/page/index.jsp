<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html  class="no-js">
<head>
<meta charset="UTF-8">

<title>VCloud主页</title>

	<link type="text/css" rel="stylesheet" href="../css/index.css">
	<link type="text/css" rel="stylesheet" href="../css/vclound.css">
	<link rel="stylesheet" href="../css/nheader.css">
	<link rel="stylesheet" href="../css/nstyle.css">
	<script type="text/javascript" src="../js/index.js"></script>
	
</head>
<body>
	<div id="navbar">
		<div id="navbar_left">
			<img alt="千度云盘" src="../images/logo2.png">
			<ul>
				<li id="left_li"><a href="#">主页</a></li>
				<li class="cjh"  id="left_li" onmouseover="showH()" onmouseout="hiddenH()" > <!--" -->
					
					<a href="page/Person_VCloud.jsp">网盘</a>
					<a><img id="f-icon" src="../images/down.png" style="width:11px;height:11px;margin-top:20px;margin-left:3px;position: absolute;"></a>
					<div id="navbar_hidden" onmouseout="hiddenH()">
						<table id="navbar_table" style="width:300px;height:70px;" cellspacing="0" cellpadding="8">
							<tr>
								<td><a href="#">
									<i style="display:block;width:40px;height:40px;background:url(../images/cloud.png);background-size:cover;margin-left:15px;"></i>
									<span style="font-size:15px;margin-left:-15px;color:rgb(225,230,246);">网盘</span></a>
								</td>
								<td><a href="#">
									<i style="display:block;width:40px;height:40px;background:url(../images/tv.png);background-size:cover;"></i>
									<span style="font-size:15px;margin-left:-20px;color:rgb(225,230,246);">视频</span></a>
								</td>
								<td><a href="#">
									<i style="display:block;width:40px;height:40px;background:url(../images/word.png);background-size:cover;"></i>
									<span style="font-size:15px;margin-left:-20px;color:rgb(225,230,246);">文档</span></a>
								</td>
								<td><a href="#">
									<i style="display:block;width:40px;height:40px;background:url(../images/pic.png);background-size:cover;"></i>
									<span style="font-size:15px;margin-left:-15px;color:rgb(225,230,246);">图片</span></a>
								</td>
							</tr>
						</table>
					</div>
				</li>
				<li  id="left_li"><a href="#">分享</a></li>
				<li  id="left_li"><a href="#">应用</a></li>
			</ul>
		</div>
		<div id="navbar_right">
			<ul>
				<li style="width:120px;"><a>用户名</a></li>
				<li><a href="#">注销</a></li>
				<li><a href="#">通知</a></li>
				<li><a href="#">更多>></a></li>
			</ul>
		</div>
    </div>
    
    <div id="sharePart">
		<table id="navbar_table" style="width: 300px; height: 70px;"
			cellspacing="0" cellpadding="8">
			<tr>
				<td><a href="#"> <i
						style="display: block; width: 40px; height: 40px; background: url(../images/picred.png); background-size: cover;"></i>
						<span style="font-size: 14px; margin-left: -8px;color:rgb(225,230,246);">分享图片</span></a></td>
				<td><a href="#"> <i
						style="display: block; width: 40px; height: 40px; background: url(../images/vedio.png); background-size: cover;"></i>
						<span style="font-size: 14px; margin-left: -8px;color:rgb(225,230,246);">分享视频</span></a></td>
				<td><a href="#"> <i
						style="display: block; width: 40px; height: 40px; background: url(../images/wordblue.png); background-size: cover;"></i>
						<span style="font-size: 14px; margin-left: -8px;color:rgb(225,230,246);">分享文档</span></a></td>
				<td><a href="#"> <i
						style="display: block; width: 41px; height: 40px; background: url(../images/music.png); background-size: cover;"></i>
						<span style="font-size: 14px; margin-left: -8px;color:rgb(225,230,246);">分享音乐</span></a></td>
			</tr>
		</table>
	</div>
    
    <div class="module-aside">
    <ul class="menu-list">
        <li class="list-item-all">
            <a class="b-no-ln" href="#">
                <span class="text">
                    <span class="img-ico-disk"></span>
                    <span class="item-title">全部</span>
                </span>
            </a>
        </li>
            <li class="list-item-pic">
                <a class="b-no-ln" href="page/pic_timeline_empty.jsp">
                    <span class="text">
                        <span class="img-ico-pic"></span>
                        <span class="item-title">图片</span>
                    </span>
                </a>
            </li>
        <li class="list-item-doc">
            <a class="b-no-ln" href="#">
                <span class="text">
                    <span class="img-ico-doc"></span>
                    <span class="item-title">文档</span>
                </span>
            </a>
        </li>
        <li class="list-item-video">
            <a class="b-no-ln">
                <span class="text">
                    <span class="img-ico-video"></span>
                    <span class="item-title">视频</span>
                </span>
            </a>
        </li>
        <li class="list-item-bt">
            <a class="b-no-ln" href="#">
                <span class="text">
                    <span class="img-ico-bt"></span>
                    <span class="item-title">种子</span>
                </span>
            </a>
        </li>
        <li class="list-item-music">
            <a class="b-no-ln" href="#">
                <span class="text">
                    <span class="img-ico-music"></span>
                    <span class="item-title">音乐</span>
                </span>
            </a>
        </li>
        <li class="list-item-oth">
            <a class="b-no-ln" href="#">
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
                <a class="g-button" href="/disk/recyclebin" data-button-index="9" data-button-id="b5" style="">
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
        <div style="width: 100%; height: 97px; background: transparent none repeat scroll 0% 0%;">
            <div class="aside-absolute-container" style="visibility: visible; position: absolute; width: 100%; height: 155px; top: 460px; bottom: auto;">
        </div>
	</div>
</div>
    
    
    
	<div class="wrap" id="wrap">
	<div class="wrapper">
    <div class="product_list" id="product_list">
      <div class="product_box shoulei show">
        <div class="bg_box">
          <img src="../images/img/bg_shoulei.jpg">
        </div>
        <div class="content">
          <div class="main_box">
            <h2 class="hide_txt  png">
              <span class="txt_1 png">炽</span>
              <span class="txt_2 png">热</span>
              <span class="txt_3 png">追</span>
              <span class="txt_4 png">片</span>
              <span class="txt_5 png">之</span>
              <span class="txt_6 png">心</span>
              <span class="txt_7 png">没</span>
              <span class="txt_8 png">有</span>
              <span class="txt_9 png">wifi</span>
              <span class="txt_10 png">也</span>
              <span class="txt_11 png">挡</span>
              <span class="txt_12 png">不</span>
              <span class="txt_13 png">住</span>
            </h2>
            
          </div>
        </div>
      </div>
      <div class="product_box xnet">
         <div class="bg_box">
          <img src="../images/img/bg_xnet.jpg">
        </div>
        <div class="content">
          <div class="main_box">
            <h2 class="hide_txt  png">
              <span class="txt_1 png">极</span>
              <span class="txt_2 png">速</span>
              <span class="txt_3 png">不</span>
              <span class="txt_4 png">止</span>
              <span class="txt_5 png">一</span>
              <span class="txt_6 png">次</span>
              <span class="txt_7 png">的</span>
              <span class="txt_8 png">挑</span>
              <span class="txt_9 png">战</span>
            </h2>
            
          </div>
        </div>
      </div>
      <div class="product_box member">
        <div class="bg_box">
          <img src="../images/img/bg_member.jpg">
        </div>
        <div class="content">
          <div class="main_box">
            <h2 class="hide_txt  png">
              <span class="txt_1 png">快</span>
              <span class="txt_2 png">让</span>
              <span class="txt_3 png">生</span>
              <span class="txt_4 png">活</span>
              <span class="txt_5 png">慢</span>
              <span class="txt_6 png">下</span>
              <span class="txt_7 png">来</span>
            </h2>
         
          </div>
        </div>
      </div>
    </div>
    <div class="product_btns" id="product_btns">
      <div class="content">
        <div class="btns_area">
          <div class="btns_box" id="control_box">
            <a href="http://sc.chinaz.com/jiaoben/" target="_blank" class="btn_ipr btn_shoulei cur" title="回收站" ><span class="ic_shoulei hide_txt png">回收站</span></a>
            <a href="http://sc.chinaz.com/jiaoben/" target="_blank" class="btn_xnet" title="分享"><span class="ic_xnet hide_txt png">分享</span></a>
            <a href="http://sc.chinaz.com/jiaoben/" target="_blank" class="btn_member" title="网盘"><span class="ic_member hide_txt png">网盘</span></a>
            <span class="ic_line" id="ic_line"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="rpt_bg png" id="rpt_bg"></div>
  </div>
</div>
</body>
<script type="text/javascript" src="../js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="../js/chajian.js"></script>
</html>