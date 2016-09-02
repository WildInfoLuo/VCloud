<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html>
<head>
<base href="/VCloud/">
<meta charset="utf-8">
<title>百度云——云上的日子 你我共享</title>
<link rel="short icon" href="images/vcloud.png" />
<link rel="stylesheet" href="css/login.css">
</head>
<body>
	<div class="bg">
		<div class="bg_top">
			<img width="100%" tabindex="1" style="display: block;"
				src="images/bg_shad_top_2.jpg" />
		</div>
		<div class="bg_bottom">
			<img width="100%" tabindex="1" style="display: block;"
				src="images/bg_shad_bottom_2.jpg" height="289px;" />
		</div>
	</div>
	<div class="gif">
		<img class="top_gif" src="images/tab_3_slog.gif"
			style="width: 84.3125px; height: 91.3385px; left: 550.169px; top: 236.778px;">
		<img class="left_gif" src="images/tab_1_slog.gif"
			style="width: 263.477px; height: 49.1823px; left: 124.012px; top: 113.119px;">
	</div>
	<div class="logo">
		<div class="logo_2">
			<div class="logo_top">
				<img style="display: inline-block; position: relative; top: 3px;"
					width="25px;" height="25px;" src="images/vcloud.png" /> 登录VCloud帐号
			</div>
			<div class="logo_center">
				<form action="user/login" method="post">
					<div class="errorMSG">请输入您的账号密码</div>
					<div class="MSG">
						<p class="username">
							<label class="userpic"></label> <input autocomplete="off"
								type="text" name="utel" placeholder="手机/邮箱/用户名" />
						</p>
						<p class="password">
							<label class="pwdpic"></label> <input autocomplete="off"
								type="password" name="upwd" placeholder="密码" />
						</p>
						<p class="autologin">
							<input style="margin-top: 5px;" type="checkbox" checked="checked"
								name="memberPass"> <label>下次自动登录</label> <a
								style="float: right;" href="">登录遇到问题</a>
						</p>
						<p class="submit">
							<input id="submit" type="submit" value="登 录">
						</p>
					</div>
				</form>
			</div>
			<div>
				<div class="morelogin">可以使用以下方式登录</div>
				<div class="loginchoose">
					<a id="sina" href=""><img src="images/sina.png" /></a> <a id="qq"
						href=""><img src="images/qq.png" /></a>
				</div>
			</div>
		</div>
		<div class="zc">
			<input id="zc" type="button" value="立即注册VCloud账号" onclick="resiterLogin()">
		</div>
	</div>
</body>
<script type="text/javascript">
function resiterLogin(){
	location.href="page/register.jsp";
}
</script>
</html>

