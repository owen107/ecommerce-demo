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
	
    $('#product_desc h3').click(function() {
		$(this).toggleClass('special');
    	$(this).next().toggle('slow');
    	return false
    }).next().show();

	$('#share h3').click(function() {
		$(this).toggleClass('special');
    	$(this).next().toggle(800, 'swing');
    	return false
    }).next().hide();
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
		event.stopPropagation();
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
		$('#color_selected span').text(color);

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
           	  $('#full_screen a').attr("href", newLargeImgLoc);
           }
		});
	});
});

// create a dropdown for size and quantity select element in details page 
$(document).ready(function() {
    
    // create variables for selected ID elements, appended object and target ID
    var size = $("#size"),
        sizeTargId = size.attr("id") + "Target",
        sizeObject = $(".size"),
        quantity = $("#quantity"),
        quantityTargId = quantity.attr("id") + "Target",
        quantityObject = $(".quantity");
    
    // create dropdown for each element
    createDropDown(size, sizeObject, sizeTargId);
    createDropDown(quantity, quantityObject, quantityTargId);

    // bind click for each element
    bindDropdown(size);
    bindDropdown(quantity);

});

// reusable function for creating the dropdown 
function createDropDown(selectedElem, appendObject, targetId){
    var selected = selectedElem.find("option[selected]");  // get selected <option>
    var options = $("option", selectedElem);  // get all <option> elements

    // create <dl> and <dt> with selected value inside it
    appendObject.append('<dl id="' + targetId + '"class="dropdown"></dl>');
    // console.log(targetId);
    $("#" + targetId).append('<dt><a href="#">' + selected.text() + 
        '<span class="value">' + selected.val() + 
        '</span></a></dt>');
    $("#" + targetId).append('<dd><ul></ul></dd>');

    // iterate through all the <option> elements and create UL
    options.each(function(){
        $("#" + targetId + " dd ul").append('<li><a href="#">' + 
            $(this).text() + '<span class="value">' + 
            $(this).val() + '</span></a></li>');
    });
}

// reusable function for binding event of each dropdown 
function bindDropdown(elementId) {

    var targetId = elementId.attr('id');

    // when clicking dropdown dt element
    // UL element inside can be toggle
    $("." + targetId + " .dropdown dt a").click(function() {
        $("." + targetId + " .dropdown dd ul").toggle();
    });
    
    // check whether the LI element in UL is clicked
    // if so, hide UL 
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("dropdown"))
            $("." + targetId + " .dropdown dd ul").hide();
    });
    
    // when clicking li elment, replace the text of link in dt element
    // meanwhile, set the value for hidden select element            
    $("." + targetId + " .dropdown dd ul li a").click(function() {
        var text = $(this).html();
        $("." + targetId + " .dropdown dt a").html(text);
        $("." + targetId + " .dropdown dd ul").hide();

        elementId.val($(this).find("span.value").html());
    });
}

// initiate flexisel carousel jQuery plugin
$(window).load(function() {

	$("#recommend_products").flexisel({
		visibleItems: 5,
		animationSpeed: 1500,
		autoPlay: true,
		autoPlaySpeed: 4000,    		
		pauseOnHover: true,
		enableResponsiveBreakpoints: true,
    	responsiveBreakpoints: { 
    		portrait: { 
    			changePoint:320,
    			visibleItems: 1
    		}, 
    		landscape: { 
    			changePoint:640,
    			visibleItems: 2
    		},
    		tablet: { 
    			changePoint:768,
    			visibleItems: 3
    		}
    	}
    });
});

// change the behavior of accordion in details page when resizing the window between 995px and 768px
$(document).ready(function() {

	// when window is resizing fire up the function
	$(window).resize(function() {

		// get the current size of window
		var winWidth = $(window).width();
		var productDesc = $('#product_desc h3');
		var share = $('#share h3');
		if ( winWidth <= 980 && winWidth >= 753) {
				
			// hide product description accordion
			productDesc.next().hide();
			productDesc.addClass('special'); // add special class so as to display the correct icon

			// show the share accordion and add special class
			share.addClass('special');
			share.next().show(); 
		} else {
			productDesc.next().show();
			productDesc.removeClass('special');
			share.next().hide();
			share.removeClass('special');
		}
		console.log(winWidth);
	});
	
});
