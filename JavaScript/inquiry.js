	
	/*----------------------　CANVASアニメーション　----------------------*/
	
	var animation_start;	//アニメーションタイミング変数
	var onetime_animation = true;	// ワンタイム変数	
	
	$(window).on('load resize',function(){
				
		// windowの幅819px以下
		if(window.matchMedia('(max-width:819px)').matches){			

			if(onetime_animation == true){			
				onetime_animation = false;
				setTimeout(function(){
					init();			
				},1500);
			}
		// windowの幅820px以上
		}else{
			animation_start = 300;
		}	
	});

	// animate CCで出力したコード
	var canvas, stage, exportRoot;
	function init() {
	
		canvas = document.getElementById("mycanvas");
		exportRoot = new lib.inquiry_logo_animate();
		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		stage.update();
		stage.enableMouseOver();
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
	
 	// ブラウザをスクロール
	$(window).scroll(function(){
			
		if($(window).scrollTop() > animation_start && onetime_animation == true){
			onetime_animation = false;
			init();			
		}
	});	
	
	/*----------------------　Animify設定　----------------------*/
	
	$('#mizutama').Animify({
		'background-color':'#adb367',
		'item-opacity':.3,
		'intro':false,
		'item-quantity':50
	});