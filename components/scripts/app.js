//load jquery library
var $ = require('jquery');
var jQuery = $;

//initiate jquery easyTicker plugin 
$(document).ready(function(){
	$('.vticker').easyTicker();
});

// info toggle script
$(document).ready(function() {
	var $info = $('#info');
	$('#clickme').click(function(e){
		e.stopPropagation();
		if ($info.is(":hidden")) {
	        $info.slideDown('slow');
		} else {
			$info.slideUp('slow');
		}
	});
	
	$(document.body).ready(function(){
		if ($info.not(":hidden")) {
			$info.slideUp('slow');
		};
	});
});

// responsive menu script
$(document).ready(function(){
   $('.megamenu').megamenu();
});

// responsive wmu slider 
$(document).ready(function() {
	$('.wmuSlider').wmuSlider();
});

// set the whitespace property of h3 when roll over the product
$(document).ready(function() {
	$('.product_details').hover(function() {
         $(this).find('h3').addClass('hover');
	}, function() {
		 $(this).find('h3').removeClass('hover');
	});
});

// initiate the moveToTop jQuery plugin
$(document).ready(function() {
			
	var defaults = {
		containerID: 'toTop', // fading element id
		containerHoverID: 'toTopHover', // fading element hover id
		scrollSpeed: 1200,
		easingType: 'linear' 
	};
	
	$().UItoTop({ easingType: 'easeOutQuart' });
	
});