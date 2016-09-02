var checkuname;
//验证注册用户名
function checkzcuname() {
	var usname = $("#username").val();
	var reg = /^([a-zA-Z0-9\u4E00-\u9FA5_-]{2,12})/;
	if (usname.match(reg)) {
	    $.post("user/checkzcname", {
	        usname: usname
	    },
	    function(data) {
	        if (parseInt(data) > 0) {
	        	checkuname=true;
	            $("#nameError").html('<label style=" float:left;" class="sure">用户名可以使用</label>');
	        } else {
	            $("#nameError").html('<label style=" float:left;" class="error">用户名已存在</label>');
	        }
	    });
	} else {
	    $("#username").val("");
	    $("#nameError").html('<label style=" float:left;" class="error">用户名格式不正确</label>');
	} 
}

//验证注册密码
var checkzcpwd;
function checkzcpwd() {
    var pwd = $("#password").val();
    var reg = /^([a-zA-Z0-9_-]{6,20})/;
    if (pwd.match(reg)) {
        $("#pwdError").html('<label style=" float:left;" class="sure">可以使用该密码</label>');
        checkzcpwd=true;
    } else {
        $("#password").val("");
        $("#pwdError").html('<label style=" float:left;" class="error">密码不合格</label>');
    }
}

//验证重复密码
var checkpwd;
function checkzcpwdagain() {
    var pwdagain = $("#confirm_password").val();
    var pwd = $("#password").val();
    if (pwdagain == pwd && pwd != "" && pwd != null) {
    	checkpwd=true;
        $("#confirmpwdError").html('<label style=" float:left;" class="sure">密码重复确认正确</label>');
    } else {
        $("#confirmpwdError").html('<label style=" float:left;" class="error">密码重复确认不正确</label>');
        $("#confirm_password").val("");
    }
}

//验证手机号
var checkphone;
function checkzcphone() {
	var phone = $("#phone_number").val();
    var reg = /^1[3|4|5|7|8]\d{9}$/;
    if (phone.match(reg)) {
	    $.post("user/checkzcphone", {
	    	phone: phone
	    },
	    function(data) {
	        if (parseInt(data) > 0) {
	            $("#phoneError").html('<label style=" float:left;" class="sure">手机号可以使用</label>');
	            checkphone=true;
	        } else {
	            $("#phoneError").html('<label style=" float:left;" class="error">手机号已被使用</label>');
	        }
	    });
	} else {
	    $("#phone_number").val("");
	    $("#phoneError").html('<label style=" float:left;" class="error">手机号格式不正确</label>');
	} 
}


//获取验证码
var id;
var codeid;
function sendcheckcode(){
	var tel=$.trim($("#phone_number").val());
	if(checkphone){
		id=window.setInterval("setCodeTime()",1000);
		$.post("user/message", {tel: tel},function(data) {
			if(data){
				codeid=window.setInterval("clearcode()",300000);
			}
		}, "json");
	}else{
		alert("请确认手机号是否正确!")
	}
}
var time=60;
function setCodeTime(){
	$("#getCode").html("<span style='font-size:12px;'>"+time+"秒后可重新获取验证码</span>");
	time--;
	if(time==0){
		$("#getCode").html('<button style="float:left; width:110px; margin-left:10px; " type="button" onclick="sendcheckcode()">点击获取验证码</button>');
		window.clearInterval(id);
		time=60;
	}
}
