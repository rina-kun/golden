// スムーススクロール
// 以下のように記述[data-scroll]は無くても動きます。
// offsetはスムーススクロール後の上の余白です。
// ※50なら上に50pxの余白
var scroll = new SmoothScroll('a[href*="#"], [data-scroll]',{
  offset: 50
});
// windowサイズでモバイル判定
// スマホとPCでスムーススクロール後の上部の余白を変えたい場合
// 例：ブレイクポイント768px スマホで50px PCで30pxのoffset
var isMobile = function(size){
  return $(window).width() <= size ? true : false
}

var scroll = new SmoothScroll('a[href*="#"], [data-scroll]',{
  offset: isMobile(768) ? 50 : 30
});

/*=======================================
トップに戻るボタン
=========================================*/
//http://makasete-web.net/gototop-scroll
//http://makasete-web.net/sample/go-to-top-scroll/
$(document).ready(function() {
  var pagetop = $('.pagetop');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {//「100」はボタンの出現位置の指定で「100」の場合は上から100pxスクロールした時に表示
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
            }
       });
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);//「500」はトップへ戻る速度
              return false;
   });
});
