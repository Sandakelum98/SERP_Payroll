(function ($) {
	"use strict";
	$(document).ready(function () {
		$('.slider').bxSlider({
			auto: true,
			mode: 'fade',
			speed: 1000,
			pause: 5000,
			easing: 'ease-in-out',
			autoControls: false,
			controls: false,
			pager: false,
		});
		$('.logo-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: false,
			autoplay: true,
			autoplayHoverPause: true,
			controls: false,
			animateOut: 'fadeOut',
			responsive: {
				0: {
					items: 1
				},
				415: {
					items: 1
				},
				991: {
					items: 1
				},
				1200: {
					items: 1
				}

			}
		});
		$('.testimonial-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: false,
			autoplay: true,
			autoplayHoverPause: true,
			controls: false,
			responsive: {
				0: {
					items: 1
				},
				415: {
					items: 1
				},
				991: {
					items: 1
				},
				1200: {
					items: 1
				}

			}
		});

		$('.bxslider').bxSlider({
			auto: true,
			autoControls: true,
			stopAutoOnClick: true,
			pager: true,
			slideWidth: 600
		});

		$('.menu-open-icon').on("click", function () {
			$('.header-center-down').slideToggle();
			$('body').toggleClass('menu-has-opened');
		});
		$('.menu-close-icon').on("click", function () {
			$('.header-center-down').slideToggle();
			$('body').toggleClass('');
		});

		/*$('.gallery-image').viewbox({
			setTitle: true,
			margin: 5,
			resizeDuration: 300,
			openDuration: 200,
			closeDuration: 200,
			closeButton: true,
			navButtons: true,
			closeOnSideClick: true,
			nextOnContentClick: true
		});*/
		$('.videoPopup').flashy();
		
$('.main-tilt').tilt({
    maxTilt:        -15,
perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
/*easing:         "cubic-bezier(.03,.98,.52,.99)", */   // Easing on enter/exit.
scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
speed:          100,    // Speed of the enter/exit transition.
transition:     true,   // Set a transition on enter/exit.
disableAxis:    null,   // What axis should be disabled. Can be X or Y.
reset:          true,   // If the tilt effect has to be reset on exit.
glare:          true,  // Enables glare effect
maxGlare:       0.5     // From 0 - 1.
});

	});
})(jQuery);
