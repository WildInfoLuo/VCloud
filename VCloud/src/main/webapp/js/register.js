var checkuname;
//验证注册用户名
function checkzcuname() {
	var usname = $("#uname").val();
	var reg = /^([a-zA-Z0-9\u4E00-\u9FA5_-]{2,12})/;
	if (usname.match(reg)) {
	    $.post("../userServlet", {
	        op: "checkUsname",
	        usname: usname
	    },
	    function(data) {
	        if (parseInt(data) > 0) {
	            $("#nameSure").html('<label style=" float:left;" class="sure">用户名可以使用</label>');
	        } else {
	            $("#nameError").html('<label style=" float:left;" class="error">用户名已存在</label>');
	        }
	    });
	} else {
	    $("#uname").val("");
	    $("#checkname").html("用户名格式不正确...").css("color", "#F00");
	} 
}

//验证注册密码
function checkzcpwd() {
    var pwd = $("#zcpwd").val();
    var reg = /^([a-zA-Z0-9_-]{6,20})/;
    if (pwd.match(reg)) {
        $("#zcpwdp").html("可以使用该密码...").css("color", "#0F0");
    } else {
        $("#zcpwd").val("");
        $("#zcpwdp").html("密码不合格...").css("color", "#F00");
    }
}

//验证重复密码
var checkpwd;
function checkzcpwdagain() {
    var pwdagain = $("#zcpwdagain").val();
    var pwd = $("#zcpwd").val();
    if (pwdagain == pwd && pwd != "" && pwd != null) {
    	checkpwd=true;
        $("#zcpwdtwop").html("密码重复确认正确...").css("color", "#0F0");
    } else {
        $("#zcpwdtwop").html("密码不一致请重新输入...").css("color", "#F00");
        $("#zcpwdagain").val("");
    }
}