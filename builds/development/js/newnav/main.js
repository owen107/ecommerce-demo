jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MqL = 1024;
	//move nav element position according to window width
	moveNavigation();
	$(window).on('resize', function(){
		(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
	});

	//mobile - open lateral menu clicking on the menu icon
	$('.dj-nav-trigger').on('click', function(event){
		event.preventDefault();
		if( $('.dj-main-content').hasClass('nav-is-visible') ) {
			closeNav();
			$('.dj-overlay').removeClass('is-visible');
			console.log('close the menu');
		} else {
			$(this).addClass('nav-is-visible');
			$('.dj-primary-nav').addClass('nav-is-visible');
			$('.dj-main-header').addClass('nav-is-visible');
			$('.dj-main-content').addClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').addClass('overflow-hidden');
			});
			toggleSearch('close');
			$('.dj-overlay').addClass('is-visible');
			console.log('open the menu');
		}
	});

	//open search form
	$('.dj-search-trigger').on('click', function(event){
		event.preventDefault();
		toggleSearch();
		closeNav();
	});

	//close lateral menu on mobile 
	$('.dj-overlay').on('swiperight', function(){
		if($('.dj-primary-nav').hasClass('nav-is-visible')) {
			closeNav();
			$('.dj-overlay').removeClass('is-visible');
		}
	});
	$('.nav-on-left .dj-overlay').on('swipeleft', function(){
		if($('.dj-primary-nav').hasClass('nav-is-visible')) {
			closeNav();
			$('.dj-overlay').removeClass('is-visible');
		}
	});
	$('.dj-overlay').on('click', function(){
		closeNav();
		toggleSearch('close')
		$('.dj-overlay').removeClass('is-visible');
	});


	//prevent default clicking on direct children of .dj-primary-nav 
	$('.dj-primary-nav').children('.has-children').children('a').on('click', function(event){
		event.preventDefault();
	});
	//open submenu
	$('.has-children').children('a').on('click', function(event){
		if( !checkWindowWidth() ) event.preventDefault();
		var selected = $(this);
		if( selected.next('ul').hasClass('is-hidden') ) {
			//desktop version only
			selected.addClass('selected').next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('moves-out');
			selected.parent('.has-children').siblings('.has-children').children('ul').addClass('is-hidden').end().children('a').removeClass('selected');
			$('.dj-overlay').addClass('is-visible');
		} else {
			selected.removeClass('selected').next('ul').addClass('is-hidden').end().parent('.has-children').parent('ul').removeClass('moves-out');
			$('.dj-overlay').removeClass('is-visible');
		}
		toggleSearch('close');
	});

	//submenu items - go back link
	$('.go-back').on('click', function(){
		$(this).parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('moves-out');
	});

	function closeNav() {
		$('.dj-nav-trigger').removeClass('nav-is-visible');
		$('.dj-main-header').removeClass('nav-is-visible');
		$('.dj-primary-nav').removeClass('nav-is-visible');
		$('.has-children ul').addClass('is-hidden');
		$('.has-children a').removeClass('selected');
		$('.moves-out').removeClass('moves-out');
		$('.dj-main-content').removeClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			$('body').removeClass('overflow-hidden');
		});
	}

	function toggleSearch(type) {
		if(type=="close") {
			//close serach 
			$('.dj-search').removeClass('is-visible');
			$('.dj-search-trigger').removeClass('search-is-visible');
			$('.dj-overlay').removeClass('search-is-visible');
		} else {
			//toggle search visibility
			$('.dj-search').toggleClass('is-visible');
			$('.dj-search-trigger').toggleClass('search-is-visible');
			$('.dj-overlay').toggleClass('search-is-visible');
			if($(window).width() > MqL && $('.dj-search').hasClass('is-visible')) $('.dj-search').find('input[type="search"]').focus();
			($('.dj-search').hasClass('is-visible')) ? $('.dj-overlay').addClass('is-visible') : $('.dj-overlay').removeClass('is-visible') ;
		}
	}

	function checkWindowWidth() {
		//check window width (scrollbar included)
		var e = window, 
            a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        if ( e[ a+'Width' ] >= MqL ) {
			return true;
		} else {
			return false;
		}
	}

	function moveNavigation(){
		var navigation = $('.dj-nav');
  		var desktop = checkWindowWidth();
        if ( desktop ) {
			navigation.detach();
			navigation.insertBefore('.dj-header-buttons');
		} else {
			navigation.detach();
			navigation.insertAfter('.dj-main-content');
		}
	}
    
    // open the user account menu when hovering the user icon
	$('.fa-user').hover(function() {
		 console.log('enter');
         $(this).next().animate({opacity: 1}, 300);
         $(this).find('.fa-caret-down').animate({opacity: 0}, 300);
         $(this).find('.fa-close').animate({opacity: 1}, 300);
	}, function() {
		 console.log('leave');
	});
    
    // close the user account meun when clicking the close icon
	$('.fa-close').on('click', function() {
		console.log('click');
		$(this).parent().next().animate({opacity: 0}, 300);
		$(this).animate({opacity: 0}, 300);
		$(this).prev().animate({opacity: 1}, 300);
	});

	$('.dj-slides').slick({
         fade: true,
         // autoplay: true,
         arrows: true,
         dots: true
    });



    // footer accordion transition

    // function checkWidth() {
    // 	var windowSize = $(window).width();
    // 	if (windowSize < 769) {
    //        $('#weila').click(function() {
				// // $(this).toggleClass('special');
				// console.log($(this).next());
		  //   	$(this).next().toggle(800, 'swing');
		  //   	return false;
		  //   }).next().show();
    // 	}
    // }

    // checkWidth();

    // $(window).on('resize', checkWidth);
});