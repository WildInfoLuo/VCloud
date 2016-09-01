<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<base href="/VCloud/">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>VCloud注册</title>
<link rel="short icon" href="images/vcloud.png" />
<link rel="stylesheet" href="css/register-style.css" />
<script src="js/jquery-1.11.3.min.js"></script>
<script src="js/common.js"></script>
<script type="text/javascript" src="js/login.js"></script>
<!--背景图片自动更换-->
<script src="js/supersized.3.2.7.min.js"></script>
<script src="js/supersized-init.js"></script>
</head>
<body>
	<div class="register-container">
		<h1>Welcome</h1>
		<div class="connect">
			<p>Link the world. Share to world.</p>
		</div>
		<form action="user/register" method="post" id="registerForm">
			<div>
				<input type="text" name="uname" class="username" placeholder="您的用户名"
					autocomplete="off" />
				<div id="nameError"></div>
			</div>
			<div>
				<input type="password" name="upwd" class="password"
					placeholder="输入密码" oncontextmenu="return false"
					onpaste="return false" />
				<div id="pwdError"></div>
			</div>
			<div>
				<input type="confirm_password" name="confirm_password" class="confirm_password"
					placeholder="再次输入密码" oncontextmenu="return false"
					onpaste="return false" />
				<div id="confirmpwdError"></div>
			</div>
			<div>
				<input type="text" name="utel" class="phone_number"
					placeholder="输入手机号码" autocomplete="off" id="number" />
				<div id="phoneError"></div>
			</div>
			<div>
				<input type="text" name="email" class="email" placeholder="输入验证码"
					oncontextmenu="return false" onpaste="return false" />
				<button style="float: left; width: 110px; margin-left: 10px;"
					type="button" onclick="MessageResiter()">点击获取验证码</button>
				<div id="codeError"></div>
			</div>
			<button id="submit" type="submit">注 册</button>
		</form>
		<div class="error">这里显示错误信息</div>
		<a href="login.html">
			<button type="button">已经有账号？</button>
		</a>
	</div>
</body>
</html>