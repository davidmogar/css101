$(function() {

  $('.hamburger').click(function() {
    $(this).toggleClass('active');
    $('nav, #wrapper').toggleClass('animate');
  });

});
