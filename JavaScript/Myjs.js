var elementHeight;
var scrollHeight;

$(window).on('load resize', function() {
  // ｆｖの高さを取得
  elementHeight = $('.fv__wrapper').height();
});

$(function() {
  // スクロール
  $(window).scroll(function () {
    scrollHeight = $(window).scrollTop();
    // メニューを開いているときスクールしても常に白を表示させるためのif文
    if($('.header__right').hasClass('open')){
    } else {
      if(elementHeight<scrollHeight){
        iconColor(1);
      } else {
        iconColor(0)
      }
    }
  });

  // ハンバーガーメニュー
  $('.header__right').on('click', function() {
    if($(this).hasClass('open')){
      // カバーとメニュー非表示
      menuVisible(0);
      // アイコン変形
      iconChg(0);
      // アイコンの色（閉じたときの位置によって変える）
      if(elementHeight<scrollHeight){
        iconColor(1);
      } else {
        iconColor(0);
      }
    } else {
      // カバーとメニュー表示
      menuVisible(1);
      // アイコン変形
      iconChg(1);
      // アイコンの色（開いているときは常に白）
      iconColor(0);
    }
  });

  // ハンバーガーメニュー閉じる例外処理
  $('.header__drawer, .header__menu').on('click', function(){
    if($('.header__right').hasClass('open')){
      // カバーとメニュー非表示
      menuVisible(0);
      // アイコン変形
      iconChg(0);
      // アイコンの色
      if(elementHeight<scrollHeight){
        iconColor(1);
      } else {
        iconColor(0);
      }
    }
  });

  // カバーとメニューの表示
  let menuVisible = function(visIndex){
    if(visIndex===0){
      $('.header__menu').hide();
    } else {
      $('.header__menu').show();
    }
    $('.unshown__cover'). toggleClass('header__cover');
    // クラストグル
    $('.header__right').toggleClass('open');
  };

  // アイコンの変形
  let iconChg = function(chgIndex) {
    if(chgIndex===0){
      $('.header__icon--first').css('transform', 'translate(0,0) rotate(0)');
      $('.header__icon--middle').css('transform', 'translate(0,0)');
      $('.header__icon--last').css('transform', 'translate(0,0) rotate(0)');
    } else {
      $('.header__icon--first').css('transform', 'translate(0,6px) rotate(45deg)');
      $('.header__icon--middle').css('transform', 'translate(1000px,0)');
      $('.header__icon--last').css('transform', 'translate(0,-6px) rotate(-45deg)');
    }
  };

  // headericonの色を状況に応じて変更する
  let iconColor = function(colorIndex) {
    if(colorIndex===0){
      $('.header__svg path').css('fill', '#ffffff');
      $('.header__icon').css('background-color', '#ffffff');
      $('.header__icon-txt').css('color', '#ffffff');
    } else {
      $('.header__svg path').css('fill', '#000000');
      $('.header__icon').css('background-color', '#000000');
      $('.header__icon-txt').css('color', '#000000');
    }
  };
});

