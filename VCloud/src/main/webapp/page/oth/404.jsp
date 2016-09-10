<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html>
<head>
<title>404 error page</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
<link href="../VCloud/page/oth/css/404style.css" rel="stylesheet"
	type="text/css" media="all" />
</head>
<script type="text/javascript">
		var i = 5;
		var intervalid;
		intervalid = setInterval("fun()", 1000);
		function fun() {
			if (i == 0) {
				location.href="page/index.jsp";
				clearInterval(intervalid);
			}
			document.getElementById("mes").innerHTML = i;
			i--;
		}
		function backLogin(){
			location.href="page/index.jsp";
		}
</script>
<body>
	<!-----start-wrap--------->
	<div class="wrap">
		<!-----start-content--------->
		<div class="content">
			<!-----start-logo--------->
			<div class="logo">
				<h1>
					<a href="#"><img src="../VCloud/page/oth/images/logo.png" /></a>
				</h1>
				<span><img src="../VCloud/page/oth/images/signal.png" />Oops!
					The Page you requested was not found!</span>
			</div>
		</div>
		<!----copy-right-------------->
		<p class="copy_right">
			<span style="font-size:18px;font-weight:20px; color: #33CCCC;">页面将在<span id="mes"></span>后返回 <a href="javascript:backLogin()">您也可以点击返回</a></span><br>
			&#169; 2016 Template by<a href="javascript:void(0)" target="_blank">&nbsp;VCloud</a>
		</p>
			
	</div>
</body>
</html>