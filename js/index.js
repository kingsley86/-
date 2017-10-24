

$(function(){
	//导航
	$(".wenhua").hover(
		function () {
			$(".navdaoer").stop().slideDown(300);
		},
		function () {
			$(".navdaoer").stop().slideUp(300);
		}
	);
	$(".navdaoer").hover(
		function () {
			$(this).stop().slideDown(300);
		},
		function () {
			$(this).stop().slideUp(300);
		}
	);
	$(".navdao li").hover(
		function () {
			$(this).addClass("xiahuaxian");
			$(this).css({"color":"#c71c36"});
		},
		function () {
			$(this).removeClass("xiahuaxian");
			$(this).css({"color":"#fff"});
		}
	);
	$(".navdaoer li ul li").hover(
		function () {
			$(this).css({"color":"#c71c36"});
		},
		function () {
			$(this).css({"color":"#fff"});
		}
	);
	$(".navdaoer").hover(
		function () {
			$(".wenhua").addClass("xiahuaxian").css({"color":"#c71c36",});
		},
		function () {
			$(".wenhua").removeClass("xiahuaxian").css({"color":"#fff",});
		}
	);
	//视频上的字
	setTimeout(function(){
		$(".shipinZ").fadeIn(1000)
	},500)
	//底部
	$(window).scroll(function(){
	　　var scrollTop = $(this).scrollTop();
	　　var scrollHeight = $(document).height();
	　　var windowHeight = $(this).height();
	　　if(scrollTop + windowHeight == scrollHeight){
	　　　　//alert("已经到最底部了！");
		/*
			//下面考虑兼容的效果，不好看
			var a = $(".ditu").offset().top;
			var b = a-(a-190);

			setInterval(function(){
				var top = b-- +"px";
				if (parseInt(top) > -1){
					$(".ditu").css({"top":top});
				};
			},1);
	　　}else{
			$(".ditu").css({"top":"190px"});
		};
		*/
			//这不考虑兼容，效果很好
			$(".ditu").animate({
				top:"0px"
			},500)
		}else{
			$(".ditu").stop().animate({"top":"190px"},100);
		}
	});
		/*
		scrollTop为滚动条在Y轴上的滚动距离。
		clientHeight为内容可视区域的高度。
		scrollHeight为内容可视区域的高度加上溢出（滚动）的距离。
		从这个三个属性的介绍就可以看出来，滚动条到底部的条件即为scrollTop + clientHeight == scrollHeight。
		*/



$('.sub').attr('value','')





})