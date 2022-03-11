
	/*----------------------　スライドショー　----------------------*/

	//	mySwiperプロパティ設定
  	var mySwiper = new Swiper('.swiper-container', {
    	loop: true,
		autoplay: 5000,
 		speed: 2500,
		simulateTouch: false,
		effect: "fade",
		nextButton: "#scroll-bar-button-right",
		prevButton: "#scroll-bar-button-left",		
		pagination: '.swiper-pagination',
        paginationType: 'fraction',
		autoplayDisableOnInteraction: false,
		
		//	各スライドスタート時文字をアニメーション
		onSlideChangeStart(mySwiper){
						
			switch ($(".swiper-pagination-current").text()) {
			
					case "1":	//	写真１番以外非表示
						$("#top-container-moji2").addClass("top-container-reset");
						$("#top-container-moji3").addClass("top-container-reset");
						$("#top-container-moji4").addClass("top-container-reset");
						
						setTimeout(function(){
							$("#top-container-moji1").removeClass("top-container-reset");
							$("#c-svg").attr("class", "top-container-zuke-animation2");
						},1000);
						break;
					
					case "2":	//	写真２番以外非表示
						$("#top-container-moji1").addClass("top-container-reset");
						$("#top-container-moji3").addClass("top-container-reset");
						$("#top-container-moji4").addClass("top-container-reset");

						setTimeout(function(){
							$("#top-container-moji2").removeClass("top-container-reset");
							$("#g-svg").attr("class", "top-container-zuke-animation2");
						},1000);
						break;
					
					case "3":	//	写真３番以外非表示
						$("#top-container-moji1").addClass("top-container-reset");
						$("#top-container-moji2").addClass("top-container-reset");
						$("#top-container-moji4").addClass("top-container-reset");
						
						setTimeout(function(){
							$("#top-container-moji3").removeClass("top-container-reset");
							$("#t-svg").attr("class", "top-container-zuke-animation2");
						},1000);
						break;
					
					case "4":	//	写真４番以外非表示

						$("#top-container-moji1").addClass("top-container-reset");
						$("#top-container-moji2").addClass("top-container-reset");
						$("#top-container-moji3").addClass("top-container-reset");
						
						setTimeout(function(){
							$("#top-container-moji4").removeClass("top-container-reset");
							$("#a-svg").attr("class", "top-container-zuke-animation2");
						},1000);
						break;
			}
		},
		//	各スライドエンド時文字を非表示
		onSlideChangeEnd(mySwiper){
			
			switch ($(".swiper-pagination-current").text()) {
			
				case "2":
						$("#top-container-moji1").addClass("top-container-reset");
						break;

				case "3":
						$("#top-container-moji2").addClass("top-container-reset");
						break;

				case "4":
						$("#top-container-moji3").addClass("top-container-reset");
						break;
						
				case "1":
						$("#top-container-moji4").addClass("top-container-reset");
						break;
			}
		}
	});

	/*----------------------　ロゴタイプアニメーション実行　----------------------*/

	var window_up;	// window条件変数
  	$("#logo-svg").attr("class", "logo-reset");

	$(window).on('load resize',function(){
				
		// windowの幅1250px以下
		if(window.matchMedia('(max-width:1250px)').matches){			

			window_up = false;
			setTimeout(function(){
  				$("#logo-svg").attr("class", "logo-type-animation");
			},500);
			
		// windowの幅820px以上
		}else{
			window_up = true;
		}
	});

	// ブラウザをスクロール
	$(window).scroll(function(){
			
		if($(window).scrollTop() > 100 && window_up == true){
  			$("#logo-svg").attr("class", "logo-type-animation");
		}
	});	

 	/*----------------------　動画再生タイミング　----------------------*/

 	var v = document.getElementById("about-gesthouse");
 	var onetime_play = true;
 	var play_scroll;
 
 	$(window).on('load resize',function(){
				
		// windowの幅1250px以下 820px以上
		if((window.matchMedia('(max-width:1250px)').matches) && (window.matchMedia('(min-width:820px)').matches)){			
			play_scroll = 300;
		}
		// windowの幅819px以下 520px以上
		else if((window.matchMedia('(max-width:819px)').matches) && (window.matchMedia('(min-width:520px)').matches)){	
			play_scroll = 100;
		}
		// windowの幅519px以下
		else if(window.matchMedia('(max-width:519px)').matches){			
			play_scroll = 200;
		}		
		// windowの幅1251px以上
		else{
			play_scroll = 700;
		}
	});
		// ブラウザをスクロール
		$(window).scroll(function(){
			
			if(($(window).scrollTop() > play_scroll) && (onetime_play == true)){

				onetime_play = false;
				v.play();	//動画を再生
			}
		});	
	
 	/*----------------------　最乗寺BOXグレースケール　----------------------*/

	// 最乗寺部屋写真をマウスオーバー又はアウト
	$("#top-saijyo2").hover(function(){
		
		var moji1 = $("img",this).attr("alt");
		$(this).append("<div><p>" + moji1 + "</p></div>");
		$("div",this).stop().fadeIn(300);

	}, function(){
		
		$("div",this).stop().fadeOut(300);
		$("div p",this).stop().animate({"top":"0px"}, 300, function(){
		$(this).parent("div").remove();
		});
	});

	// 最乗寺外観写真をマウスオーバー又はアウト
	$("#top-saijyo3").hover(function(){
	
		var moji2 = $("img",this).attr("alt");
		$(this).append("<div><p>" + moji2 + "</p></div>");
		$("div",this).stop().fadeIn(300);

	}, function(){
		
		$("div",this).stop().fadeOut(300);
		$("div p",this).stop().animate({"top":"0px"}, 300, function(){
		$(this).parent("div").remove();
		});
	});

	// 最乗寺地図をマウスオーバー又はアウト
	$("#top-saijyo4").hover(function(){
	
		var moji3 = $("img",this).attr("alt");
		$(this).append("<div><p>" + moji3 + "</p></div>");
		$("div",this).stop().fadeIn(300);

	}, function(){
		
		$("div",this).stop().fadeOut(300);
		$("div p",this).stop().animate({"top":"0px"}, 300, function(){
		$(this).parent("div").remove();
		});
	});

 	/*----------------------　トグルブラック実行　----------------------*/

	var toggle_initial = true;

	// ブラウザをスクロール
	$(window).scroll(function(){
			
		// トグルブラック
		if($(window).scrollTop() > 1800){
				$(".navbar-toggle").removeClass("to_white");
				$("#navbar-toggle-logo ,#logo-bar").removeAttr("class", "to_white");
				$(".navbar-toggle").addClass("to_black");
				$("#navbar-toggle-logo ,#logo-bar").attr("class", "to_black");
				toggle_initial = false;
		}
			
		// トグルホワイト
		if(($(window).scrollTop() < 1800) && toggle_initial == false){
				$(".navbar-toggle").removeClass("to_black");
				$("#navbar-toggle-logo ,#logo-bar").removeAttr("class", "to_black");
				$(".navbar-toggle").addClass("to_white");
				$("#navbar-toggle-logo ,#logo-bar").attr("class", "to_white");
		}
	});	

	/*----------------------　レスポンス用　BOX合体　----------------------*/
	
	var hakojin_h1 = $(".top-spot1 h1").text();
	var hakojin_p = $(".top-spot1 p").text();

			
	var bijyutu_h1 = $(".top-spot5 h1").text();
	var bijyutu_p = $(".top-spot5 p").text();

			
	var owaku_h1 = $(".top-spot3 h1").text();
	var owaku_p = $(".top-spot3 p").text();

			
	$(window).on('load resize',function(){
		
		// windowの幅1250px以下
		if(window.matchMedia('(max-width:1250px)').matches){
			
			$(".top-spot4").attr("id","hakojin-animoji");
			$(".top-spot2").attr("id","bijyutu-animoji");
			$(".top-spot6").attr("id","owaku-animoji");

		// windowの幅1251px以上
		}else{
			$(".top-spot2, .top-spot4, .top-spot6").removeAttr("id");
		}
	});
	
	// 箱根神社写真をマウスオーバー又はアウト
	$(".top-spot4").hover(function(){

		$("#hakojin-animoji").append("<div><h1>" + hakojin_h1+ "</h1><p>" + hakojin_p + "</p></div>");
		$("#hakojin-animoji div").stop().fadeIn(300);
	}, function(){
			
		$("div",this).stop().fadeOut(300);
		$("div p",this).stop().animate({"top":"0px"}, 300, function(){
			$(this).parent("div").remove();
		});
	});

	// 箱根彫刻の森美術館写真をマウスオーバー又はアウト
	$(".top-spot2").hover(function(){

		$("#bijyutu-animoji").append("<div><h1>" + bijyutu_h1+ "</h1><p>" + bijyutu_p + "</p></div>");
		$("#bijyutu-animoji div").stop().fadeIn(300);
	}, function(){
			
		$("div",this).stop().fadeOut(300);
		$("div p",this).stop().animate({"top":"0px"}, 300, function(){
			$(this).parent("div").remove();
		});
	});

	// 大涌谷写真をマウスオーバー又はアウト
	$(".top-spot6").hover(function(){

		$("#owaku-animoji").append("<div><h1>" + owaku_h1+ "</h1><p>" + owaku_p + "</p></div>");
		$("#owaku-animoji div").stop().fadeIn(300);
	}, function(){
			
		$("div",this).stop().fadeOut(300);
		$("div p",this).stop().animate({"top":"0px"}, 300, function(){
			$(this).parent("div").remove();
		});
	});
	/*----------------------　スクロールバー折り畳み効果実行　----------------------*/
	
	var scroll_bar_animation;

 	$(window).on('load resize',function(){
				
		// windowの幅1250px以下 820px以上
		if((window.matchMedia('(max-width:1250px)').matches) && (window.matchMedia('(min-width:820px)').matches)){			
			scroll_bar_animation = 100;
		}
		// windowの幅819px以下 520px以上
		else if((window.matchMedia('(max-width:819px)').matches) && (window.matchMedia('(min-width:520px)').matches)){	
			scroll_bar_animation = 95;
		}
		// windowの幅519px以下
		else if(window.matchMedia('(max-width:519px)').matches){			
			scroll_bar_animation = 50;
		}		
		// windowの幅1251px以上
		else{
			scroll_bar_animation = 300;
		}
	});
	
	// ブラウザをスクロール
	$(window).scroll(function(){
			
		if($(window).scrollTop() > (scroll_bar_animation)){
  			$("#scroll-bar").addClass("scroll-bar-hidden");
			$("#scroll-bar").removeClass("scroll-bar-show");
		}else{
			  $("#scroll-bar").removeClass("scroll-bar-hidden");
			  $("#scroll-bar").addClass("scroll-bar-show");
		}
	});	
	/*----------------------　TOP文字アニメーションのセンター配置　----------------------*/

	var w; // TOPページメイン写真の横幅
	var h; // TOPページメイン写真の縦幅
	
	$(window).on('load resize',function(){

		// windowの幅1250px以下 820px以上
		if((window.matchMedia('(max-width:1250px)').matches) && (window.matchMedia('(min-width:820px)').matches)){			
			w = $("#top_center").width()/2 -250;
			h = $("#top_center").height()/2 -130;
			$("#top-mojis div").css("top", h);
			$("#top-mojis div").css("left", w);
		}
		// windowの幅819px以下 520px以上
		else if((window.matchMedia('(max-width:819px)').matches) && (window.matchMedia('(min-width:520px)').matches)){	
			w = $("#top_center").width()/2 -150;
			h = $("#top_center").height()/2 -80;
			$("#top-mojis div").css("top", h);
			$("#top-mojis div").css("left", w);
		}
		// windowの幅519px以下
		else if(window.matchMedia('(max-width:519px)').matches){
			w = $("#top_center").width()/2 -100;
			h = $("#top_center").height()/2 -50;
			$("#top-mojis div").css("top", h);
			$("#top-mojis div").css("left", w);
		}	
		// windowの幅1251px以上
		else{
			w = $("#top_center").width()/2 -250;
			h = $("#top_center").height()/2 -180;
			$("#top-mojis div").css("top", h);
			$("#top-mojis div").css("left", w);
		}
	});
