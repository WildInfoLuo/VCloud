function showShare(){
	$("#shareshow").css({"display":"block"});
}

function closeShare(){
	$("#shareshow").css({"display":"none"});
}
function closeSharePath(){
	$("#sharepath").css({"display":"none"});
}

function closepublicsuc(){
	$("#publicsuc").css({"display":"none"});
}

function closepersonsuc(){
	$("#personsuc").css({"display":"none"});
}

function showpath(){
	$("#shareshow").css({"display":"none"});
	$("#sharepath").css({"display":"block"});
}

function showpublic(){
	$("#sharepath").css({"display":"none"});
	$("#publicsuc").css({"display":"block"});
}

function showperson(){
	$("#sharepath").css({"display":"none"});
	$("#personsuc").css({"display":"block"});
}

//复制链接到粘贴板中
function copypublicpath(){
	/*alert(window.clipboardData.getData("text"));*/
	var text=$("#publicpath-text").val();
	window.location=text;
	/*window.clipboardData.clearData();
	window.clipboardData.setData("Text",text);*/
}

var tcheckIcon = new Array();
function filenameIcon(id) {
	// alert(tcheckIcon);
	if (id == 0) {
		if (tcheckIcon[id] == true) {
			/* 已选择check */
			var divcss1 = {
				background : "rgba(0, 0, 0, 0) url('../images/list-view_4e60b0c.png') no-repeat  scroll -9px -12px",
				height : '14px',
				left : '11px',
				width : '14px',
				top : '20px',
				margin : '15px 10px',
				float : 'left'
			};
			$(".check-icon" + id).css(divcss1);
			/*$(".file-name span").css(divcss1);*/
			tcheckIcon[id] = false;
			return;
		} else {
			var divcss2 = {
				background : "rgba(0, 0, 0, 0) url('../images/list-view_4e60b0c.png') no-repeat  scroll -40px -12px",
				height : '14px',
				left : '11px',
				width : '14px',
				top : '20px',
				margin : '15px 10px',
				float : 'left'
			};
			tcheckIcon[id] = true;
			$(".check-icon" + id).css(divcss2);
			/*$(".file-name span").css(divcss2);*/
			return;
		}
	}
	if (tcheckIcon[id] == true && id > 0) {
		/* 已选择check */
		var divcss1 = {
			background : "rgba(0, 0, 0, 0) url('../images/list-view_4e60b0c.png') no-repeat  scroll -9px -12px",
			height : '14px',
			left : '11px',
			width : '14px',
			top : '20px',
			margin : '15px 10px',
			float : 'left'
		};
		tcheckIcon[id] = false;
		$(".check-icon" + id).css(divcss1);
		return;
	} else {
		var divcss2 = {
			background : "rgba(0, 0, 0, 0) url('../images/list-view_4e60b0c.png') no-repeat  scroll -40px -12px",
			height : '14px',
			left : '11px',
			width : '14px',
			top : '20px',
			margin : '15px 10px',
			float : 'left'
		};
		tcheckIcon[id] = true;
		$(".check-icon" + id).css(divcss2);
		return;
	}
}