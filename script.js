$(function() {
  $('.menu-icon').click(function() {

    if ($('nav').hasClass('open')) {
      $('nav').removeClass('open');
      $('nav').css('transform' , 'translate(270px)');
      $('.menu-icon').html('<span class="fas fa-bars"></span>');
    } else {
      $('nav').addClass('open');
      $('nav').css('transform' , 'translate(0)');
      $('.menu-icon').html('<span class="fas fa-times"></span>');
    }
    
  });

  // ページトップボタンの表示処理
  var pageTop = $('.return-top-icon');
  pageTop.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });

  //ページトップ移動を0.5秒にする
  pageTop.click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  // $('a[href="#"]').click(function(){
 
  //   // 変数timeに500（0.5秒）を代入
  //   var time = 500;
 
  //   // 変数hrefにリンク先の値を代入
  //   var href= $(this).attr("href");
 
  //   // href="#"の場合は変数targetにhtmlを、そうでない場合はリンク先の値を代入
  //   var target = $(href == "#" ? 'html' : href);
 
  //   // 変数distanceにページの一番上からリンク先までの距離を代入
  //   var distance = target.offset().top;
 
  //   // 変数distanceの値だけ上へ0.5秒かけてスクロールさせる
  //   $("html, body").animate({scrollTop:distance}, time, "swing");
 
  //   // リンク先への移動をキャンセル
  //   return false;
  // });
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
    
});
