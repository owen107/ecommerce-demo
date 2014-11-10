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

// set up the jQuery UI accordion 
$(document).ready(function() {
	$('#department h3').click(function() {
		$(this).toggleClass('special');
    	$(this).next().toggle(800, 'swing');
    	return false
    }).next().show();
}); // initiate department filter 

$(document).ready(function() {
	$('#category h3').click(function() {
		$(this).toggleClass('special');
    	$(this).next().toggle(800, 'swing');
    	return false
    }).next().show();
});// initiate category filter

$(document).ready(function() {
	$('#brand h3').click(function() {
		$(this).toggleClass('special');
    	$(this).next().toggle(800, 'swing');
    	return false
    }).next().show();
}); // initiate brand filter

$(document).ready(function() {
	$('#price h3').click(function() {
		$(this).toggleClass('special');
    	$(this).next().toggle(800, 'swing');
    	return false
    }).next().show();
}); // // initiate price filter

$(document).ready(function() {
	$('#size h3').click(function() {
		$(this).toggleClass('special');
    	$(this).next().toggle(800, 'swing');
    	return false
    }).next().show();
}); // initiate size filter

$(document).ready(function() {
	$('#color h3').click(function() {
		$(this).toggleClass('special');
    	$(this).next().toggle(800, 'swing');
    	return false
    }).next().show();
}); // initiate color filter