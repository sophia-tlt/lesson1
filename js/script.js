$(document).ready(function(){
  $('.main_btna').on('click', function() {
  	$('.overlay').fadeToggle('slow');
  	$('.modal').animate(
  		{
  			opacity: 'toggle',
  			top: '100px'
  		}, 1500)
  });

  $('.main_btn').on('click', function() {
  	$('.overlay').fadeToggle('slow');
  	$('.modal').animate(
  		{
  			opacity: 'toggle',
  			top: '100px'
  		}, 1500)
  });

  let parent = $('.main_mobmenu_field_list:first-child'),
  	li = $(parent.find('li:eq(2)'));

  $(li).on('click', function() {
  	$('.overlay').fadeToggle('slow');
  	$('.modal').animate(
  		{
  			opacity: 'toggle',
  			top: '100px'
  		}, 1500)
  });

    $('.close').on('click',function(){
  	$('.modal').animate(
  		{
  			opacity: 'toggle',
  		}, 500);

  	$('.overlay').fadeToggle('slow');
  });
  });