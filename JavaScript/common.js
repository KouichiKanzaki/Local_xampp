	
	/*----------------------　animate.cssのwow使用　----------------------*/

	new WOW().init();		// 初期設定
	
	/*----------------------　ナビ開閉アニメーション　----------------------*/

	var menu_dis = 760;		//メニュー幅

	$("#nav-back").hide();
	$(".nav ul li").hide();
				
	// トグルホバー
	$(".navbar-toggle #toggle-hover-area").hover(function(){
		$("#logo-bar line").removeAttr("class");
		$("#logo-bar line:nth-child(1)").attr("class", "bar-first_third-over");
		$("#logo-bar line:nth-child(2)").attr("class", "bar-second-over");
		$("#logo-bar line:nth-child(3)").attr("class", "bar-first_third-over");	
	},function(){
		$("#logo-bar line").removeAttr("class");
		$("#logo-bar line:nth-child(1)").attr("class", "bar-first_third-out");
		$("#logo-bar line:nth-child(2)").attr("class", "bar-second-out");
		$("#logo-bar line:nth-child(3)").attr("class", "bar-first_third-out");
		}
	);

	// メニューアイコンをクリック
	$(".navbar-toggle").on('click',function(){

		$("#nav-back").show();
		$(".navbar-toggle").css("visibility","visible");
		$("body").children().animate({"margin-left" : "+=" + menu_dis + "px"},function(){
			$(".nav ul li").show();
		});
		
		$(".navbar-toggle").css("visibility","hidden");	
	});
	
	// メニュー閉じるをクリック
	$("#top-nav-close-under, #gesthouse-nav-close-under, #syukubo-nav-close-under, #inquiry-nav-close-under, #nav-back").on('click',function(){
		
		$("#nav-back").hide();
		$(".navbar-toggle").css("visibility","hidden");	
		$("body").children().animate({"margin-left" : "-=" + menu_dis + "px"},function(){
			$(".nav ul li").hide();
	});

		setTimeout(function(){
			$(".navbar-toggle").css("visibility","visible");
		},380);
	});
	
	/*----------------------　ヘッダー透明度変化　----------------------*/

 	// ブラウザをスクロール
	$(window).scroll(function(){
			
		var	header_scroll_volume = $(window).scrollTop()/170;
		$("header").css("opacity",1-header_scroll_volume);	
	});	