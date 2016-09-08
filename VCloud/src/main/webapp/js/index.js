function showH(){
	$("#navbar_hidden").css("display","block");  
	$("#f-icon")[0].src="images/up.png";
}
function hiddenH(){
	$("#navbar_hidden").hide();
	$("#f-icon")[0].src="images/down.png";
}

//修改背景颜色
function chageBg(part,type){
	location.href="page/pic_timeline_empty.jsp"
	$(".menu-list li").css({"background-image":"url(images/bg2.jpg)","border":"0"});
	$("."+type).css({"background-image":"url(images/changebg.jpg)","border":"1px solid rgb(52,116,188)"});
	
}
