//加载验证码
function loadimage() {
	document.getElementById("randImage").src = "back/image.jsp?" + Math.random();
}

//校验验证码
function checkCode(){
	var code = $("#yzm").val();
	if(code.length==4){
		$.post("admin/checkcode/"+code,function(data){
			alert(data);
			if(data==1){
				alert("yes");
			}else{
				alert("no");
			}
		});
	}
}


