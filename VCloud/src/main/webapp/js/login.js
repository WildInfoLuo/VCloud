$(function() {

	$("#loginBox input").focus(function() {
		this.className += " input-text-over";
	});

	$("#loginBox input").blur(function() {
		this.className = this.className.replace(/input-text-over/, "");
	});

	$("#loginBox button").hover(function() {
		$(this).addClass("input-button-over");
	}, function() {
		$(this).removeClass("input-button-over");
	});

});

/* 点击发送短信 */
function MessageResiter() {
	alert($(".phone_number").val());
	$(".email").val();
	$.post("user/message", function(data) {
		alert(JSON.stringify(data));
	}, "json");
}