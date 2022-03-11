$(function(){
    $(".media_pointer").css("cursor", "pointer");
    // スマートフォン縦以外のナビゲーションをクリック
    var media3_ClickAdjust = 0;
    $(".media3_works").click(function() {
        $("body,html").animate({scrollTop: $("#works").offset().top - media3_ClickAdjust}, 400, "swing");
    });
    $(".media3_mysoft").click(function() {
        $("body,html").animate({scrollTop: $("#mysoft").offset().top - media3_ClickAdjust}, 400, "swing");
    });
    $(".media3_app").click(function() {
        $("body,html").animate({scrollTop: $("#app").offset().top - media3_ClickAdjust}, 400, "swing");
    });
    $(".media3_contact").click(function() {
        $("body,html").animate({scrollTop: $("#contact").offset().top - media3_ClickAdjust}, 400, "swing");
    });
    // 幅タイプ更新
    var width_type;

    width_name();
    $(window).on('load resize',function(){
        width_name();
    });
    // スマートフォン縦のナビゲーションをクリック
    var media1_ClickAdjust = 78;
   
    $(".media1_works").click(function() {
        $("body,html").animate({scrollTop: 0}, 400, "swing");
    });
    $(".media1_mysoft").click(function() {
        $("body,html").animate({scrollTop: $("#mysoft").offset().top - media1_ClickAdjust}, 400, "swing");
    });
    $(".media1_app").click(function() {
        $("body,html").animate({scrollTop: $("#app").offset().top - media1_ClickAdjust}, 400, "swing");
    });
    $(".media1_contact").click(function() {
        $("body,html").animate({scrollTop: $("#contact").offset().top - media1_ClickAdjust}, 400, "swing");
    });
    // 幅名取得
    function width_name() {
        // windowの幅1251px以上
        if(window.matchMedia('(min-width:1251px)').matches){
            width_type = "PCワイド";
            $("#media1").hide();
            $("#media3").show();
        }
        // windowの幅820px以上
        else if(window.matchMedia('(min-width:820px)').matches){
            width_type = "タブレット";
            $("#media1").hide();
            $("#media3").show();
        }
        // windowの幅520px以上
        else if(window.matchMedia('(min-width:520px)').matches){
            width_type = "スマホ横";
            $("#media1").hide();
            $("#media3").show();
        }
        // 以外
        else{
            width_type = "スマホ縦";
            $("#media3").hide();
            $("#media1").show();
            $("#width_type2").html(width_type);
        }
        $("#width_type").html(width_type);
    }
});