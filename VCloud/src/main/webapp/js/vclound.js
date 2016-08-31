$(function() {
	/* 设置在初始化的时候将块隐藏 */
	$(".list-header-operatearea").hide();
	/* 新建文件夹的隐藏 */
	$(".module-edit-name").hide();
	/*详细内容列表界面隐藏*/
	$(".content-view").hide();
});
/* 新建文件夹 */
function upfileSpanjia() {
	$(".module-edit-name").show();
}
function editSure() {
	alert("确定");
}
function editCancel() {
	alert("取消");
}
function lswitch() {
	// 背景图片的位置平移 分别为左右 上下
	var divcss1 = {
		background : "gba(0, 0, 0, 0) url('../images/list-switch_0fd500b.png') no-repeat scroll 0 0",
		backgroundPosition : '0px 0px',
		float : 'left',
		height : '29px',
		width : '32px'
	};
	var divcss2 = {
		background : "gba(0, 0, 0, 0) url('../images/list-switch_0fd500b.png') no-repeat scroll 0 0",
		backgroundPosition : '-33px 0px',
		float : 'left',
		height : '29px',
		width : '32px'
	};
	$(".list-switch").css(divcss1);
	$(".grid-switch").css(divcss2);
	/* 开始变幻界面 */
	$(".list-view").hide();
	$(".content-view").show();
}
/* 设置布局的样式 */
function gswitch() {
	var divcss1 = {
		background : "gba(0, 0, 0, 0) url('../images/list-switch_0fd500b.png') no-repeat scroll 0 0",
		backgroundPosition : '0px -35px',
		float : 'left',
		height : '29px',
		width : '32px'
	};
	var divcss2 = {
		background : "gba(0, 0, 0, 0) url('../images/list-switch_0fd500b.png') no-repeat scroll 0 0",
		backgroundPosition : '-33px -35px',
		float : 'left',
		height : '29px',
		width : '32px'
	};
	$(".list-switch").css(divcss1);
	$(".grid-switch").css(divcss2);

	// <!--开始变幻界面-->
	$(".list-view").show();
	$(".content-view").hide();
}
// <!--点击改变时间排序-->
var icon = true;
function lastColicon() {
	if (!icon) {
		var divcss1 = {
			background : "rgba(0, 0, 0, 0) url('../images/list-view_4e60b0c.png') no-repeat scroll -50px -45px",
			position : 'absolute',
			height : '10px',
			width : '9px',
			margin : '18px 10px',
			float : 'left'
		};
		icon = true;
		$(".last-col .order-icon").css(divcss1);
		return;
	}
	if (icon) {
		var divcss2 = {
			background : "rgba(0, 0, 0, 0) url('../images/list-view_4e60b0c.png') no-repeat scroll -60px -45px",
			position : 'absolute',
			height : '10px',
			width : '9px',
			margin : '18px 10px',
			float : 'left'
		};
		icon = false;
		$(".last-col .order-icon").css(divcss2);
		return;
	}
}
var tcheckIcon = new Array();
function filenameIcon(id) {
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
			$(".textCla").show();
			$(".list-header-operatearea").hide();
			$(".check-icon" + id).css(divcss1);
			$(".file-name span").css(divcss1);
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
			$(".textCla").hide();
			$(".list-header-operatearea").show();
			$(".check-icon" + id).css(divcss2);
			$(".file-name span").css(divcss2);
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
		$(".textCla").show();
		$(".list-header-operatearea").hide();
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
		$(".textCla").hide();
		$(".list-header-operatearea").show();
		$(".check-icon" + id).css(divcss2);
		return;
	}
	
	// 判断
	/*var Index=0;
	for (var i = 1; i < tcheckIcon.length; i++){
		if(tcheckIcon[i] == true){
			Index++;
			$(".textCla").hide();
			$(".list-header-operatearea").show();
		}
	}
	if (Index==(tcheckIcon.length-1)) {
		tcheckIcon[0] = true;
		$(".check-icon0").css(divcss2);
	}
	$(".count-tips").text('已选中 '+Index+' 个文件/文件夹');*/
}