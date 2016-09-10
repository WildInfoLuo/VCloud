var pathData = null;
$(function() {
	/* 设置在初始化的时候将块隐藏 */
	$(".list-header-operatearea").hide();
	/* 新建文件夹的隐藏 */
	$(".module-edit-name").hide();
	/* 详细内容列表界面隐藏 */
	$(".content-view").hide();
	var str = "";
	$
			.post(
					"uploadFile/getUserFiles/" + null,
					function(data) {
						pathData = data;
						for (var i = 0; i < data.length; i++) {
							var path = parseFilePath(data[i].filepath, 1);
							str += '<dd class="open-enable">'
									+ '<li class="file-name" style="width: 60%;"><span '
									+ 'class="check-icon1" onclick="filenameIcon(1)"'
									+ 'style="background: rgba(0, 0, 0, 0) url(images/list-view_4e60b0c.png) no-repeat scroll -9px -12px; height: 14px; left: 11px; width: 14px; top: 20px; margin: 15px 10px; float: left;"></span>'
									+ '<div class="fileicon"></div>'
									+ '<div class="text"><div class="filenameicon"></div>'
									+ '<a class="filename" style="padding-left: 6px;"'
									+ 'href="javascript:getNextPath('
									+ '\'/'
									+ path
									+ '/\','
									+ 1
									+ ')" title='
									+ path
									+ '>'
									+ path
									+ '</a></div></li>'
									+ '<li class="file-size" style="width: 16%;">-</li>'
									+ '<li>' + data[i].uploaddate
									+ '</li></dd>';
						}
						$(".list-view").append($(str));
					}, "json");
});

var isdir = 0;

/* 新建文件夹 */
function upfileSpanjia() {
	$(".module-edit-name").show();
}

// 确定新建文件夹
function editSure() {
	var name = $(".box").val();
	var date = getDate();
	var str = "";
	$
			.post(
					"uploadFile/addDir/" + name + "/" + date,
					function(data) {
						if (data) {
							str += '<dd class="open-enable">'
									+ '<li class="file-name" style="width: 60%;"><span '
									+ 'class="check-icon1" onclick="filenameIcon(1)"'
									+ 'style="background: rgba(0, 0, 0, 0) url(images/list-view_4e60b0c.png) no-repeat scroll -9px -12px; height: 14px; left: 11px; width: 14px; top: 20px; margin: 15px 10px; float: left;"></span>'
									+ '<div class="fileicon"></div>'
									+ '<div class="text"><div class="filenameicon"></div>'
									+ '<a class="filename" style="padding-left: 6px;"'
									+ 'href="javascript:getNextPath('
									+ '\''
									+ name
									+ '\''
									+ ','
									+ '\''
									+ name
									+ '\''
									+ ')" title='
									+ name
									+ '>'
									+ name
									+ '</a></div></li>'
									+ '<li class="file-size" style="width: 16%;">-</li>'
									+ '<li>' + date + '</li></dd>';
							// $(".list-view").prepend($(str)); //显示在第一条
						}
					});
	$(".module-edit-name").css("display", "none");
}

function editCancel() {
	$(".module-edit-name").css("display", "none");
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

	var str = "";
	for (var i = 0; i < pathData.length; i++) {
		var path = parseFilePath(pathData[i].filepath, 1);
		str += '<div class="grid-view-item1"'
				+ 'style="display: block; height: 122px; margin: 4px 4px 0 0; text-align: center; width: 142px; float: left;"'
				+ 'onclick="filenameIcon(1)">'
				+ '<div class="dir-large" title="">'
				+ '<img class="thumb"> <span class="checkbox"></span>'
				+ '</div>' + '<div class="file-name">'
				+ '<a class="filename" title=' + path
				+ ' href="javascript:getNextPath(' + '\'/' + path + '/\',' + 2
				+ ')"">' + path + '</a>' + '</div>' + '</div>';
	}
	$(".g-clearfix").html("").append($(str));
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
	/*
	 * var Index=0; for (var i = 1; i < tcheckIcon.length; i++){
	 * if(tcheckIcon[i] == true){ Index++; $(".textCla").hide();
	 * $(".list-header-operatearea").show(); } } if
	 * (Index==(tcheckIcon.length-1)) { tcheckIcon[0] = true;
	 * $(".check-icon0").css(divcss2); } $(".count-tips").text('已选中 '+Index+'
	 * 个文件/文件夹');
	 */
}
// 上传文件
function upFileLoad(filename) {
	$("#upload").submit();
	/*var filesize=document.getElementById("h5Input0").files[0].size;
	$.post("uploadFile/VCFileLoad", {filename:filename,filesize:filesize}, function(data) {
		
	});*/
}
// 获取当前时间
function getDate() {
	var date = new Date();
	return date.getFullYear()
			+ "-"
			+ (date.getMonth() + 1)
			+ "-"
			+ (date.getDate() + " " + date.getHours() + ":" + date.getMinutes());
}

// 解析路径 路径 目录级别
function parseFilePath(filePath, num) {
	var paths = new Array();
	paths = filePath.split("/");
	if (paths.length == 1) {
		return paths[0];
	}
	return paths[num];
}

// 获取下一级路径
function getNextPath(path, view) {
	var nums = new Array();
	nums = path.split("/");
	var num = 0;
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] != null && nums[i] != "") {
			num++;
		}
	}
	var paths = new Array();
	var str = "";
	for (var i = 0; i < pathData.length; i++) {
		paths = pathData[i].filepath.split("/");
		if (pathData[i].filepath.indexOf(path) == 0) {
			if ((num + 1) < paths.length && paths.length > 1) {
				if (view == 1) {
					str += '<dd class="open-enable">'
							+ '<li class="file-name" style="width: 60%;"><span '
							+ 'class="check-icon1" onclick="filenameIcon(1)"'
							+ 'style="background: rgba(0, 0, 0, 0) url(images/list-view_4e60b0c.png) no-repeat scroll -9px -12px; height: 14px; left: 11px; width: 14px; top: 20px; margin: 15px 10px; float: left;"></span>'
							+ '<div class="fileicon"></div>'
							+ '<div class="text"><div class="filenameicon"></div>'
							+ '<a class="filename" style="padding-left: 6px;"'
							+ 'href="javascript:getNextPath('
							+ '\''
							+ path
							+ paths[num + 1]
							+ '/\','
							+ 1
							+ ')" title='
							+ paths[num + 1]
							+ '>'
							+ paths[num + 1]
							+ '</a></div></li>'
							+ '<li class="file-size" style="width: 16%;">-</li>'
							+ '<li>' + pathData[i].uploaddate + '</li></dd>';
					$(".list-view").html("").append($(str));
				} else if (view == 2) {
					alert(2);
					str += '<div class="grid-view-item1"'
							+ 'style="display: block; height: 122px; margin: 4px 4px 0 0; text-align: center; width: 142px; float: left;"'
							+ 'onclick="filenameIcon(1)">'
							+ '<div class="dir-large" title="">'
							+ '<img class="thumb"> <span class="checkbox"></span>'
							+ '</div>' + '<div class="file-name">'
							+ '<a class="filename" title=' + paths[num + 1]
							+ ' href="javascript:getNextPath(' + '\'' + path
							+ paths[num + 1] + '/\',' + 2 + ')"">'
							+ paths[num + 1] + '</a>' + '</div>' + '</div>';
					$(".g-clearfix").html("").append($(str));
				}
			} else {
				return "";
			}
		}
	}

}
