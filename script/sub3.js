$(function () {
  //예금적금 눌렀을때 화살표 안보이고 밑에 li 아코디언으로 보이게
  $('.all>li>a, .qna>li>a').click(function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle(500);

    return false; //a태그 링크 무시
  });
  $('#sword').on('keyup', function () {
    var val = $(this).val();
    if (val !== '') {
      $('.qna li a').filter(function () {
        $('.qna').show();
        $(this).toggle($(this).text().indexOf(val) > -1);
      });
      $('.btn_more').hide();
    } else {
      $('.qna').hide();
    }
  });
});
