var pathData = null;
var nextpath = "";
var newDirArr = new Array();
var tcheckIcon = new Array();
var checked2 = 0;
var delpaths = new Array();
var length = 0;
$(function() {
	/* 设置在初始化的时候将块隐藏 */
	$(".list-header-operatearea").hide();
	/* 新建文件夹的隐藏 */
	$(".module-edit-name").hide();
	/* 详细内容列表界面隐藏 */
	$(".content-view").hide();
	$("#shareshow").css({"display":"none"});
	var str = "";
	var pass = new Array();
	$.post("uploadFile/getUserFiles/" + null, function(data) {
		pathData = data;
		getFileSize();
		init();
	}, "json");
});

var isdir = 0;

/* 新建文件夹 */
function upfileSpanjia() {
	var str = "";
	str += '<dd class="module-edit-name">'
			+ '<li class="file-names" style="width: 60%; left: 0px; top: 73px;"><span '
			+ 'class="check-icon6" onclick="filenameIcon(6)"'
			+ 'style="background: rgba(0, 0, 0, 0) url(images/list-view_4e60b0c.png) no-repeat scroll -9px -12px; height: 14px; left: 11px; width: 14px; top: 20px; margin: 15px 10px; float: left;"></span>'
			+ '<div class="fileicon"></div>'
			+ '<div class="new-dir-item">'
			+ '<input class="box" name="filepath" type="text" id="newDir" value="新建文件夹"> <span '
			+ 'class="sure" onclick="editSure()"></span> <span class="cancel"'
			+ 'onclick="editCancel()"></span>' + '</div>'
			+ '<li class="file-size" style="width: 16%;">-</li>'
			+ '<li class="ctime" style="width: 21%;">-</li>' + '</dd>';
	$(".list-view").prepend($(str));

}

// 确定新建文件夹
function editSure() {
	var name = $(".box").val();
	var date = getDate();
	var str = "";
	var flag = false;
	var a = getFileNames();
	var i = 1;
	var n = "";
	if ($.inArray(name, a) != -1) {
		while (true) {
			if ($.inArray(name + "(" + i + ")", a) == -1) {
				break;
			}
			i++;
		}
		name = name + "(" + (i) + ")";
		n = nextpath.substr(1) + name;
	} else {
		n = nextpath.substr(1) + name;
	}
	var num = getMaxNum();
	$.post("uploadFile/addDir/" + date,{name : n},
					function(data) {
						if (data) {
							str += '<dd class="open-enable">'
									+ '<li class="file-name" style="width: 60%;"><span '
									+ 'class="check-icon'
									+ (parseInt(num) + 1)
									+ '" onclick="filenameIcon('
									+ (parseInt(num) + 1)
									+ ')"'
									+ 'style="background: rgba(0, 0, 0, 0) url(images/list-view_4e60b0c.png) no-repeat scroll -9px -12px; height: 14px; left: 11px; width: 14px; top: 20px; margin: 15px 10px; float: left;"></span>'
									+ '<div class="fileicon"></div>'
									+ '<div class="text"><div class="filenameicon"></div>'
									+ '<a class="filename" id="a'+(parseInt(num) + 1)+'"  style="padding-left: 6px;"'
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
							pathDataAdd("/"+n+"/",date,0);
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
				case "xlsx":
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

// 选择文件

function filenameIcon(id) {
	var divcss1 = {// 未选中
		background : "rgba(0, 0, 0, 0) url('images/list-view_4e60b0c.png') no-repeat  scroll -9px -12px",
		height : '14px',
		left : '11px',
		width : '14px',
		top : '20px',
		margin : '15px 10px',
		float : 'left'
	};
	var divcss2 = {// 选中
		background : "rgba(0, 0, 0, 0) url('images/list-view_4e60b0c.png') no-repeat  scroll -40px -12px",
		height : '14px',
		left : '11px',
		width : '14px',
		top : '20px',
		margin : '15px 10px',
		float : 'left'
	};
	var checked = 0;
	var ids = "";
	var idstr = "";
	var a = new Array();
	var icons = $(".open-enable li span");
	//取得length
	length = icons.length;
	var path = $("#path").html(); // 上一级路径
	if (path != undefined) {
		path = path.replace(/&gt;/gm, "/")
	} else {
		path = "/";
	}
	for (var i = 0; i < icons.length; i++) {
		idstr = $(icons[i]).attr("class");
		ids = idstr.substr(idstr.lastIndexOf("n") + 1);
		a[i] = ids;
	}
	
	if (id == 0) {
		if (checked2 == a.length) { // 说明已经全部选中
			for (var i = 0; i < a.length; i++) {
				tcheckIcon[a[i]] = false;
			}
			checked = 0;
		} else { // 没有全部选中，则全部选中
			for (var i = 0; i < a.length; i++) {
				tcheckIcon[a[i]] = true;
			}
		}
	}
	if (tcheckIcon[id] == true && id > 0) {
		/* 已选择check */
		tcheckIcon[id] = false;
	} else {
		tcheckIcon[id] = true; // 表示选中
	}
	// 判断以选中多少个文件夹
	var l = getMaxNum();
	for (var i = 0; i <= l; i++) {
		if (tcheckIcon[a[i]] == true) {
			checked++;
			console.info(delpaths[i]);
			delpaths[i] = path + $("#a" + a[i] + "").html()+"/";
			$(".textCla").hide();
			$(".list-header-operatearea").show();
			$(".check-icon" + a[i]).css(divcss2);
		} else if (tcheckIcon[a[i]] == false) {
			$(".check-icon" + a[i]).css(divcss1);
			$(".check-icon0").css(divcss1);
		}
	}
	if (checked == (a.length)) {
		$(".check-icon0").css(divcss2);
	} else if (checked == 0) {
		$(".textCla").show();
		$(".list-header-operatearea").hide();
		$(".check-icon0").css(divcss1);
	}
	$(".count-tips").text("已选中" + checked + "个文件/共" + a.length + "文件");
	checked2 = checked;
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
	var pathName;//文件名
	var paths = new Array();
	paths = path.split("/");
	//多级目录下显示详细信息
	if(path.indexOf("jpg")!=-1||path.indexOf("gif")!=-1||path.indexOf("png")!=-1||path.indexOf("JPG")!=-1){//说明包含
		pathName=parseFilePath(path,paths.length-2);
		$("#shareshow").css({"display":"block"});
		return;
		$("#imgshow").html("").append('<img src="/VCloud/sources/'+pathName+'">');
	}else if(path.indexOf("mpg")!=-1||path.indexOf("mp4")!=-1||path.indexOf("avi")!=-1){
		pathName=parseFilePath(path,paths.length);
		$("#shareshow").css({"display":"block"});
		$("#imgshow").html("").append('<video src=".../sources/'+pathName+'" width="auto" height="auto" controls autoplay loop><source type=video/mp4 /> Your browser does not support the video tag. </video>');
		}else if(path.indexOf(".")!=-1){
		alert("此类文件需安装VCloud管家!!!");
		return;
	}
	checked2 = 0;
	for (var i = 0; i < length; i++) {
		tcheckIcon[i] = false;
	}
	filenameIcon(-1);
	delpaths.length = 0;
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
		if (pathData[i].filepath.indexOf(path) == 0) {
			paths = pathData[i].filepath.split("/");	
			//paths.splice(paths.length-1,1);
			if ((num + 1 ) < paths.length && paths.length > 1){
				if (view == 1) {
					if ($.inArray(paths[num + 1], ps) == -1) {
						var filesize = getFileSize(nextpath+paths[num+1]+"/");
						str += '<dd class="open-enable">'
								+ '<li class="file-name" style="width: 60%;"><span '
								+ 'class="check-icon'
								+ (i + 1)
								+ '" onclick="filenameIcon('
								+ (i + 1)
								+ ')"'
								+ 'style="background: rgba(0, 0, 0, 0) url(images/list-view_4e60b0c.png) no-repeat scroll -9px -12px;height: 14px; left: 11px; width: 14px; top: 20px; margin: 15px 10px; float: left;"></span>'
								+ '<div class="fileicon"></div>';
						if (paths[num+1].lastIndexOf(".") != -1) {
							switch (paths[num + 1].substr(paths[num + 1]
									.lastIndexOf(".") + 1)) {
							case "doc":
								str += '<div class="text"><div class="dir-tables fileicon-tables-doc"></div>';
								break;
							case "docx":
								str += '<div class="text"><div class="dir-tables fileicon-tables-doc"></div>';
								break;
							case "xls":
								str += '<div class="text"><div class="dir-tables fileicon-tables-xls"></div>';
								break;
							case "xlsx":
								str += '<div class="text"><div class="dir-tables fileicon-tables-xls"></div>';
								break;
							case "png":
								str += '<div class="text"><div class="dir-tables fileicon-tables-png"></div>';
								break;
							case "gif":
								str += '<div class="text"><div class="dir-tables fileicon-tables-png"></div>';
								break;
							case "jpg":
								str += '<div class="text"><div class="dir-tables fileicon-tables-png"></div>';
								break;
							case "txt":
								str += '<div class="text"><div class="dir-tables fileicon-tables-txt"></div>';
								break;
							case "mp4":
								str += '<div class="text"><div class="dir-tables fileicon-tables-mp4"></div>';
								break;
							case "mpg":
								str += '<div class="text"><div class="dir-tables fileicon-tables-mp4"></div>';
								break;
							case "zip":
								str += '<div class="text"><div class="dir-tables fileicon-tables-zip"></div>';
								break;
							case "mp3":
								str += '<div class="text"><div class="dir-tables fileicon-tables-music"></div>';
								break;
							default:
								str += '<div class="fileicon"></div>'
										+ '<div class="text"><div class="filenameicon"></div>';
								break;
							}
						} else {
							str += '<div class="fileicon"></div>'
									+ '<div class="text"><div class="filenameicon"></div>';
						}
						str += '<a class="filename" id="a' + (i + 1)
								+ '" style="padding-left: 6px;"'
								+ 'href="javascript:getNextPath(' + '\'' + path
								+ paths[num + 1] + '/\',' + 1 + ')" title='
								+ paths[num + 1] + '>' + paths[num + 1]
								+ '</a></div></li>'
								+ '<li class="file-size" style="width: 16%;">'
								+ filesize + 'KB</li>' + '<li>'
								+ pathData[i].uploaddate + '</li></dd>';
						ps[i] = paths[num + 1];
					}
					var up = '<a style="color:blue;" href="javascript:retrunPre('+'\''+nextpath+'\''+','+'\'/'+paths[num-1]+'/\''+','+1+')">返回上一级</a>';
					up += "<span id='path'>" + nextpath.replace(/\//gm, ">")
							+ "</span>";
					$(".list-view").html("").append($(str));
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
								+ '<a class="filename"  id="a' + (i + 1)
								+ '" title=' + paths[num + 1]
								+ ' href="javascript:getNextPath(' + '\''
								+ path + paths[num + 1] + '/\',' + 2 + ')"">'
								+ paths[num + 1] + '</a>' + '</div>' + '</div>';
					}
					ps[i] = paths[num + 1];
					var up = '<a style="color:blue;" href="javascript:retrunPre('+'\''+nextpath+'\''+','+'\'/'+paths[num-1]+'/\''+','+1+')">返回上一级</a>';
					up += "<span id='path'>" + path.replace(/\//gm, ">")
							+ "</span>";
					$(".g-clearfix").html("").append($(str));
					$(".history-list-dir").html("").html($(up));
				}
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
function retrunPre(nextpath,path, view) {
	if ($(".module-edit-name") != undefined) {
		$(".module-edit-name").hide();
	}
	if (path == '//' && view == 1) {
		init();
		$(".history-list-dir").html("").html("<span>全部文件</span>");
	} else if (view == 2 && path == '//') {
		initView();
		$(".history-list-dir").html("").html("<span>全部文件</span>");
	} else {
		var pathName;//文件名
		var paths = new Array();
		paths = nextpath.split("/");
		checked2 = 0;
		for (var i = 0; i < length; i++) {
			tcheckIcon[i] = false;
		}
		filenameIcon(-1);
		delpaths.length = 0;
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
			if (pathData[i].filepath.indexOf(nextpath) == 0) {
				paths = pathData[i].filepath.split("/");	
				paths.splice(paths.length-1,1);
				if ((num + 1 ) < paths.length && paths.length > 1){
					if (view == 1) {
						if ($.inArray(paths[num + 1], ps) == -1) {
							var filesize = getFileSize(nextpath+paths[num+1]+"/");
							str += '<dd class="open-enable">'
									+ '<li class="file-name" style="width: 60%;"><span '
									+ 'class="check-icon'
									+ (i + 1)
									+ '" onclick="filenameIcon('
									+ (i + 1)
									+ ')"'
									+ 'style="background: rgba(0, 0, 0, 0) url(images/list-view_4e60b0c.png) no-repeat scroll -9px -12px;height: 14px; left: 11px; width: 14px; top: 20px; margin: 15px 10px; float: left;"></span>'
									+ '<div class="fileicon"></div>';
							if (paths[num+1].lastIndexOf(".") != -1) {
								switch (paths[num + 1].substr(paths[num + 1]
										.lastIndexOf(".") + 1)) {
								case "doc":
									str += '<div class="text"><div class="dir-tables fileicon-tables-doc"></div>';
									break;
								case "docx":
									str += '<div class="text"><div class="dir-tables fileicon-tables-doc"></div>';
									break;
								case "xls":
									str += '<div class="text"><div class="dir-tables fileicon-tables-xls"></div>';
									break;
								case "xlsx":
									str += '<div class="text"><div class="dir-tables fileicon-tables-xls"></div>';
									break;
								case "png":
									str += '<div class="text"><div class="dir-tables fileicon-tables-png"></div>';
									break;
								case "gif":
									str += '<div class="text"><div class="dir-tables fileicon-tables-png"></div>';
									break;
								case "jpg":
									str += '<div class="text"><div class="dir-tables fileicon-tables-png"></div>';
									break;
								case "txt":
									str += '<div class="text"><div class="dir-tables fileicon-tables-txt"></div>';
									break;
								case "mp4":
									str += '<div class="text"><div class="dir-tables fileicon-tables-mp4"></div>';
									break;
								case "mpg":
									str += '<div class="text"><div class="dir-tables fileicon-tables-mp4"></div>';
									break;
								case "zip":
									str += '<div class="text"><div class="dir-tables fileicon-tables-zip"></div>';
									break;
								default:
									str += '<div class="fileicon"></div>'
											+ '<div class="text"><div class="filenameicon"></div>';
									break;
								}
							} else {
								str += '<div class="fileicon"></div>'
										+ '<div class="text"><div class="filenameicon"></div>';
							}
							str += '<a class="filename" id="a' + (i + 1)
									+ '" style="padding-left: 6px;"'
									+ 'href="javascript:getNextPath(' + '\'' + path
									+ paths[num + 1] + '/\',' + 1 + ')" title='
									+ paths[num + 1] + '>' + paths[num + 1]
									+ '</a></div></li>'
									+ '<li class="file-size" style="width: 16%;">'
									+ filesize + 'KB</li>' + '<li>'
									+ pathData[i].uploaddate + '</li></dd>';
							ps[i] = paths[num + 1];
						}
						var up = '<a style="color:blue;" href="javascript:retrunPre('+'\''+nextpath+'\''+','+'\'/'+paths[num-1]+'/\''+','+1+')">返回上一级</a>';
						up += "<span id='path'>" + nextpath.substr(0,(nextpath.lastIndexOf("/")-paths[num+1].length)).replace(/\//gm, ">")
								+ "</span>";
						$(".list-view").html("").append($(str));
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
									+ '<a class="filename"  id="a' + (i + 1)
									+ '" title=' + paths[num + 1]
									+ ' href="javascript:getNextPath(' + '\''
									+ path + paths[num + 1] + '/\',' + 2 + ')"">'
									+ paths[num + 1] + '</a>' + '</div>' + '</div>';
						}
						ps[i] = paths[num + 1];
						var up = '<a style="color:blue;" href="javascript:retrunPre('+'\''+nextpath+'\''+','+'\'/'+paths[num-1]+'/\''+','+1+')">返回上一级</a>';
						up += "<span id='path'>" + path.replace(/\//gm, ">")
								+ "</span>";
						$(".g-clearfix").html("").append($(str));
						$(".history-list-dir").html("").html($(up));
					}
				}
			}
		}
	}
	var a = getFileNames();
	checked2 = 0;
	for (var i = 0; i < a.length; i++) {
		tcheckIcon[i] = false;
	}
	filenameIcon(-1);
	delpaths.length = 0;
	// getNextPath(path,view)
}

// 初始化，列表 页面加载时显示
function init() {
	var str = "";
	var pass = new Array();
	for (var i = 0; i < pathData.length; i++) {
		var path = parseFilePath(pathData[i].filepath, 1);
		var pp = "/"+path+"/";
		var filesize = getFileSize(pp);
		if ($.inArray(path, pass) == -1) {
			str += '<dd class="open-enable">'
					+ '<li class="file-name" style="width: 60%;"><span '
					+ 'class="check-icon'
					+ (i + 1)
					+ '" onclick="filenameIcon('
					+ (i + 1)
					+ ')"'
					+ 'style="background: rgba(0, 0, 0, 0) url(images/list-view_4e60b0c.png) no-repeat scroll -9px -12px;height: 14px; left: 11px; width: 14px; top: 20px; margin: 15px 10px; float: left;"></span>';
			if (pathData[i].filepath.indexOf(".") != -1
					&& pathData[i].isdir == 0) {
				switch (path.substr(path.lastIndexOf(".") + 1)) {
				case "doc":
					str += '<div class="text"><div class="dir-tables fileicon-tables-doc"></div>';
					break;
				case "docx":
					str += '<div class="text"><div class="dir-tables fileicon-tables-doc"></div>';
					break;
				case "xls":
					str += '<div class="text"><div class="dir-tables fileicon-tables-xls"></div>';
					break;
				case "xlsx":
					str += '<div class="text"><div class="dir-tables fileicon-tables-xls"></div>';
					break;
				case "png":
					str += '<div class="text"><div class="dir-tables fileicon-tables-png"></div>';
					break;
				case "gif":
					str += '<div class="text"><div class="dir-tables fileicon-tables-png"></div>';
					break;
				case "jpg":
					str += '<div class="text"><div class="dir-tables fileicon-tables-png"></div>';
					break;
				case "txt":
					str += '<div class="text"><div class="dir-tables fileicon-tables-txt"></div>';
					break;
				case "mp4":
					str += '<div class="text"><div class="dir-tables fileicon-tables-mp4"></div>';
					break;
				case "mpg":
					str += '<div class="text"><div class="dir-tables fileicon-tables-mp4"></div>';
					break;
				case "zip":
					str += '<div class="text"><div class="dir-tables fileicon-tables-zip"></div>';
					break;
				case "mp3":
					str += '<div class="text"><div class="dir-tables fileicon-tables-music"></div>';
					break;
				default:
					str += '<div class="fileicon"></div>'
							+ '<div class="text"><div class="filenameicon"></div>';
					break;
				}
			} else {
				str += '<div class="fileicon"></div>'
						+ '<div class="text"><div class="filenameicon"></div>';
			}
			str += '<a class="filename" id="a' + (i + 1)
					+ '"  style="padding-left: 6px;"'
					+ 'href="javascript:getNextPath(' + '\'/' + path + '/\','
					+ 1 + ')" title=' + path + '>' + path + '</a></div></li>'
					+ '<li class="file-size" style="width: 16%;">'
					+filesize + 'KB</li>' + '<li>'
					+ pathData[i].uploaddate + '</li></dd>';
		}
		pass[i] = path;
	}
	$(".list-view").html("").append($(str));
	// 右上角显示
	var a = getFileNames();
	$(".history-list-tips").html("").append("已全部加载，共" + (a.length) + "个文件");
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
				case "xlsx":
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
			str += '<div class="file-name">' + '<a class="filename"  id="a'
					+ (i + 1) + '" title=' + path
					+ ' href="javascript:getNextPath(' + '\'/' + path + '/\','
					+ 2 + ')"">' + path + '</a>' + '</div>' + '</div>';
		}
		pas[i] = path;
	}
	$(".g-clearfix").html("").append($(str));
}
// 上传文件
function upFileLoad() {
	if (nextpath.length == 0) {
		nextpath = "/";
	}
	var date = getDate();
	$.ajaxFileUpload({
		url : "uploadFile/VCFileLoad",
		data : {
			nextpath : nextpath
		},
		secureuri : false,
		fileElementId : "h5Input0",
		dataType : 'json',
		success : function(data, status) {
			$.each(data,function(index,item){
				pathDataAdd(item.filepath,date,item.filesize,0);
			})
			var str = "";
			var pass = new Array();
			for (var i = 0; i < data.length; i++) {
				var path = parseFilePath(data[i].filepath, 1);
				if ($.inArray(path, pass) == -1) {//说明数组中有path
					str += '<dd class="open-enable">'
							+ '<li class="file-name" style="width: 60%;"><span '
							+ 'class="check-icon'
							+ (i + 1)
							+ '" onclick="filenameIcon('
							+ (i + 1)
							+ ')"'
							+ 'style="background: rgba(0, 0, 0, 0) url(images/list-view_4e60b0c.png) no-repeat scroll -9px -12px;height: 14px; left: 11px; width: 14px; top: 20px; margin: 15px 10px; float: left;"></span>';
					if (data[i].filepath.indexOf(".") != -1
							&& data[i].isdir == 0) {
						switch (path.substr(path.lastIndexOf(".") + 1)) {
						case "doc":
							str += '<div class="text"><div class="dir-tables fileicon-tables-doc"></div>';
							break;
						case "docx":
							str += '<div class="text"><div class="dir-tables fileicon-tables-doc"></div>';
							break;
						case "xls":
							str += '<div class="text"><div class="dir-tables fileicon-tables-xls"></div>';
							break;
						case "xlsx":
							str += '<div class="text"><div class="dir-tables fileicon-tables-xls"></div>';
							break;
						case "png":
							str += '<div class="text"><div class="dir-tables fileicon-tables-png"></div>';
							break;
						case "gif":
							str += '<div class="text"><div class="dir-tables fileicon-tables-png"></div>';
							break;
						case "jpg":
							str += '<div class="text"><div class="dir-tables fileicon-tables-png"></div>';
							break;
						case "txt":
							str += '<div class="text"><div class="dir-tables fileicon-tables-txt"></div>';
							break;
						case "mp4":
							str += '<div class="text"><div class="dir-tables fileicon-tables-mp4"></div>';
							break;
						case "mpg":
							str += '<div class="text"><div class="dir-tables fileicon-tables-mp4"></div>';
							break;
						case "zip":
							str += '<div class="text"><div class="dir-tables fileicon-tables-zip"></div>';
							break;
						case "mp3":
							str += '<div class="text"><div class="dir-tables fileicon-tables-music"></div>';
							break;
						default:
							str += '<div class="fileicon"></div>'
									+ '<div class="text"><div class="filenameicon"></div>';
							break;
						}
					} else {
						str += '<div class="fileicon"></div>'
								+ '<div class="text"><div class="filenameicon"></div>';
					}
					str += '<a class="filename" id="a' + (i + 1)
							+ '"  style="padding-left: 6px;"'
							+ 'href="javascript:getNextPath(' + '\'/' + path + '/\','
							+ 1 + ')" title=' + data[i].temp2 + '>' + data[i].temp2  + '</a></div></li>'
							+ '<li class="file-size" style="width: 16%;">'
							+ data[i].filesize + 'KB</li>' + '<li>'
							+ data[i].uploaddate + '</li></dd>';
				}
				pass[i] = path;
			if(nextpath == "/"){
				init();
			}else{
				alert(nextpath);
				console.info(pathData);
				getNextPath(nextpath,1);
				}
			}
		},
		error : function(data, status, e) {
			alert("文件上传失败...");
		}
	});
}


// 删除文件
function deleteFile() {
	var date = getDate();
	var size = new Array();
	var i = 0;
	while(i<delpaths.length){
		if(delpaths[i] == "" || delpaths[i] == null || delpaths[i]==" "){
			console.info("i"+i);
			delpaths.splice(i,1);
			i=0;
		}else{
			i++;
		}
	}
	for(var i = 0;i<delpaths.length;i++){
		size[i] = getFileSize(delpaths[i]);
	}
	$.post("uploadFile/delFile", {delpaths:delpaths,date:date,size:size}, function(data) {
		if(data){
			var i = 0;
			while(i<delpaths.length){
				if(delpaths[i] == "" || delpaths[i] == null || delpaths[i]==" "){
					console.info("i"+i);
					delpaths.splice(i,1);
					i=0;
				}else{
					i++;
				}
			}
			pathDataDel(delpaths);
			init();
			var a = getMaxNum();
			checked2 = 0;
			tcheckIcon.length = 0;
			delpaths=new Array();
			filenameIcon(-1);
			$("#returnsure").css({"display":"none"});
			$("#bg").css({"display":"none"});
		}
	});
}

//从pathData中添加元素的方法
function pathDataAdd(path,date,size,isdir){
	var arr = new Object();
	arr.filepath = path;
	arr.uploaddate = date
	arr.filesize = size;
	arr.isdir = isdir;
	pathData.push(arr);
}

//从pathData中删除元素的方法
function pathDataDel(path){//上一级路径+当前路径
	var n = 0;
	var num = 0;
	var p = new Array();
	for(var i = 0;i<path.length;i++){
		alert(path[i] != undefined);
		if(path[i] != undefined){
			p[i] = path[i];
		}
	}
	while(n<pathData.length){
		if(pathData[n].filepath.indexOf(p[num])==0){
			pathData.splice(n, 1);
			num++;
			n=0;
		}else{
			n++;
		}
		if(num == path.length){
			return;
		}
	}
}

//获取最大的标识数
function getMaxNum(){
	var a = new Array();
	var idstr = "";
	var ids = 0;
	var icons = $(".open-enable li span");
	for (var i = 0; i < icons.length; i++) {
		idstr = $(icons[i]).attr("class");
		ids = idstr.substr(idstr.lastIndexOf("n") + 1);
		a[i] = parseInt(ids);
	}
	var temp = 0;
	for(var n = 0;n<a.length;n++){
		for(var j=n;j<a.length;j++){
			 if (a[n] > a[j]) {
                 temp = a[n];
                 a[n] = a[j];
                 a[j] = temp;
             }
		}
	}
	return a[a.length-1];
}

//分享文件
function shareFile(){
	$(".bg").css("display","block");
	showpath();
}

function showShare(){
	$("#shareshow").css({"display":"block"});
}

function closeShare(){
	$("#shareshow").css({"display":"none"});
}
function closeSharePath(){
	$("#sharepath").css({"display":"none"});
	$(".bg").css("display","none");
}

function closepublicsuc(){
	$("#publicsuc").css({"display":"none"});
	$(".bg").css("display","none");
}

function closepersonsuc(){
	$("#personsuc").css({"display":"none"});
	$(".bg").css("display","none");
}

function showpath(){
	$("#shareshow").css({"display":"none"});
	$("#sharepath").css({"display":"block"});
}

function showpublic(){
	$.post("uploadFile/shareFile", {delpaths:delpaths}, function(data) {
		$("#sharepath").css({"display":"none"});
		$("#publicsuc input").val(data);
		$("#publicsuc").css({"display":"block"});
		
	})
}

function showperson(){
	var nums = "";
	var num;
	var ens = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','h','i','j','k','l','m','n'
	           ,'o','p','q','r','s','t','u','v','w','x','y','z'];
	for(var i=0;i<2;i++){
		num = Math.ceil(Math.random()*10)-2;
		if(num==-1){
			num=0;
		}
		nums += ens[num];
		num = Math.ceil(Math.random()*10)+10;
		nums += ens[num];
	}
	$.post("uploadFile/shareFile", {delpaths:delpaths,password:nums}, function(data) {
		$("#sharepath").css({"display":"none"});
		$("#personpath-text").val(data);
		$("#personpwd").val(nums);
		$("#personsuc").css({"display":"block"});
	})
}

//复制链接到粘贴板中
function copypublicpath(){
	checked2 = 0;
	for (var i = 0; i < length; i++) {
		tcheckIcon[i] = false;
	}
	filenameIcon(-1);
	delpaths.length = 0;
	$("#publicsuc").css({"display":"none"});
	$("#bg").css({"display":"none"});
	alert('复制成功');
}

//生成提取码及复制
function copypersonpath(){
	 var clip1 = new ZeroClipboard($("#copypath2"));
	 clip1.on('ready', function (event) {
		 
		 clip1.on('copy', function (event) {
	        event.clipboardData.setData('text/plain',$("#personpath-text").val()+','+$("#personpwd").val());
	        checked2 = 0;
	    	for (var i = 0; i < length; i++) {
	    		tcheckIcon[i] = false;
	    	}
	    	filenameIcon(-1);
	    	delpaths.length = 0;
	    	$("#personsuc").css({"display":"none"});
	    	$("#bg").css({"display":"none"});
	        alert("复制成功");
	      });
	 
	    });
	 
	 clip1.on('error', function (event) {
	      //出错的时候该干嘛
	      // console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
	      ZeroClipboard.destroy();
	    });
} 

//获取文件大小
function getFileSize(path){
	var size = 0;
	for(var i = 0;i<pathData.length;i++){
		if(pathData[i].filepath.indexOf(path) == 0){
			size+=pathData[i].filesize;
		}
	}
	return size;
}


//下载文件
function downloadFile(){
	$("#download").css({"display":"block"});
	$.post("uploadFile/downloadFile",{delpaths:delpaths},function(data) {
		checked2 = 0;
		for (var i = 0; i < length; i++) {
			tcheckIcon[i] = false;
		}
		filenameIcon(-1);
		delpaths.length = 0;
		$("#download").css({"display":"none"});
		alert("下载完成!");
	}, "json");
}

function closeShare(){
	$("#returnsure").css({"display":"none"});
	$("#bg").css({"display":"none"});
}

function showRecyle(){
	$("#returnsure").css({"display":"block"});
	$("#bg").css({"display":"block"});
}


