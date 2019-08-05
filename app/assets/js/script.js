$(document).ready(function(){

	var swiper = new Swiper('.swiper-container', {
		spaceBetween: 40,
		slidesPerView: 3,
		slidesPerGroup: 3,
  		pagination: {
    		el: '.swiper-pagination',
    		clickable: true,
      	},
      	breakpoints: {
      		1366: {
      			spaceBetween: 30,
      		},
      		1024: {
      			spaceBetween: 30,
				slidesPerView: 2,
				slidesPerGroup: 2,
      		},
      		768: {
      			spaceBetween: 20,
      		},
      		500: {
      			spaceBetween: 0,
				slidesPerView: 1,
				slidesPerGroup: 1,
      		},

      	}
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


