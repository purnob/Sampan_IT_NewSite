$(document).ready(function($) {
	$('#about-info').flexslider({
		animation: "fade",
		slideshow: false,                
		directionNav: true,
		controlsContainer: "#about",
		controlNav: true,
		startAt: 1,
		manualControls: ".about-nav li"
	});
});
