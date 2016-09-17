//进度条
$(function() {
	$('.progressbar').each(function(){
		var t = $(this),
		dataperc = t.attr('data-perc'),
		barperc = Math.round(dataperc*0.98);
		t.find('.bar').animate({width:barperc}, dataperc*25);
		t.find('.label').append('<div class="perc"></div>');
		
		function perc(){
			var length = t.find('.bar').css('width'),
			perc = Math.round(parseInt(length)/0.98),
			labelpos = (parseInt(length)-2);
			t.find('.label').css('left', labelpos);
			t.find('.perc').text(perc+'%');
		}
		perc();
		setInterval(perc, 0); 
	});
});

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
	if(type=="list-item-pic"){
		$.post("uploadFile/findAllphoto",function(data){
			if(data>0){
				location.href="page/pic_timeline_empty.jsp";
			}
		},"json");
	}else if(type=="list-item-doc"){
		$.post("uploadFile/findAllDoc",function(data){
			if(data>0){
				location.href="page/docupload.jsp";
			}
		},"json");
	}else if(type=="list-item-video"){
		location.href="";
	}else if(type=="list-item-bt"){
		location.href="";
	}else if(type=="list-item-music"){
		$.post("uploadFile/findAllMusic",function(data){
			if(data>0){
				location.href="page/musicupload.jsp";
			}
		},"json");
	}else if(type=="list-item-oth"){
		location.href="";
	}
	
	$(".menu-list li").css({"background-image":"url(images/bg2.jpg)","border":"0"});
	$("."+type).css({"background-image":"url(images/changebg.jpg)","border":"1px solid rgb(52,116,188)"});
}
