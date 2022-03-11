
	/*----------------------　レスポンス用　BOX合体　----------------------*/
	
	var zazen_h1 = $("#za-moji h1").text();
	var zazen_p = $("#za-moji p").text();
	
	var syakei_h1 = $("#sya-moji h1").text();
	var syakei_p = $("#sya-moji p").text();
		
	var syojin_h1 = $("#syo-moji h1").text();
	var syojin_p = $("#syo-moji p").text();
	
	var howa_h1 = $("#ho-moji h1").text();
	var howa_p = $("#ho-moji p").text();

	$(window).on('load resize',function(){
		
		// windowの幅1250px以下
		if(window.matchMedia('(max-width:1250px)').matches){
			
			$(".zazen-img").attr("id","zazen-animoji");
			$(".syakei-img").attr("id","syakei-animoji");
			$(".syojin-img").attr("id","syojin-animoji");
			$(".howa-img").attr("id","howa-animoji");

		// windowの幅1251px以上
		}else{
			$(".zazen-img, .syakei-img, .syojin-img ,.howa-img").removeAttr("id");
		}	
	});
	
	// 座禅イベント写真をマウスオーバー又はアウト
	$(".zazen-img").hover(function(){

		$("#zazen-animoji").append("<div><h1>" + zazen_h1+ "</h1><p>" + zazen_p + "</p></div>");
		$("#zazen-animoji div").stop().fadeIn(300);
	}, function(){
			
		$("div",this).stop().fadeOut(300);
		$("div p",this).stop().animate({"top":"0px"}, 300, function(){
			$(this).parent("div").remove();
		});
	});

	// 写経イベント写真をマウスオーバー又はアウト
	$(".syakei-img").hover(function(){

		$("#syakei-animoji").append("<div><h1>" +syakei_h1+ "</h1><p>" + syakei_p + "</p></div>");
		$("#syakei-animoji div").stop().fadeIn(300);
	}, function(){
			
		$("div",this).stop().fadeOut(300);
		$("div p",this).stop().animate({"top":"0px"}, 300, function(){
			$(this).parent("div").remove();
		});
	});

	// 精進料理イベント写真をマウスオーバー又はアウト
	$(".syojin-img").hover(function(){

		$("#syojin-animoji").append("<div><h1>" +syojin_h1+ "</h1><p>" + syojin_p + "</p></div>");
		$("#syojin-animoji div").stop().fadeIn(300);
	}, function(){
			
		$("div",this).stop().fadeOut(300);
		$("div p",this).stop().animate({"top":"0px"}, 300, function(){
			$(this).parent("div").remove();
		});
	});

	// 法話イベント写真をマウスオーバー又はアウト
	$(".howa-img").hover(function(){

		$("#howa-animoji").append("<div><h1>" +howa_h1+ "</h1><p>" + howa_p + "</p></div>");
		$("#howa-animoji div").stop().fadeIn(300);
	}, function(){
			
		$("div",this).stop().fadeOut(300);
		$("div p",this).stop().animate({"top":"0px"}, 300, function(){
			$(this).parent("div").remove();
		});
	});
	
	/*----------------------　geometryangle設定　----------------------*/

	$('#geo').Geometryangle({
		mesh: {background:'#dcb370'},
		lights: [{ambient:'rgb(220,179,112)', diffuse:'rgb(220,179,112)'}],
	});