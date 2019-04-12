$(function () {
  $('#home_lan').mouseenter(function () {
    $(this).find('div').show();
  });

  $('#home_lan').mouseleave(function () {
    $(this).find('div').hide();
  });

  $('#home_lan div').mouseenter(function () {
    $(this).show();
  });

  $('#home_lan div').mouseleave(function () {
    $(this).hide();
  });

  $('#home_lan div span').mouseenter(function () {
    $(this).find('i').show();
  });

  $('#home_lan div span').mouseleave(function () {
    $(this).find('i').hide();
  });


  $(window).scroll(function () {

    let scrollTop = $('html,body').scrollTop();

    if (50 > scrollTop) {
      $('.home_firstRow').show();
      $('.home_secondRow').css({
        'margin-top': '15px'
      });
      $('header').css('background', 'rgba(255, 255, 255, 0.2)');
      $('.home_secondRow img').attr('src', '/public/image/logo_white.png');
      $('.home_secondRow a').css('color', '#fff');
    } else {
      $('.home_firstRow').hide();

      $('header').css('background', '#fff');
      $('.home_secondRow').css({
        'margin-top': '0px'
      });
      $('.home_secondRow img').attr('src', '/public/image/logo_black.png');
      $('.home_secondRow a').css('color', 'black');

    }
  });
});