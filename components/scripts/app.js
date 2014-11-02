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