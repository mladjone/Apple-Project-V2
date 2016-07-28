$(document).ready(function(){

	/* --- Footer dropdown on mobile---*/

    $(".showOnClick").click(function(){
        $(this).parent().find(".hideOnMobile").slideToggle(270);
        $(this).parent().find(".spanic").css("transform","rotate(45deg)");
    });


    /* --- Hamburger Main menu  ----*/

	$(".hamburger").click(function() 
	{
		$(".modal").slideDown(700);
	});

	$(".closeModall").click(function(){
		$(".modal").slideUp(700);
	});


	/* ---- Image slider on Index.html ---- */

	$(function() {

	    //settings for slider
	    var width = 1100;
	    var animationSpeed = 450;
	    var pause = 4000;
	    var currentSlide = 1;

	    //cache DOM elements
	    var $slider = $('#slider');
	    var $slideContainer = $('.slides', $slider);
	    var $slides = $('.slide', $slider);

	    var interval;

	    function startSlider() {
	        interval = setInterval(function() {
	            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
	                if (++currentSlide === $slides.length) {
	                    currentSlide = 1;
	                    $slideContainer.css('margin-left', 0);
	                }
	            });
	        }, pause);
	    }
	    function pauseSlider() {
	        clearInterval(interval);
	    }

	    $slideContainer
	        .on('mouseenter', pauseSlider)
	        .on('mouseleave', startSlider);

	    startSlider();


	});


/* ---- Sticky navigation ------ */

// define variables
	var navOffset, scrollPos = 0;
	
	// add utility wrapper elements for positioning
	jQuery(".contentNavMusic").wrap('<section class="navigationMusic"></section>');
	jQuery(".contentNavMusic").wrapInner('<div class="nav-inner"></div>');
	jQuery(".nav-inner").wrapInner('<div class="nav-inner-most"></div>');
	
	// function to run on page load and window resize
	function stickyUtility() {
		
		// only update navOffset if it is not currently using fixed position
		if (!jQuery(".contentNavMusic").hasClass("fixed")) {
			navOffset = jQuery(".contentNavMusic").offset().top;
		}
		
		// apply matching height to nav wrapper div to avoid awkward content jumps
		jQuery(".navigationMusic").height(jQuery(".contentNavMusic").outerHeight());
		
	} // end stickyUtility function
	
	// run on page load
	stickyUtility();
	
	// run on window resize
	jQuery(window).resize(function() {
		stickyUtility();
	});
	
	// run on scroll event
	jQuery(window).scroll(function() {
		
		scrollPos = jQuery(window).scrollTop();
		
		if (scrollPos >= navOffset) {
			jQuery(".contentNavMusic").addClass("fixed");
		} else {
			jQuery(".contentNavMusic").removeClass("fixed");
		}
		
	});

/* --- + Arrow for Sticky Navigation ---- */

$(".arrowDownMobile").click(function() {

	/* --- Arrow Rotate on click ---*/
    if ( $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform","rotate(180deg)");
    } else {
        $(this).css("transform","" );
    }

    $(".modal2").slideToggle(700);

});




});