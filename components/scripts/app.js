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
$(document).ready( function() {
    $('#department').accordion({
        collapsible:true,
        active: 0
    });
}); // initiate department filter 

$(document).ready( function() {
    $('#brand').accordion({
        collapsible:true,
        active: 0
    });
}); // initiate brand filter

$(document).ready( function() {
    $('#category').accordion({
        collapsible:true,
        active: 0
    });
}); // initiate category filter

$(document).ready( function() {
    $('#price').accordion({
        collapsible:true,
        active: 0
    });
}); // // initiate price filter

$(document).ready( function() {
    $('#size').accordion({
        collapsible:true,
        active: 0
    });
}); // initiate size filter

$(document).ready( function() {
    $('#color').accordion({
    	collapsible:true,
        active: 0
    });
}); // initiate color filter