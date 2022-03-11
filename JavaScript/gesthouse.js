
 	/*----------------------　HAKONE TENTバーグレースケール　----------------------*/

	// バー写真をマウスオーバー又はアウト
	$("#gesthouse-box1").hover(function(){
		
		$(this).append("<div><p>HAKONE TENT BAR</p></div>");
		$("div",this).stop().fadeIn(300);

	}, function(){
		
		$("div",this).stop().fadeOut(300);
		$("div p",this).stop().animate({"top":"0px"}, 300, function(){
			$(this).parent("div").remove();
		});
	});
		
	/*----------------------　スライドショー　----------------------*/

	//　変数定義
	var count = $(".gesthouse-page-block2 li").length;
	var current = 1;
	var next = 2;
	var interval = 5000;	// 	スライド間隔
	var duration = 1500;	// 	フェード間隔
	var timer;

	$(".gesthouse-page-block2 li:not(:first-child)").hide();

	timer = setInterval(slideTimer, interval);

	function slideTimer(){

		$(".gesthouse-page-block2 li:nth-child(" + current + ")").fadeOut(duration);
		$(".gesthouse-page-block2 li:nth-child(" + next + ")").fadeIn(duration);

		current = next;
		next =++ next;
	
		if(next > count){
			next = 1;	
		}
	}
	
	/*----------------------　レスポンス用　BOX合体　----------------------*/
	
	// 温泉文字変数
	var spring_h1 = $("#spring-kono h1").text();
	var spring_p = $("#spring-kono p").text();
	var spring_h4 = $("#spring-kono h4").text();
	
	// 客室文字変数
	var kyakusitu_p = $("#kyakusitu p").text();

	// 飲み物文字変数
	var drink_h1 = $("#gesthouse-box3 h1").text();

	// 食べ物文字変数
	var food_h1 = $("#gesthouse-box4 h1").text();

	$(window).on('load resize',function(){
		
		// windowの幅1250px以下
		if(window.matchMedia('(max-width:1250px)').matches){
			
			$(".spring-img").attr("id","spring-animoji");
			$(".kyakusitu-img").attr("id","kyakusitu-animoji");
			$(".drink-img").attr("id","drink-animoji");
			$(".gesthouse-box5").attr("id","food-animoji");

		// windowの幅1251px以上
		}else{
			$(".spring-img").removeAttr("id");
			$(".kyakusitu-img").removeAttr("id");
			$(".drink-img").removeAttr("id");
			$(".gesthouse-box5").removeAttr("id");
		}	
	});
	
	// 温泉写真をマウスオーバー又はアウト
	$(".spring-img").hover(function(){

		$("#spring-animoji").append("<div><h1>" + spring_h1 + "</h1><p>" + spring_p + "</p><h4>" + spring_h4 + "</h4><div><p>冷え性</p><p>神経痛</p><p>慢性皮膚病</p><p>関節痛</p><p>五十肩</p><p>慢性消化器病</p><p>きりきず</p><p>やけど</p><p>動脈硬化症<p></div></div>");
		$("#spring-animoji div").stop().fadeIn(300);
	}, function(){
			
		$("div",this).stop().fadeOut(300);
		$("div p",this).stop().animate({"left":"140px"}, 300, function(){
			$(this).parent("div").remove();
		});
	});

	// 客室写真をマウスオーバー又はアウト
	$(".kyakusitu-img").hover(function(){

		$("#kyakusitu-animoji").append("<div><p>" + kyakusitu_p + "</p><dl><dt>1人用個室 (ベッド)</dt><dd>1人用個室です。ベッドタイプとなっております。</dd><dd>￥4,000 / 1泊1名様</dd><dt>2人用個室 (和室またはベッド)</dt><dd>2人用個室です。和室またはダブルベッドタイプとなります。</dd><dd>￥9,000 / 1泊1部屋</dd><dt>3人用個室(和室)</dt><dd>3人用個室です。和室、ふかふかのお布団をご用意しております。</dd><dd>￥13,500 / 1泊1部屋</dd></dl></div>");
		$("#kyakusitu-animoji div").stop().fadeIn(300);
	}, function(){
			
		$("div",this).stop().fadeOut(300);
		$("div p",this).stop().animate({"left":"140px"}, 300, function(){
			$(this).parent("div").remove();
		});
	});

	// 飲み物写真をマウスオーバー又はアウト
	$(".drink-img").hover(function(){

		$("#drink-animoji").append("<div><h1>" + drink_h1 + "</h1><dl><dt>DRAFT BEER</dt><dd>アサヒスーパードライ<span>・・・</span>￥500</dd><dd>ヱビスビール<span>・・・・・・・</span>￥500</dd><dt>ウィスキ</dt><dd>白州<span>・・・・・・・・・・・</span>￥700</dd><dd>竹鶴<span>・・・・・・・・・・・</span>￥600</dd><dt>カクテル</dt><dd>カシスオレンジ<span>・・・・・・</span>￥500</dd><dd>カシスウーロン<span>・・・・・・</span>￥500</dd><dd>カシスソーダ<span>・・・・・・・</span>￥500</dd></dl><dl><dt>日本酒</dt><dd>箱根山<span>・・・・・・・・・・</span>￥500</dd><dd>上善如水<span>・・・・・・・・・</span>￥600</dd><dt>ソフトドリンク</dt><dd>烏龍茶<span>・・・・・・・・・・</span>￥200</dd><dd>オレンジジュース<span>・・・・・</span>￥200</dd><dd>グレープフルーツジュース<span>・</span>￥200</dd><dd>コーラ<span>・・・・・・・・・・</span>￥200</dd></dl></div>");
		$("#drink-animoji div").stop().fadeIn(300);
	}, function(){
			
		$("div",this).stop().fadeOut(300);
		$("div h1",this).stop().animate({"left":"140px"}, 300, function(){
			$(this).parent("div").remove();
		});
	});

	// 食べ物写真をマウスオーバー又はアウト
	$(".gesthouse-box5").hover(function(){

		$("#food-animoji").append("<div><h1>" + food_h1 + "</h1><ul><li>ミックスナッツ<span>・・・</span>￥300</li><li>チーズ盛り合わせ<span>・・</span>￥500</li><li>生ハムのオリーブ添え<span></span>￥500</li><li>肉じゃが<span>・・・・・・</span>￥500</li><li>カレーライス<span>・・・・</span>￥500</li><li>日替わりピザ<span>・・・・</span>￥800～</li></ul><ul><li>茶豆<span>・・・・・・・・</span>￥300</li><li>アンチョビトースト<span>・</span>￥300</li><li>シーザーサラダ<span>・・・</span>￥500</li><li>ナスのラザニア<span>・・・</span>￥600</li><li>ご飯と味噌汁<span>・・・・</span>￥300</li><li>日替わりパスタ<span>・・・</span>￥800～</li></ul></div>");
		$("#food-animoji div").stop().fadeIn(300);
	}, function(){
			
		$("div",this).stop().fadeOut(300);
		$("div h1",this).stop().animate({"left":"140px"}, 300, function(){
			$(this).parent("div").remove();
		});
	});