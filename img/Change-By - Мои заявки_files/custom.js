// ***********************************
// pageloader
// ***********************************
// $(window).load(function(){
// 	if($(".preloader").length > 0){
// 		$('.preloader').fadeOut(1000); // set duration in brackets
// 	}
// });
// $(document).ready(function(){
// 	if($(".preloader").length > 0){
// 		$('.preloader').fadeOut(1000); // set duration in brackets
// 	}
// });


// ***********************************
// totop
// ***********************************

$(document).ready(function(){
	$().UItoTop({ easingType: 'easeOutQuart' });
});

// **************************************
// jQuery to collapse the navbar on scroll
// **************************************

$(window).scroll(function() {
	if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
});

// ****************************************************************
// jQuery for page scrolling feature - requires jQuery Easing plugin
// ****************************************************************

$(function() {
	$('.page-scroll a').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});



// ****************************************************************
// Simple Text Rotator
// ****************************************************************

	$(document).ready(function(){
		$(".brand-heading .rotate").textrotator({
			animation: "fade",
			speed: 2000
		});
	});



// ****************************************************************
// owl-caurosel
// ****************************************************************

$(document).ready(function() {

	$("#intro-slider, #slider, #testimonial-list").owlCarousel({

		navigation : false, // Show next and prev buttons
		slideSpeed : 400,
		paginationSpeed : 400,
		singleItem:true,
		autoPlay: true

	});

	$("#member, #blog-list").owlCarousel({

		items : 3, //3 items above 1000px browser width
		itemsDesktop : [1000,3], //3 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // betweem 900px and 601px
		itemsTablet: [600,1], //1 items between 600 and 0
		itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option

	});

});



// ****************************************************************
// fitvids
// ****************************************************************

$(document).ready(function(){
	// Target your .container, .wrapper, .post, etc.
	$(".video-wrapper").fitVids();
});



// ****************************************************************
// colorbox
// ****************************************************************

$(document).ready(function(){
	$(".group1").colorbox({rel:'group1', transition:"fade", width:"94%", height:"94%"});
});



// ****************************************************************
// wow - for animation together with animate.css
// ****************************************************************

$(document).ready(function(){
	wow = new WOW(
	  {
		animateClass: 'animated',
		offset:       150
	  }
	);
	wow.init();
});



// ****************************************************************
// counterUp
// ****************************************************************

$(document).ready(function( $ ) {
	if($("span.count").length > 0){
		$('span.count').counterUp({
			delay: 10, // the delay time in ms
			time: 1000 // the speed time in ms
		});
	}
});










