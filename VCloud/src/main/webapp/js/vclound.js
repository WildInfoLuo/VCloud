	$(function (){
		/*设置在初始化的时候将块隐藏*/
		$(".list-header-operatearea").hide();
	});
	
	function lswitch(){
		var divcss1 = {
			  background: "gba(0, 0, 0, 0) url('../images/list-switch_0fd500b.png') no-repeat scroll 0 0",
			  backgroundPosition:'0px -35px',
			  float: 'left',
			  height: '29px',
			  width: '32px'
		};
		var divcss2 = {
			  background: "gba(0, 0, 0, 0) url('../images/list-switch_0fd500b.png') no-repeat scroll 0 0",
			  backgroundPosition:'-33px -35px',
			  float: 'left',
			  height: '29px',
			  width: '32px'
		};
		$(".grid-switch").css(divcss1);
		$(".list-switch").css(divcss2);
		/*开始变幻界面*/
		$(".module-list").html("列表界面");
	}
	/*设置布局的样式*/
	function gswitch(){
		var divcss1 = {
			  background: "gba(0, 0, 0, 0) url('../images/list-switch_0fd500b.png') no-repeat scroll 0 0",
			  backgroundPosition:'0px -35px',
			  float: 'left',
			  height: '29px',
			  width: '32px'
		};
		var divcss2 = {
			  background: "gba(0, 0, 0, 0) url('../images/list-switch_0fd500b.png') no-repeat scroll 0 0",
			  backgroundPosition:'-33px -35px',
			  float: 'left',
			  height: '29px',
			  width: '32px'
		};
		$(".grid-switch").css(divcss2);
		$(".list-switch").css(divcss1);
		
		//<!--开始变幻界面-->
		$(".module-list").html("详细界面");
	}
	//<!--点击改变时间排序-->
	var icon=true;
	function lastColicon(){
		if(!icon){
			var divcss1 = {
			background: "rgba(0, 0, 0, 0) url('../images/list-view_4e60b0c.png') no-repeat scroll -50px -45px",
			position:'absolute',
			height: '10px',
			width: '9px',
			margin:'18px 10px',
			float:'left'
		};
		icon=true;
		$(".last-col .order-icon").css(divcss1);
		return;
	}
		if(icon){
			var divcss2 = {
				background: "rgba(0, 0, 0, 0) url('../images/list-view_4e60b0c.png') no-repeat scroll -60px -45px",
				position:'absolute',
				height: '10px',
				width: '9px',
				margin:'18px 10px',
				float:'left'
			};
			icon=false;
			$(".last-col .order-icon").css(divcss2);
			return;
		}
	}
	var tcheckIcon=true;
	function checkIcon(){
		if(!tcheckIcon){
			/*未选择check*/
			var divcss1 = {
				background:"rgba(0, 0, 0, 0) url('../images/list-view_4e60b0c.png') no-repeat  scroll -9px -12px",
				height: '14px',
				left: '11px',
				width: '14px',
				top:'20px',
				margin:'15px 10px',
				float:'left'
		};
		tcheckIcon=true;
		$(".textCla").show();
		$(".list-header-operatearea").hide();
		$(".check-icon").css(divcss1);
		return;
	}
		/*如果是被选中*/
		if(tcheckIcon){
			var divcss2 = {
				background:"rgba(0, 0, 0, 0) url('../images/list-view_4e60b0c.png') no-repeat  scroll -40px -12px",
				height: '14px',
				left: '11px',
				width: '14px',
				top:'20px',
				margin:'15px 10px',
				float:'left'
			};
			tcheckIcon=false;
			$(".textCla").hide();
			$(".list-header-operatearea").show();
			$(".check-icon").css(divcss2);
			return;
		}
	}