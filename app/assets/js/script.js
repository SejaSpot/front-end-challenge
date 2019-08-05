$(document).ready(function(){

	var swiper = new Swiper('.swiper-container', {
		spaceBetween: 40,
		slidesPerView: 3,
		slidesPerGroup: 3,
  		pagination: {
    		el: '.swiper-pagination',
    		clickable: true,
      	},
    });

	$('.heart i').click(function(){
		$(this).toggleClass('filled-heart').toggleClass('animated').toggleClass('heartBeat');
	})

	// $('header form input').focus(function(){
	// 	$(this).addClass('search-focus');
	// });

	// $('header form input').blur(function(){
	// 	$(this).removeClass('search-focus');
	// });


});


