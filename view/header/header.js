$(function () {
  const log = console.log;
  const dir = console.dir;

  //
  const PHONE_NUMBER = '+1416-939-7790';
  const EMAIL = 'info@jklonecapital.com';

  // get header tag
  const $header = $('header');

  // add container class to header tag.
  $header.addClass('container');

  // set css for header tag
  $header.css({
    border: '1px solid red'
  })

  /*
  * Function Name: 
  * Function Description: 
  * @params: 
  * @return: 
  */
  const createContactArea = function () {

    // 0. first row
    const $firstRow = $('<div></div>');
    $firstRow.addClass('row');
    $firstRow.appendTo($header);

    // 1. left
    // <i class="fas fa-mobile-alt"></i>+1416-939-7790
    // create i tag
    const $span = $('<span></span>');
    $span.addClass('col');
    const $i = $('<i></i>')
    $i.appendTo($span);
    $span.appendTo($firstRow);
    $i.addClass('fas fa-mobile-alt');
    const $subSpan = $('<span></span>');
    $subSpan.appendTo($span);
    $subSpan.text(PHONE_NUMBER);



    // 2. right
  }





  // main step
  createContactArea();
});