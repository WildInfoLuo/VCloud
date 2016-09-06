<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset=UTF-8">
<base href="/VCloud/">
<title>VCloud后台管理系统</title>
<link rel="stylesheet" type="text/css" href="page/back/css/style2.0.css">
<style type="text/css">
	ul li{font-size: 30px;color:#2ec0f6;}
	.tyg-div{z-index:-1000;float:left;position:absolute;left:5%;top:20%;}
	.tyg-p{
		font-size: 14px;
	    font-family: 'microsoft yahei';
	    position: absolute;
	    top: 135px;
	    left: 60px;
	}
	.tyg-div-denglv{
		z-index:1000;float:right;position:absolute;right:3%;top:10%;
	}
	.tyg-div-form{
		background-color: #23305a;
		width:300px;
		height:auto;
		margin:120px auto 0 auto;
		color:#2ec0f6;
	}
	.tyg-div-form form {padding:10px;}
	.tyg-div-form form input[type="text"]{
		width: 270px;
	    height: 30px;
	    margin: 25px 10px 0px 0px;
	}
	.tyg-div-form form button {
		background: #2ec0f6 none repeat scroll 0 0;
	    cursor: pointer;
	    width: 270px;
	    height: 44px;
	    margin-top: 25px;
	    padding: 0;
	    -moz-border-radius: 6px;
	    -webkit-border-radius: 6px;
	    border-radius: 6px;
	    border: 1px solid #2ec0f6;
	    -moz-box-shadow:
	        0 15px 30px 0 rgba(255,255,255,.25) inset,
	        0 2px 7px 0 rgba(0,0,0,.2);
	    -webkit-box-shadow:
	        0 15px 30px 0 rgba(255,255,255,.25) inset,
	        0 2px 7px 0 rgba(0,0,0,.2);
	    box-shadow:
	        0 15px 30px 0 rgba(255,255,255,.25) inset,
	        0 2px 7px 0 rgba(0,0,0,.2);
	    font-family: 'PT Sans', Helvetica, Arial, sans-serif;
	    font-size: 14px;
	    font-weight: 700;
	    color: #fff;
	    text-shadow: 0 1px 2px rgba(0,0,0,.1);
	    -o-transition: all .2s;
	    -moz-transition: all .2s;
	    -webkit-transition: all .2s;
	    -ms-transition: all .2s;
}
</style>
<body>

<div class="tyg-div">
	<ul>
    	<li>让</li>
    	<li><div style="margin-left:20px;">数</div></li>
    	<li><div style="margin-left:40px;">据</div></li>
    	<li><div style="margin-left:60px;">改</div></li>
    	<li><div style="margin-left:80px;">变</div></li>
    	<li><div style="margin-left:100px;">生</div></li>
    	<li><div style="margin-left:120px;">活</div></li>
    </ul>
</div> 
<div id="contPar" class="contPar">
	<div id="page1"  style="z-index:1;">
		<div class="title0">VCloud后台管理系统</div>
		<div class="title1">微云，享受站在云端的日子</div>
		<div class="imgGroug">
			<ul>
				<img alt="" class="img0 png" src="page/back/img/page1_0.png">
				<img alt="" class="img1 png" src="page/back/img/page1_1.png">
				<img alt="" class="img2 png" src="page/back/img/page1_2.png">
			</ul>
		</div>
		<img alt="" class="img3 png" src="page/back/img/page1_3.jpg">
	</div>
</div>
<div class="tyg-div-denglv">
	<div class="tyg-div-form">
		<form action="admin/login" method="post" onsubmit="return checkin()" modelAttribute="admin">
			<h2>登录</h2><p class="tyg-p">欢迎访问  VCloud</p>
			<div style="margin:5px 0px;">
				<input type="text" placeholder="请输入账号..." name="atel" id="account" onblur="checkAccount()"/>
				<span style="color:red;display:none;" id="accountspan">请输入账号...</span>
			</div>
			<div style="margin:5px 0px;">
				<input type="text" placeholder="请输入密码..." name="apwd" id="apwd" onblur="checkPwd()"/>
				<span style="color:red;display:none;" id="pwdspan">请输入密码...</span>
			</div>
			<div style="margin:5px 0px;">
				<input id="yzm" type="text" style="width:100px;" placeholder="请输入验证码..." onkeyup="checkCode()"/>
				<img src="page/back/image.jsp" name="randImage" id="randImage" style="vertical-align:bottom;" alt="验证码"/>
				<a href="javascript:loadimage();">点击刷新</a><br />
				<span style="color:red; display:none;" id="yzmspan">请输入验证码...</span>
			</div>
			<button type="submit" >登<span style="width:20px;"></span>录</button>
		</form>
	</div>
</div>


<script type="text/javascript" src="page/back/js/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="page/back/js/com.js"></script>
<script type="text/javascript" src="page/back/js/backlogin.js"></script>
<!--[if IE 6]>
<script language="javascript" type="text/javascript" src="./script/ie6_png.js"></script>
<script language="javascript" type="text/javascript">
DD_belatedPNG.fix(".png");
</script>
<![endif]-->
</body>
</html>