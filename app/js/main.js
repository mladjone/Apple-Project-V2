console.log('works!?');
$( document ).ready(function(){	
	var watchFirst1234Height = $('.watchFirstOne').height();
	var watchFirstTwoDivPos = $('.watchFirstTwo div').position().top;
	var watchFirstThreeDivPos = $('.watchFirstThree div').position().top;
	var watchFirstFourDivPos = $('.watchFirstFour div').position().top;
	var watchFirstDivHeight = $('.watchFirstOne div').height();
	var watchFirstTwoPOS = $('.watchFirstTwo').position().top;
	var watchFirstThreePOS = $('.watchFirstThree').position().top;
	var watchFirstFourPOS = $('.watchFirstFour').position().top;

	$(window).scroll(function() {	
		if( $(this).scrollTop() > 0 && $(this).scrollTop() < watchFirstDivHeight) {
			$('.watchImage1').css({"transform": "translate3d(0px, " + "-" + $(this).scrollTop()/4 + "px, 0px)" + "rotate(-" + $(this).scrollTop()/180 + "deg)"});
			$('.watchImage2').css({"transform": "translate3d(0px, " + "-" + $(this).scrollTop()/3 + "px, 0px)" + "rotate(" + $(this).scrollTop()/180 + "deg)"});
	    	$('.watchImage3').css({"transform": "translate3d(0px, " + "-" + $(this).scrollTop()/2 + "px, 0px)" + "rotate(" + $(this).scrollTop()/120 + "deg)"});
	  	}
	  	if( $(this).scrollTop() > watchFirstTwoPOS && $(this).scrollTop() < watchFirstTwoPOS + watchFirstDivHeight) {
	  		$('.watchImage4').css({"transform": "translate3d(0px, " + "-" + $(this).scrollTop()/8 + "px, 0px)" + "rotate(-" + $(this).scrollTop()/180 + "deg)"});
			$('.watchImage5').css({"transform": "translate3d(0px, " + "-" + $(this).scrollTop()/6 + "px, 0px)" + "rotate(" + $(this).scrollTop()/180 + "deg)"});
	    	$('.watchImage6').css({"transform": "translate3d(0px, " + "-" + $(this).scrollTop()/4 + "px, 0px)" + "rotate(" + $(this).scrollTop()/120 + "deg)"});
	  	}
	  	if( $(this).scrollTop() > watchFirstThreePOS && $(this).scrollTop() < watchFirstThreePOS + watchFirstDivHeight) {
	  		$('.watchImage7').css({"transform": "translate3d(0px, " + "-" + $(this).scrollTop()/10 + "px, 0px)" + "rotate(-" + $(this).scrollTop()/180 + "deg)"});
			$('.watchImage8').css({"transform": "translate3d(0px, " + "-" + $(this).scrollTop()/8 + "px, 0px)" + "rotate(" + $(this).scrollTop()/180 + "deg)"});
	    	$('.watchImage9').css({"transform": "translate3d(0px, " + "-" + $(this).scrollTop()/5 + "px, 0px)" + "rotate(" + $(this).scrollTop()/120 + "deg)"});
	  	}
	  	if( $(this).scrollTop() > watchFirstFourPOS && $(this).scrollTop() < watchFirstFourPOS + watchFirst1234Height) {
	  		$('.watchImage10').css({"transform": "translate3d(0px, " + "-" + $(this).scrollTop()/16 + "px, 0px)" + "rotate(-" + $(this).scrollTop()/180 + "deg)"});
			$('.watchImage11').css({"transform": "translate3d(0px, " + "-" + $(this).scrollTop()/12 + "px, 0px)" + "rotate(" + $(this).scrollTop()/180 + "deg)"});
	    	$('.watchImage12').css({"transform": "translate3d(0px, " + "-" + $(this).scrollTop()/8 + "px, 0px)" + "rotate(" + $(this).scrollTop()/120 + "deg)"});
	  		$('.watchImage13').css({"transform": "translate3d(0px, " + "-" + $(this).scrollTop()/8 + "px, 0px)" + "rotate(" + $(this).scrollTop()/180 + "deg)"});
	    	$('.watchImage14').css({"transform": "translate3d(0px, " + "-" + $(this).scrollTop()/8 + "px, 0px)" + "rotate(" + $(this).scrollTop()/120 + "deg)"});
	  	}


        if (window.addEventListener)
      	{
          // IE9, Chrome, Safari, Opera
        	window.addEventListener("mousewheel", mouseWheelEvent);
          // Firefox
        	window.addEventListener("DOMMouseScroll", mouseWheelEvent);
      	}
      	// IE 6/7/8
      	else
      	{
        	window.attachEvent("onmousewheel", mouseWheelEvent);
      	}
        function mouseWheelEvent(e) {
        	if (e.type == 'mousewheel') {
          		var tocak = e.wheelDelta;
        	}
        	else if (e.type == 'DOMMouseScroll') {
        		var tocak = -e.detail*40;
        	}
	        if ( tocak >= 120){
	            if( ($(this).scrollTop() > watchFirstDivHeight) && ($(this).scrollTop() < watchFirstTwoPOS) ) {
	            	setTimeout(function() {
	            		$('html, body').stop().animate({scrollTop: 0}, 400);
	            		$('.watchFirstOne div').stop().fadeTo( 400 , 1);
	            		$('.watchFirstTwo div').stop().fadeTo( 200 , 0);
	            		$('.watchFirstOne').css({"background-image": "linear-gradient(#ffffff, #d9dee0)"});
	            		$('.watchFirstTwo').css({"background-image": "linear-gradient(#d9dee0, #ffffff)"});
	            	},300);
	            }
	        	else if( ($(this).scrollTop() > watchFirstTwoDivPos+watchFirstDivHeight) && ($(this).scrollTop() < watchFirstThreePOS) ) {
	            	setTimeout(function() {
	            		$('html, body').stop().animate({scrollTop: watchFirstTwoPOS}, 400);
	            		$('.watchFirstTwo div').stop().fadeTo( 400 , 1);
	            		$('.watchFirstThree div').stop().fadeTo( 200 , 0);
	            		$('.watchFirstTwo').css({"background-image": "linear-gradient(#f7ede9, #faddd6)"});
	            		$('.watchFirstThree').css({"background-image": "linear-gradient(#faddd6, #ffffff)"});
	            	},300);
	            }
	        	else if( ($(this).scrollTop() > watchFirstThreeDivPos+watchFirstDivHeight) && ($(this).scrollTop() < watchFirstFourPOS) ) {
	            	setTimeout(function() {
	            		$('html, body').stop().animate({scrollTop: watchFirstThreePOS}, 400);
	            		$('.watchFirstThree div').stop().fadeTo( 400 , 1);
	            		$('.watchFirstFour div').stop().fadeTo( 200 , 0);
	            		$('.watchFirstThree').css({"background-image": "linear-gradient(#edf4f7, #daf0f8)"});
	            		$('.watchFirstFour').css({"background-image": "linear-gradient(#daf0f8, #ffffff)"});
	            	},300);
	            }
	        } else if(tocak <= -120){
	            if( ($(this).scrollTop() > watchFirstDivHeight) && ($(this).scrollTop() < watchFirstTwoPOS) ) {
	            	setTimeout(function() {
	            		$('html, body').stop().animate({scrollTop: watchFirstTwoPOS}, 400);
	            		$('.watchFirstOne div').stop().fadeTo( 200 , 0);
	            		$('.watchFirstTwo div').stop().fadeTo( 400 , 1);
	            		$('.watchFirstTwo').css({"background-image": "linear-gradient(#f7ede9, #faddd6)"});
	            		$('.watchFirstOne').css({"background-image": "linear-gradient(#ffffff, #f7ede9)"});
	            	},300);
	            }
	        	else if( ($(this).scrollTop() > watchFirstTwoDivPos+watchFirstDivHeight) && ($(this).scrollTop() < watchFirstThreePOS) ) {
	            	setTimeout(function() {
	            		$('html, body').stop().animate({scrollTop: watchFirstThreePOS}, 400);
	            		$('.watchFirstTwo div').stop().fadeTo( 200 , 0);
	            		$('.watchFirstThree div').stop().fadeTo( 400 , 1);
	            		$('.watchFirstThree').css({"background-image": "linear-gradient(#edf4f7, #daf0f8)"});
	            		$('.watchFirstTwo').css({"background-image": "linear-gradient(#ffffff, #edf4f7)"});
	            	},300);
	            }
	        	else if( ($(this).scrollTop() > watchFirstThreeDivPos+watchFirstDivHeight) && ($(this).scrollTop() < watchFirstFourPOS) ) {
	            	setTimeout(function() {
	            		$('html, body').stop().animate({scrollTop: watchFirstFourPOS}, 400);
	            		$('.watchFirstThree div').stop().fadeTo( 200 , 0);
	            		$('.watchFirstFour div').stop().fadeTo( 400 , 1);
	            		$('.watchFirstFour').css({"background-image": "linear-gradient(#f7f0f9, #fff6fe)"});
	            		$('.watchFirstThree').css({"background-image": "linear-gradient(#ffffff, #f7f0f9)"});
	            	},300);
	            }
	        }
	        if (window.addEventListener)
        	{
            // IE9, Chrome, Safari, Opera
            	window.removeEventListener("mousewheel", mouseWheelEvent);
            // Firefox
            	window.removeEventListener("DOMMouseScroll", mouseWheelEvent);
        	}
        	// IE 6/7/8
        	else
        	{
            window.detachEvent("onmousewheel", mouseWheelEvent);
        	}
        }
    });
});



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
