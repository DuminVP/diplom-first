$(document).ready(function(){
	$('.icons').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		swipeToSlide: true,
		touchMove: true,
		ltr: true,
		infinite: true,
		variableWidth: true,
		dots: false,
		pauseOnHover: false,
		prevArrow: '<div class="prev"></div>',
		nextArrow: '<div class="next"></div>',
		responsive: [
			{
				breakpoint: 1370,
				settings: {
					arrows: false,
					dots: true,
					dotsClass: 'slick-dots2',
				}
			},
			{
				breakpoint: 1024,
				settings: {
					arrows: false,	
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
					dotsClass: 'slick-dots2',
				}
			},
			{
				breakpoint: 680,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					dotsClass: 'slick-dots2',
				}
			}
		]
	})
})