$(function(){

  $('.navbar-navigation__menu').on('click', function(){
    $('.navbar-navigation__list').slideToggle(300, function(){
      if($(this).css('display') === 'none'){
        $(this).removeAttr('style');
      }
    });
  });
});



// $('navbar-navigation__menu').on('click', function() {
//   $(this).toggleClass('navbar-navigation__menu__active');
// });