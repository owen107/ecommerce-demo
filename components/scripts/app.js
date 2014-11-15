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

// set up the jQuery filters accordion 
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
}); // initiate price filter

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

// set up the jQuery share accordion in details page 
$(document).ready(function() {
	$('#share h3').click(function() {
		$(this).toggleClass('special');
    	$(this).next().toggle(800, 'swing');
    	return false
    }).next().hide();
}); 

// inititate easyResponsiveTabs jQuery plugin
$(document).ready(function() {
	$('#horizontalTab').easyResponsiveTabs({
		type: 'default',
		width: 'auto',
		fit: true,
		closed: 'accordion', // Start closed if in accordion view
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#tabInfo');
            var $name = $('span', $info);

            $name.text($tab.text());

            $info.show();
        }
	});
});

// create an image gallery selector in the product image
$(document).ready(function() {
	// select the link that its image child element has the gallery class selector
	$('a:has(img.gallery)').click(function(e) {
		 e.preventDefault(); 
		 e.stopPropagation(); // prevent the default action of the event to be triggered
		 var largePath = $(this).attr('href');

		 $('#large_image').attr({src: largePath});
		 $('#full_screen a').attr({href: largePath});
         // not follow the link
		 // return false; 
	});
});

// second approach to creata an image gallery selector
$(document).ready(function() {
	// select the image with the gallery class selector
	$('#image_tn img.gallery').click(function() {
		 $('#image_tn img').each(function() {
		 	if($(this).hasClass("selectedImg")) {
		 		$(this).removeClass("selectedImg");
		 	}
		 });
		 
		 $(this).addClass("selectedImg");
		 
		 var tnPath = $(this).attr('src');
		 var largePath = tnPath.substr(0, tnPath.length-8) + ".jpeg";
		 var zoomInImgPath = largePath.substr(0, largePath.length-5) + "_hr.jpeg";

		 $('#large_image').attr({src: largePath});
		 $('#large_image').parent().attr("href", zoomInImgPath);
		 $('#full_screen a').attr({href: largePath});
	});
});

//create lightbox effect for product gallery in the details page (Approach 1 - Using jQuery)
$(document).ready(function() {
	var $image = $('<img>'); // create a new image element
	var $spinner = $('<img>');
	$image.addClass("high_res");
	$spinner.addClass("spinner");
	$spinner.attr("src", "../images/details/ajax-loader.gif");
	var overlay = $('#overlay'); 
	overlay.append($image);  // append the new created image element into the overlay
	overlay.append($spinner);  // append the spinner into the overlay

	$('#full_screen a').click(function(event) {
		event.preventDefault(); // prevent the default action of the event to be triggered
		var curPath = $(this).attr('href');
		var highResPath = curPath.substr(0, curPath.length-5) + "_hr.jpeg" 
		$image.attr("src", highResPath);
		overlay.css({
			display: "block",
			top: window.pageYOffset + "px",
			left: window.pageXOffset + "px"
		});
		// when completely loading the image, remove the spinner 
		$image.load(function() {
			$spinner.remove();

			$(window).scroll(function() {
				if (overlay) {
				  overlay.css({
				    top: window.pageYOffset + "px",
					left: window.pageXOffset + "px"
				  });
				}
			});
		});
		// overlay.show();
    });

    overlay.click(function() {
    	// overlay.hide();
    	overlay.css("display", "none");
    });
});

//create lightbox effect for size chart in the details page 
$(document).ready(function() {
	var $sizeChart = $('<img>'); // create a new image element
	var $spinner = $('<img>');
	$sizeChart.addClass("high_res");
	$spinner.addClass("spinner");
	$spinner.attr("src", "../images/details/spinner.gif");
	var overLay = $('#overLay'); 
	overLay.append($sizeChart);  // append the new created image element into the overlay
	overLay.append($spinner);  // append the spinner into the overlay

	$('#size_chart a').click(function(event) {
		event.preventDefault(); // prevent the default action of the event to be triggered
		var imgPath = $(this).attr('href');
		$sizeChart.attr("src", imgPath);
		overLay.css({
			display: "block",
			top: window.pageYOffset + "px",
			left: window.pageXOffset + "px"
		});
		// when completely loading the image, remove the spinner 
		$sizeChart.load(function() {
			$spinner.remove();

			$(window).scroll(function() {
				if (overLay) {
				  overLay.css({
				    top: window.pageYOffset + "px",
					left: window.pageXOffset + "px"
				  });
				}
			});
		});
		// overlay.show();
    });

    overLay.click(function() {
    	// overlay.hide();
    	overLay.css("display", "none");
    });
});

// create color options selectors for details page
$(document).ready(function() {
	$('.color_list a').click(function(e) {
		e.stopPropagation();
		e.preventDefault(); // prevent default action of event

		// select the class name and save as the color option
		var color = $(this).children().attr('class');

		// select the image list and loop through each of its child element
		var list = $('#image_tn li');
		list.each(function(index) {

		   // get the current image location
           var imageLoc = $(this).children().attr("src");

           // change the image location
           var newImageLoc = imageLoc.substring(0, 19) + color + "_tn.jpeg";

           // reset the image location
           $(this).children().attr("src", newImageLoc);

           if ($(this).children().hasClass("selectedImg")) {
                $(this).children().removeClass("selectedImg");
           }

           // if the element is the first child, also change the path for gallery and zoomIn image
           if (index === 0) {
           	  var largeImageLoc = $('#large_image').attr("src");
           	  var newLargeImgLoc = newImageLoc.substr(0, newImageLoc.length-8) + ".jpeg";
           	  var zoomInImgLoc = newLargeImgLoc.substr(0, newLargeImgLoc.length-5) + "_hr.jpeg";
           	  $('#large_image').attr("src", newLargeImgLoc);
           	  $('#large_image').parent().attr("href", zoomInImgLoc);
           }
		});
	});
});
