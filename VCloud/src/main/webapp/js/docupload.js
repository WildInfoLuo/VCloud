var pathData = null;
var nextpath = "";
$(function() {
	/* 设置在初始化的时候将块隐藏 */
	$(".list-header-operatearea").hide();
	/* 新建文件夹的隐藏 */
	$(".module-edit-name").hide();
	/* 详细内容列表界面隐藏 */
	$(".content-view").hide();
});

var isdir = 0;

/* 新建文件夹 */
function upfileSpanjia() {
	$("#newDir").select();
	$(".module-edit-name").show();
}

// 确定新建文件夹
function editSure() {
	var name = $(".box").val();
	var date = getDate();
	var str = "";
	$.post("uploadFile/addDir/" + name + "/" + date,
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
							$(".list-view").prepend($(str)); // 显示在第一条
						}
					});
	$(".module-edit-name").css("display", "none");

	var flag = false;
	var a = getFileNames();
	var i = 1;
	if ($.inArray(name, a) != -1) {
		while (true) {
			if ($.inArray(name + "(" + i + ")", a) == -1) {
				break;
			}
			i++;
		}
		name = name + "(" + (i) + ")";
	}
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
							$(".list-view").prepend($(str)); // 显示在第一条
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
		background : "gba(0, 0, 0, 0) url('images/list-switch_0fd500b.png') no-repeat scroll 0 0",
		backgroundPosition : '0px 0px',
		float : 'left',
		height : '29px',
		width : '32px'
	};
	var divcss2 = {
		background : "gba(0, 0, 0, 0) url('images/list-switch_0fd500b.png') no-repeat scroll 0 0",
		backgroundPosition : '-33px 0px',
		float : 'left',
		height : '29px',
		width : '32px'
	};
	$(".list-switch").css(divcss1);
	$(".grid-switch").css(divcss2);
	/* 开始变幻界面 */

	var str = "";
	var pas = new Array();
	for (var i = 0; i < pathData.length; i++) {
		var path = parseFilePath(pathData[i].filepath, 1);
		if ($.inArray(path, pas) == -1) {
			str += '<div class="grid-view-item1"'
					+ 'style="display: block; height: 122px; margin: 4px 4px 0 0; text-align: center; width: 142px; float: left;"'
					+ 'onclick="filenameIcon(1)">';
			if (path.lastIndexOf(".") != -1) {
				switch (path.substr(path.lastIndexOf(".") + 1)) {
				case "doc":
					str += '<div class="dir-large fileicon-large-doc" title="">'
							+ '<img class="thumb"> <span class="checkbox"></span>'
							+ '</div>';
					break;
				case "xls":
					str += '<div class="dir-large fileicon-large-xls" title="">'
							+ '<img class="thumb"> <span class="checkbox"></span>'
							+ '</div>';
					break;
				default:
					str += '<div class="dir-large" title="">'
							+ '<img class="thumb"> <span class="checkbox"></span>'
							+ '</div>';
					break;
				}
			} else {
				str += '<div class="dir-large" title="">'
						+ '<img class="thumb"> <span class="checkbox"></span>'
						+ '</div>';
			}
			str += '<div class="file-name">' + '<a class="filename" title='
					+ path + ' href="javascript:getNextPath(' + '\'/' + path
					+ '/\',' + 2 + ')"">' + path + '</a>' + '</div>' + '</div>';
		}
		pas[i] = path;
	}
	$(".g-clearfix").html("").append($(str));

	initView();

	$(".list-view").hide();
	$(".content-view").show();
}
/* 设置布局的样式 */
function gswitch() {
	var divcss1 = {
		background : "gba(0, 0, 0, 0) url('images/list-switch_0fd500b.png') no-repeat scroll 0 0",
		backgroundPosition : '0px -35px',
		float : 'left',
		height : '29px',
		width : '32px'
	};
	var divcss2 = {
		background : "gba(0, 0, 0, 0) url('images/list-switch_0fd500b.png') no-repeat scroll 0 0",
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
			background : "rgba(0, 0, 0, 0) url('images/list-view_4e60b0c.png') no-repeat scroll -50px -45px",
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
			background : "rgba(0, 0, 0, 0) url('images/list-view_4e60b0c.png') no-repeat scroll -60px -45px",
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
				background : "rgba(0, 0, 0, 0) url('images/list-view_4e60b0c.png') no-repeat  scroll -9px -12px",
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
				background : "rgba(0, 0, 0, 0) url('images/list-view_4e60b0c.png') no-repeat  scroll -40px -12px",
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
			background : "rgba(0, 0, 0, 0) url('images/list-view_4e60b0c.png') no-repeat  scroll -9px -12px",
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
			background : "rgba(0, 0, 0, 0) url('images/list-view_4e60b0c.png') no-repeat  scroll -40px -12px",
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
	/*
	 * var filesize=document.getElementById("h5Input0").files[0].size;
	 * $.post("uploadFile/VCFileLoad", {filename:filename,filesize:filesize},
	 * function(data) {
	 * 
	 * });
	 */
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
	nextpath = path;
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
	var ps = new Array();
	for (var i = 0; i < pathData.length; i++) {
		paths = pathData[i].filepath.split("/");
		if (pathData[i].filepath.indexOf(path) == 0) {
			if ((num + 1) < paths.length && paths.length > 1) {
				if (view == 1) {
					if ($.inArray(paths[num + 1], ps) == -1) {
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
								+ '<li>' + pathData[i].uploaddate
								+ '</li></dd>';
						ps[i] = paths[num + 1];
					}
					var up = '<a style="color:blue;" href="javascript:retrunPre('
							+ '\'/'
							+ paths[num - 1]
							+ '/\','
							+ 1
							+ ')">返回上一级</a>';
					up += "<span>" + path.replace(/\//gm, ">") + "</span>";
					$(".list-view").html("").append($(str));

				} else if (view == 2) {
					if ($.inArray(paths[num + 1], ps) == -1) {
						str += '<div class="grid-view-item1"'
								+ 'style="display: block; height: 122px; margin: 4px 4px 0 0; text-align: center; width: 142px; float: left;"'
								+ 'onclick="filenameIcon(1)">';
						if (paths[num + 1].lastIndexOf(".") != -1) {
							switch (paths[num + 1].substr(paths[num + 1]
									.lastIndexOf(".") + 1)) {
							case "doc":
								str += '<div class="dir-large fileicon-large-doc" title="">'
										+ '<img class="thumb"> <span class="checkbox"></span>'
										+ '</div>';
								break;
							case "xls":
								str += '<div class="dir-large fileicon-large-xls" title="">'
										+ '<img class="thumb"> <span class="checkbox"></span>'
										+ '</div>';
								break;
							default:
								str += '<div class="dir-large" title="">'
										+ '<img class="thumb"> <span class="checkbox"></span>'
										+ '</div>';
								break;
							}
						} else {
							str += '<div class="dir-large" title="">'
									+ '<img class="thumb"> <span class="checkbox"></span>'
									+ '</div>';
						}
						str += '<div class="file-name">'
								+ '<a class="filename" title=' + paths[num + 1]
								+ ' href="javascript:getNextPath(' + '\''
								+ path + paths[num + 1] + '/\',' + 2 + ')"">'
								+ paths[num + 1] + '</a>' + '</div>' + '</div>';

						$(".history-list-dir").html("").html($(up));
					} else if (view == 2) {
						if ($.inArray(paths[num + 1], ps) == -1) {
							str += '<div class="grid-view-item1"'
									+ 'style="display: block; height: 122px; margin: 4px 4px 0 0; text-align: center; width: 142px; float: left;"'
									+ 'onclick="filenameIcon(1)">';
							if (paths[num + 1].lastIndexOf(".") != -1) {
								switch (paths[num + 1].substr(paths[num + 1]
										.lastIndexOf(".") + 1)) {
								case "doc":
									str += '<div class="dir-large fileicon-large-doc" title="">'
											+ '<img class="thumb"> <span class="checkbox"></span>'
											+ '</div>';
									break;
								case "xls":
									str += '<div class="dir-large fileicon-large-xls" title="">'
											+ '<img class="thumb"> <span class="checkbox"></span>'
											+ '</div>';
									break;
								default:
									str += '<div class="dir-large" title="">'
											+ '<img class="thumb"> <span class="checkbox"></span>'
											+ '</div>';
									break;
								}
							} else {
								str += '<div class="dir-large" title="">'
										+ '<img class="thumb"> <span class="checkbox"></span>'
										+ '</div>';
							}
							str += '<div class="file-name">'
									+ '<a class="filename" title='
									+ paths[num + 1]
									+ ' href="javascript:getNextPath(' + '\''
									+ path + paths[num + 1] + '/\',' + 2
									+ ')"">' + paths[num + 1] + '</a>'
									+ '</div>' + '</div>';
						}

						ps[i] = paths[num + 1];

						ps[i] = paths[num + 1];
						var up = '<a style="color:blue;" href="javascript:retrunPre('
								+ '\'/'
								+ paths[num - 1]
								+ '/\','
								+ 2
								+ ')">返回上一级</a>';
						up += "<span>" + path.replace(/\//gm, ">") + "</span>";

						$(".g-clearfix").html("").append($(str));
						$(".history-list-dir").html("").html($(up));
					}

				} else {
					return "";
				}
			} else {
				str = "";
				$(".list-view").html("");

			}
		}
	}
}

// 获取当前显示的文件的名字
function getFileNames() {
	var aArr = new Array();
	$(".list-view-container a").each(function(index, item) {
		aArr[index] = $(item).html();
	})
	return aArr;
}

// 返回上一级
function retrunPre(path, view) {
	if (path == '//' && view == 1) {
		init();
		$(".history-list-dir").html("").html("<span>全部文件</span>");
	} else if (view == 2 && path == '//') {
		initView();
		$(".history-list-dir").html("").html("<span>全部文件</span>");
	} else {
		getNextPath(path, view);
	}
}

// 初始化，列表 页面加载时显示
function init() {
	var str = "";
	var pass = new Array();
	for (var i = 0; i < pathData.length; i++) {
		var path = parseFilePath(pathData[i].filepath, 1);
		if ($.inArray(path, pass) == -1) {
			str += '<dd class="open-enable">'
					+ '<li class="file-name" style="width: 60%;"><span '
					+ 'class="check-icon1" onclick="filenameIcon(1)"'
					+ 'style="background: rgba(0, 0, 0, 0) url(images/list-view_4e60b0c.png) no-repeat scroll -9px -12px; height: 14px; left: 11px; width: 14px; top: 20px; margin: 15px 10px; float: left;"></span>'
					+ '<div class="fileicon"></div>'
					+ '<div class="text"><div class="filenameicon"></div>'
					+ '<a class="filename" style="padding-left: 6px;"'
					+ 'href="javascript:getNextPath(' + '\'/' + path + '/\','
					+ 1 + ')" title=' + path + '>' + path + '</a></div></li>'
					+ '<li class="file-size" style="width: 16%;">-</li>'
					+ '<li>' + pathData[i].uploaddate + '</li></dd>';
		}
		pass[i] = path;
	}
	$(".list-view").html("").append($(str));
}

// 视图初始化界面
function initView() {
	var str = "";
	var pas = new Array();
	for (var i = 0; i < pathData.length; i++) {
		var path = parseFilePath(pathData[i].filepath, 1);
		if ($.inArray(path, pas) == -1) {
			str += '<div class="grid-view-item1"'
					+ 'style="display: block; height: 122px; margin: 4px 4px 0 0; text-align: center; width: 142px; float: left;"'
					+ 'onclick="filenameIcon(1)">';
			if (path.lastIndexOf(".") != -1) {
				switch (path.substr(path.lastIndexOf(".") + 1)) {
				case "doc":
					str += '<div class="dir-large fileicon-large-doc" title="">'
							+ '<img class="thumb"> <span class="checkbox"></span>'
							+ '</div>';
					break;
				case "xls":
					str += '<div class="dir-large fileicon-large-xls" title="">'
							+ '<img class="thumb"> <span class="checkbox"></span>'
							+ '</div>';
					break;
				default:
					str += '<div class="dir-large" title="">'
							+ '<img class="thumb"> <span class="checkbox"></span>'
							+ '</div>';
					break;
				}
			} else {
				str += '<div class="dir-large" title="">'
						+ '<img class="thumb"> <span class="checkbox"></span>'
						+ '</div>';
			}
			str += '<div class="file-name">' + '<a class="filename" title='
					+ path + ' href="javascript:getNextPath(' + '\'/' + path
					+ '/\',' + 2 + ')"">' + path + '</a>' + '</div>' + '</div>';
		}
		pas[i] = path;
	}
	$(".g-clearfix").html("").append($(str));
}

function uploadFile(){
	$("#uploadfile").submit();
} 
