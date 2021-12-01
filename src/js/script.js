import $ from 'jquery';

import '../../node_modules/slick-carousel/slick/slick.min';

$('.responsive').slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 6,
	slidesToScroll: 4,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: false,
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });