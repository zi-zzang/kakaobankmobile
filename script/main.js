$(function () {
  $(window).scroll(function () {
    //윈도우 스크롤 이벤트
    if ($(window).scrollTop() + 500 > $('.con4').offset().top) {
      $('.con4').addClass('bgdark');
    } else {
      $('.con4').removeClass('bgdark');
    }
  });
});
