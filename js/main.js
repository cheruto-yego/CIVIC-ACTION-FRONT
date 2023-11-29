$(document).ready(function () {

	//Owl Carousel
	$('#clients .owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			544: {
				items: 1
			},
			767: {
				items: 1
			}
		}
	});

	function changeButtonStyle() {
		var button = document.getElementById('myButton');
		button.style.backgroundColor = '#ff6600'; // Change to the desired color
		button.style.color = 'white'; // Change to the desired text color
	}
	
	// Navbar Fixed

	let nav_offset_top = $('#header').height() + 50;

	function navbarFixed() {
		if ($('#header').length) {
			$(window).scroll(function () {
				let scroll = $(window).scrollTop();

				if (scroll >= nav_offset_top) {
					$('#header  .main').addClass('navbar_fixed');
				} else {
					$('#header .main').removeClass('navbar_fixed');
				}
			});
		}
	}
	navbarFixed();


	// Click to Scroll Up
	$('footer .move span').click(function () {
		$('html,body').animate({
			scrollTop: 0
		}, 1500);
	});


	// Wow
	new WOW().init();



});