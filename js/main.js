$(function() {

  $('.hamburger').on('click', function() {
  $(this).toggleClass('active');
  $('nav, .wrapper').toggleClass('menu-visible');
});

});
