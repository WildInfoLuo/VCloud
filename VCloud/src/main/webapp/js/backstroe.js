
var pathData = new Array();
$(function(){
	$('.container').gizmoMenu({
		'menu' : 'gizmoDropDown'
	});

	$('#hamburger_example').gizmoMenu({
		'menu' : 'gizmoBurger'
	});

	$('#horizontal_example').gizmoMenu({
		'menu' : 'gizmoHorizontal'
	});
	$.post("recyle/getAllRecyles",function(data){
		pathData = data;
		reinit();
	},"json");
});

function  showimg(id){
	$(".img_show"+id).css("display","inline-block");
} 
function hideimg(id){
	$(".img_show"+id).css("display","none");
}

function reinit(){
	var str = "";
	var pass = new Array();
	for (var i = 0; i < pathData.length; i++) {
		var path = parsedeletepath(pathData[i].deletepath, 1);
		if ($.inArray(path, pass) == -1) {
			str += '<dd class="open-enable"  onmouseenter="showimg(1)"  onmouseleave="hideimg(1)">'
					+ '<li class="file-name" style="width: 60%;"><span '
					+ 'class="check-icon'
					+ (i + 1)
					+ '" onclick="filenameIcon('
					+ (i + 1)
					+ ')"'
					+ 'style="background: rgba(0, 0, 0, 0) url(images/list-view_4e60b0c.png) no-repeat scroll -9px -12px;height: 14px; left: 11px; width: 14px; top: 20px; margin: 15px 10px; float: left;"></span>';
			if (pathData[i].deletepath.indexOf(".") != -1
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
					+ 1 + ')" title=' + path + '>' + path + '</a></div>'+
					'<img class="img_show'+(i+1)+'" style="margin-left: 250px; display:none; " width="20px;" src="images/img/return.png"/><img class="img_show1" style="margin-left: 20px; display:none;" src="images/img/rubbish.png"  width="20px;" /></li>'
					+ '<li class="file-size" style="width: 16%;">'
					+ pathData[i].filesize + 'KB</li>' + '<li>'
					+ pathData[i].uploaddate + '</li></dd>';
		}
		pass[i] = path;
	}
	$(".list-view").html("").append($(str));
	// 右上角显示
	var a = getFileNames();
	$(".history-list-tips").html("").append("已全部加载，共" + (a.length) + "个文件");
}

//解析路径 路径 目录级别
function parsedeletepath(deletepath, num) {
	var paths = new Array();
	paths = deletepath.split("/");
	if (paths.length == 1) {
		return paths[0];
	}
	return paths[num];
}

//获取当前显示的文件的名字
function getFileNames() {
	var aArr = new Array();
	$(".list-view-container a").each(function(index, item) {
		aArr[index] = $(item).html();
	})
	return aArr;
}

//选择文件
var tcheckIcon = new Array();
var checked2 = 0;
var delpaths = new Array();
var length = 0;
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
			delpaths[i] = path + $("#a" + a[i] + "").html()+"/";
			console.info(a[i]);
			console.info(delpaths[i]);
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

//获取最大的标识数
function getMaxNum(){
	var a = new Array();
	var idstr = "";
	var ids = 0;
	var icons = $(".open-enable li span");
	for (var i = 0; i < icons.length; i++) {
		idstr = $(icons[i]).attr("class");
		ids = idstr.substr(idstr.lastIndexOf("n") + 1);
		a[i] = ids;
	}
	var temp = 0;
	for(var i = 0;i<a.length;i++){
		for(var j=i;j<a.length;j++){
			 if (a[i] > a[j]) {
                 temp = a[i];
                 a[i] = a[j];
                 a[j] = temp;
             }
		}
	}
	return a[a.length-1];
}





