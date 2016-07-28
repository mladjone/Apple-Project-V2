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

        window.addEventListener('mousewheel', mouseWheelEvent);
        function mouseWheelEvent(e) {
	        if ( e.wheelDelta >= 120){
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
	        } else if(e.wheelDelta <= -120){
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
        	window.removeEventListener('mousewheel', mouseWheelEvent);
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbk9BIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnd29ya3MhPycpO1xyXG4kKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCl7XHRcclxuXHR2YXIgd2F0Y2hGaXJzdDEyMzRIZWlnaHQgPSAkKCcud2F0Y2hGaXJzdE9uZScpLmhlaWdodCgpO1xyXG5cdHZhciB3YXRjaEZpcnN0VHdvRGl2UG9zID0gJCgnLndhdGNoRmlyc3RUd28gZGl2JykucG9zaXRpb24oKS50b3A7XHJcblx0dmFyIHdhdGNoRmlyc3RUaHJlZURpdlBvcyA9ICQoJy53YXRjaEZpcnN0VGhyZWUgZGl2JykucG9zaXRpb24oKS50b3A7XHJcblx0dmFyIHdhdGNoRmlyc3RGb3VyRGl2UG9zID0gJCgnLndhdGNoRmlyc3RGb3VyIGRpdicpLnBvc2l0aW9uKCkudG9wO1xyXG5cdHZhciB3YXRjaEZpcnN0RGl2SGVpZ2h0ID0gJCgnLndhdGNoRmlyc3RPbmUgZGl2JykuaGVpZ2h0KCk7XHJcblx0dmFyIHdhdGNoRmlyc3RUd29QT1MgPSAkKCcud2F0Y2hGaXJzdFR3bycpLnBvc2l0aW9uKCkudG9wO1xyXG5cdHZhciB3YXRjaEZpcnN0VGhyZWVQT1MgPSAkKCcud2F0Y2hGaXJzdFRocmVlJykucG9zaXRpb24oKS50b3A7XHJcblx0dmFyIHdhdGNoRmlyc3RGb3VyUE9TID0gJCgnLndhdGNoRmlyc3RGb3VyJykucG9zaXRpb24oKS50b3A7XHJcblxyXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHRcclxuXHRcdGlmKCAkKHRoaXMpLnNjcm9sbFRvcCgpID4gMCAmJiAkKHRoaXMpLnNjcm9sbFRvcCgpIDwgd2F0Y2hGaXJzdERpdkhlaWdodCkge1xyXG5cdFx0XHQkKCcud2F0Y2hJbWFnZTEnKS5jc3Moe1widHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlM2QoMHB4LCBcIiArIFwiLVwiICsgJCh0aGlzKS5zY3JvbGxUb3AoKS80ICsgXCJweCwgMHB4KVwiICsgXCJyb3RhdGUoLVwiICsgJCh0aGlzKS5zY3JvbGxUb3AoKS8xODAgKyBcImRlZylcIn0pO1xyXG5cdFx0XHQkKCcud2F0Y2hJbWFnZTInKS5jc3Moe1widHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlM2QoMHB4LCBcIiArIFwiLVwiICsgJCh0aGlzKS5zY3JvbGxUb3AoKS8zICsgXCJweCwgMHB4KVwiICsgXCJyb3RhdGUoXCIgKyAkKHRoaXMpLnNjcm9sbFRvcCgpLzE4MCArIFwiZGVnKVwifSk7XHJcblx0ICAgIFx0JCgnLndhdGNoSW1hZ2UzJykuY3NzKHtcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZTNkKDBweCwgXCIgKyBcIi1cIiArICQodGhpcykuc2Nyb2xsVG9wKCkvMiArIFwicHgsIDBweClcIiArIFwicm90YXRlKFwiICsgJCh0aGlzKS5zY3JvbGxUb3AoKS8xMjAgKyBcImRlZylcIn0pO1xyXG5cdCAgXHR9XHJcblx0ICBcdGlmKCAkKHRoaXMpLnNjcm9sbFRvcCgpID4gd2F0Y2hGaXJzdFR3b1BPUyAmJiAkKHRoaXMpLnNjcm9sbFRvcCgpIDwgd2F0Y2hGaXJzdFR3b1BPUyArIHdhdGNoRmlyc3REaXZIZWlnaHQpIHtcclxuXHQgIFx0XHQkKCcud2F0Y2hJbWFnZTQnKS5jc3Moe1widHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlM2QoMHB4LCBcIiArIFwiLVwiICsgJCh0aGlzKS5zY3JvbGxUb3AoKS84ICsgXCJweCwgMHB4KVwiICsgXCJyb3RhdGUoLVwiICsgJCh0aGlzKS5zY3JvbGxUb3AoKS8xODAgKyBcImRlZylcIn0pO1xyXG5cdFx0XHQkKCcud2F0Y2hJbWFnZTUnKS5jc3Moe1widHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlM2QoMHB4LCBcIiArIFwiLVwiICsgJCh0aGlzKS5zY3JvbGxUb3AoKS82ICsgXCJweCwgMHB4KVwiICsgXCJyb3RhdGUoXCIgKyAkKHRoaXMpLnNjcm9sbFRvcCgpLzE4MCArIFwiZGVnKVwifSk7XHJcblx0ICAgIFx0JCgnLndhdGNoSW1hZ2U2JykuY3NzKHtcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZTNkKDBweCwgXCIgKyBcIi1cIiArICQodGhpcykuc2Nyb2xsVG9wKCkvNCArIFwicHgsIDBweClcIiArIFwicm90YXRlKFwiICsgJCh0aGlzKS5zY3JvbGxUb3AoKS8xMjAgKyBcImRlZylcIn0pO1xyXG5cdCAgXHR9XHJcblx0ICBcdGlmKCAkKHRoaXMpLnNjcm9sbFRvcCgpID4gd2F0Y2hGaXJzdFRocmVlUE9TICYmICQodGhpcykuc2Nyb2xsVG9wKCkgPCB3YXRjaEZpcnN0VGhyZWVQT1MgKyB3YXRjaEZpcnN0RGl2SGVpZ2h0KSB7XHJcblx0ICBcdFx0JCgnLndhdGNoSW1hZ2U3JykuY3NzKHtcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZTNkKDBweCwgXCIgKyBcIi1cIiArICQodGhpcykuc2Nyb2xsVG9wKCkvMTAgKyBcInB4LCAwcHgpXCIgKyBcInJvdGF0ZSgtXCIgKyAkKHRoaXMpLnNjcm9sbFRvcCgpLzE4MCArIFwiZGVnKVwifSk7XHJcblx0XHRcdCQoJy53YXRjaEltYWdlOCcpLmNzcyh7XCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGUzZCgwcHgsIFwiICsgXCItXCIgKyAkKHRoaXMpLnNjcm9sbFRvcCgpLzggKyBcInB4LCAwcHgpXCIgKyBcInJvdGF0ZShcIiArICQodGhpcykuc2Nyb2xsVG9wKCkvMTgwICsgXCJkZWcpXCJ9KTtcclxuXHQgICAgXHQkKCcud2F0Y2hJbWFnZTknKS5jc3Moe1widHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlM2QoMHB4LCBcIiArIFwiLVwiICsgJCh0aGlzKS5zY3JvbGxUb3AoKS81ICsgXCJweCwgMHB4KVwiICsgXCJyb3RhdGUoXCIgKyAkKHRoaXMpLnNjcm9sbFRvcCgpLzEyMCArIFwiZGVnKVwifSk7XHJcblx0ICBcdH1cclxuXHQgIFx0aWYoICQodGhpcykuc2Nyb2xsVG9wKCkgPiB3YXRjaEZpcnN0Rm91clBPUyAmJiAkKHRoaXMpLnNjcm9sbFRvcCgpIDwgd2F0Y2hGaXJzdEZvdXJQT1MgKyB3YXRjaEZpcnN0MTIzNEhlaWdodCkge1xyXG5cdCAgXHRcdCQoJy53YXRjaEltYWdlMTAnKS5jc3Moe1widHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlM2QoMHB4LCBcIiArIFwiLVwiICsgJCh0aGlzKS5zY3JvbGxUb3AoKS8xNiArIFwicHgsIDBweClcIiArIFwicm90YXRlKC1cIiArICQodGhpcykuc2Nyb2xsVG9wKCkvMTgwICsgXCJkZWcpXCJ9KTtcclxuXHRcdFx0JCgnLndhdGNoSW1hZ2UxMScpLmNzcyh7XCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGUzZCgwcHgsIFwiICsgXCItXCIgKyAkKHRoaXMpLnNjcm9sbFRvcCgpLzEyICsgXCJweCwgMHB4KVwiICsgXCJyb3RhdGUoXCIgKyAkKHRoaXMpLnNjcm9sbFRvcCgpLzE4MCArIFwiZGVnKVwifSk7XHJcblx0ICAgIFx0JCgnLndhdGNoSW1hZ2UxMicpLmNzcyh7XCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGUzZCgwcHgsIFwiICsgXCItXCIgKyAkKHRoaXMpLnNjcm9sbFRvcCgpLzggKyBcInB4LCAwcHgpXCIgKyBcInJvdGF0ZShcIiArICQodGhpcykuc2Nyb2xsVG9wKCkvMTIwICsgXCJkZWcpXCJ9KTtcclxuXHQgIFx0XHQkKCcud2F0Y2hJbWFnZTEzJykuY3NzKHtcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZTNkKDBweCwgXCIgKyBcIi1cIiArICQodGhpcykuc2Nyb2xsVG9wKCkvOCArIFwicHgsIDBweClcIiArIFwicm90YXRlKFwiICsgJCh0aGlzKS5zY3JvbGxUb3AoKS8xODAgKyBcImRlZylcIn0pO1xyXG5cdCAgICBcdCQoJy53YXRjaEltYWdlMTQnKS5jc3Moe1widHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlM2QoMHB4LCBcIiArIFwiLVwiICsgJCh0aGlzKS5zY3JvbGxUb3AoKS84ICsgXCJweCwgMHB4KVwiICsgXCJyb3RhdGUoXCIgKyAkKHRoaXMpLnNjcm9sbFRvcCgpLzEyMCArIFwiZGVnKVwifSk7XHJcblx0ICBcdH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBtb3VzZVdoZWVsRXZlbnQpO1xyXG4gICAgICAgIGZ1bmN0aW9uIG1vdXNlV2hlZWxFdmVudChlKSB7XHJcblx0ICAgICAgICBpZiAoIGUud2hlZWxEZWx0YSA+PSAxMjApe1xyXG5cdCAgICAgICAgICAgIGlmKCAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IHdhdGNoRmlyc3REaXZIZWlnaHQpICYmICgkKHRoaXMpLnNjcm9sbFRvcCgpIDwgd2F0Y2hGaXJzdFR3b1BPUykgKSB7XHJcblx0ICAgICAgICAgICAgXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdCAgICAgICAgICAgIFx0XHQkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDQwMCk7XHJcblx0ICAgICAgICAgICAgXHRcdCQoJy53YXRjaEZpcnN0T25lIGRpdicpLnN0b3AoKS5mYWRlVG8oIDQwMCAsIDEpO1xyXG5cdCAgICAgICAgICAgIFx0XHQkKCcud2F0Y2hGaXJzdFR3byBkaXYnKS5zdG9wKCkuZmFkZVRvKCAyMDAgLCAwKTtcclxuXHQgICAgICAgICAgICBcdFx0JCgnLndhdGNoRmlyc3RPbmUnKS5jc3Moe1wiYmFja2dyb3VuZC1pbWFnZVwiOiBcImxpbmVhci1ncmFkaWVudCgjZmZmZmZmLCAjZDlkZWUwKVwifSk7XHJcblx0ICAgICAgICAgICAgXHRcdCQoJy53YXRjaEZpcnN0VHdvJykuY3NzKHtcImJhY2tncm91bmQtaW1hZ2VcIjogXCJsaW5lYXItZ3JhZGllbnQoI2Q5ZGVlMCwgI2ZmZmZmZilcIn0pO1xyXG5cdCAgICAgICAgICAgIFx0fSwzMDApO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIFx0ZWxzZSBpZiggKCQodGhpcykuc2Nyb2xsVG9wKCkgPiB3YXRjaEZpcnN0VHdvRGl2UG9zK3dhdGNoRmlyc3REaXZIZWlnaHQpICYmICgkKHRoaXMpLnNjcm9sbFRvcCgpIDwgd2F0Y2hGaXJzdFRocmVlUE9TKSApIHtcclxuXHQgICAgICAgICAgICBcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0ICAgICAgICAgICAgXHRcdCQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB3YXRjaEZpcnN0VHdvUE9TfSwgNDAwKTtcclxuXHQgICAgICAgICAgICBcdFx0JCgnLndhdGNoRmlyc3RUd28gZGl2Jykuc3RvcCgpLmZhZGVUbyggNDAwICwgMSk7XHJcblx0ICAgICAgICAgICAgXHRcdCQoJy53YXRjaEZpcnN0VGhyZWUgZGl2Jykuc3RvcCgpLmZhZGVUbyggMjAwICwgMCk7XHJcblx0ICAgICAgICAgICAgXHRcdCQoJy53YXRjaEZpcnN0VHdvJykuY3NzKHtcImJhY2tncm91bmQtaW1hZ2VcIjogXCJsaW5lYXItZ3JhZGllbnQoI2Y3ZWRlOSwgI2ZhZGRkNilcIn0pO1xyXG5cdCAgICAgICAgICAgIFx0XHQkKCcud2F0Y2hGaXJzdFRocmVlJykuY3NzKHtcImJhY2tncm91bmQtaW1hZ2VcIjogXCJsaW5lYXItZ3JhZGllbnQoI2ZhZGRkNiwgI2ZmZmZmZilcIn0pO1xyXG5cdCAgICAgICAgICAgIFx0fSwzMDApO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIFx0ZWxzZSBpZiggKCQodGhpcykuc2Nyb2xsVG9wKCkgPiB3YXRjaEZpcnN0VGhyZWVEaXZQb3Mrd2F0Y2hGaXJzdERpdkhlaWdodCkgJiYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPCB3YXRjaEZpcnN0Rm91clBPUykgKSB7XHJcblx0ICAgICAgICAgICAgXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdCAgICAgICAgICAgIFx0XHQkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDogd2F0Y2hGaXJzdFRocmVlUE9TfSwgNDAwKTtcclxuXHQgICAgICAgICAgICBcdFx0JCgnLndhdGNoRmlyc3RUaHJlZSBkaXYnKS5zdG9wKCkuZmFkZVRvKCA0MDAgLCAxKTtcclxuXHQgICAgICAgICAgICBcdFx0JCgnLndhdGNoRmlyc3RGb3VyIGRpdicpLnN0b3AoKS5mYWRlVG8oIDIwMCAsIDApO1xyXG5cdCAgICAgICAgICAgIFx0XHQkKCcud2F0Y2hGaXJzdFRocmVlJykuY3NzKHtcImJhY2tncm91bmQtaW1hZ2VcIjogXCJsaW5lYXItZ3JhZGllbnQoI2VkZjRmNywgI2RhZjBmOClcIn0pO1xyXG5cdCAgICAgICAgICAgIFx0XHQkKCcud2F0Y2hGaXJzdEZvdXInKS5jc3Moe1wiYmFja2dyb3VuZC1pbWFnZVwiOiBcImxpbmVhci1ncmFkaWVudCgjZGFmMGY4LCAjZmZmZmZmKVwifSk7XHJcblx0ICAgICAgICAgICAgXHR9LDMwMCk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfSBlbHNlIGlmKGUud2hlZWxEZWx0YSA8PSAtMTIwKXtcclxuXHQgICAgICAgICAgICBpZiggKCQodGhpcykuc2Nyb2xsVG9wKCkgPiB3YXRjaEZpcnN0RGl2SGVpZ2h0KSAmJiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA8IHdhdGNoRmlyc3RUd29QT1MpICkge1xyXG5cdCAgICAgICAgICAgIFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHQgICAgICAgICAgICBcdFx0JCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6IHdhdGNoRmlyc3RUd29QT1N9LCA0MDApO1xyXG5cdCAgICAgICAgICAgIFx0XHQkKCcud2F0Y2hGaXJzdE9uZSBkaXYnKS5zdG9wKCkuZmFkZVRvKCAyMDAgLCAwKTtcclxuXHQgICAgICAgICAgICBcdFx0JCgnLndhdGNoRmlyc3RUd28gZGl2Jykuc3RvcCgpLmZhZGVUbyggNDAwICwgMSk7XHJcblx0ICAgICAgICAgICAgXHRcdCQoJy53YXRjaEZpcnN0VHdvJykuY3NzKHtcImJhY2tncm91bmQtaW1hZ2VcIjogXCJsaW5lYXItZ3JhZGllbnQoI2Y3ZWRlOSwgI2ZhZGRkNilcIn0pO1xyXG5cdCAgICAgICAgICAgIFx0XHQkKCcud2F0Y2hGaXJzdE9uZScpLmNzcyh7XCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwibGluZWFyLWdyYWRpZW50KCNmZmZmZmYsICNmN2VkZTkpXCJ9KTtcclxuXHQgICAgICAgICAgICBcdH0sMzAwKTtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICBcdGVsc2UgaWYoICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gd2F0Y2hGaXJzdFR3b0RpdlBvcyt3YXRjaEZpcnN0RGl2SGVpZ2h0KSAmJiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA8IHdhdGNoRmlyc3RUaHJlZVBPUykgKSB7XHJcblx0ICAgICAgICAgICAgXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdCAgICAgICAgICAgIFx0XHQkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDogd2F0Y2hGaXJzdFRocmVlUE9TfSwgNDAwKTtcclxuXHQgICAgICAgICAgICBcdFx0JCgnLndhdGNoRmlyc3RUd28gZGl2Jykuc3RvcCgpLmZhZGVUbyggMjAwICwgMCk7XHJcblx0ICAgICAgICAgICAgXHRcdCQoJy53YXRjaEZpcnN0VGhyZWUgZGl2Jykuc3RvcCgpLmZhZGVUbyggNDAwICwgMSk7XHJcblx0ICAgICAgICAgICAgXHRcdCQoJy53YXRjaEZpcnN0VGhyZWUnKS5jc3Moe1wiYmFja2dyb3VuZC1pbWFnZVwiOiBcImxpbmVhci1ncmFkaWVudCgjZWRmNGY3LCAjZGFmMGY4KVwifSk7XHJcblx0ICAgICAgICAgICAgXHRcdCQoJy53YXRjaEZpcnN0VHdvJykuY3NzKHtcImJhY2tncm91bmQtaW1hZ2VcIjogXCJsaW5lYXItZ3JhZGllbnQoI2ZmZmZmZiwgI2VkZjRmNylcIn0pO1xyXG5cdCAgICAgICAgICAgIFx0fSwzMDApO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIFx0ZWxzZSBpZiggKCQodGhpcykuc2Nyb2xsVG9wKCkgPiB3YXRjaEZpcnN0VGhyZWVEaXZQb3Mrd2F0Y2hGaXJzdERpdkhlaWdodCkgJiYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPCB3YXRjaEZpcnN0Rm91clBPUykgKSB7XHJcblx0ICAgICAgICAgICAgXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdCAgICAgICAgICAgIFx0XHQkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDogd2F0Y2hGaXJzdEZvdXJQT1N9LCA0MDApO1xyXG5cdCAgICAgICAgICAgIFx0XHQkKCcud2F0Y2hGaXJzdFRocmVlIGRpdicpLnN0b3AoKS5mYWRlVG8oIDIwMCAsIDApO1xyXG5cdCAgICAgICAgICAgIFx0XHQkKCcud2F0Y2hGaXJzdEZvdXIgZGl2Jykuc3RvcCgpLmZhZGVUbyggNDAwICwgMSk7XHJcblx0ICAgICAgICAgICAgXHRcdCQoJy53YXRjaEZpcnN0Rm91cicpLmNzcyh7XCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwibGluZWFyLWdyYWRpZW50KCNmN2YwZjksICNmZmY2ZmUpXCJ9KTtcclxuXHQgICAgICAgICAgICBcdFx0JCgnLndhdGNoRmlyc3RUaHJlZScpLmNzcyh7XCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwibGluZWFyLWdyYWRpZW50KCNmZmZmZmYsICNmN2YwZjkpXCJ9KTtcclxuXHQgICAgICAgICAgICBcdH0sMzAwKTtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcbiAgICAgICAgXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIG1vdXNlV2hlZWxFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuXHQvKiAtLS0gRm9vdGVyIGRyb3Bkb3duIG9uIG1vYmlsZS0tLSovXHJcblxyXG4gICAgJChcIi5zaG93T25DbGlja1wiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuZmluZChcIi5oaWRlT25Nb2JpbGVcIikuc2xpZGVUb2dnbGUoMjcwKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCIuc3BhbmljXCIpLmNzcyhcInRyYW5zZm9ybVwiLFwicm90YXRlKDQ1ZGVnKVwiKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvKiAtLS0gSGFtYnVyZ2VyIE1haW4gbWVudSAgLS0tLSovXHJcblxyXG5cdCQoXCIuaGFtYnVyZ2VyXCIpLmNsaWNrKGZ1bmN0aW9uKCkgXHJcblx0e1xyXG5cdFx0JChcIi5tb2RhbFwiKS5zbGlkZURvd24oNzAwKTtcclxuXHR9KTtcclxuXHJcblx0JChcIi5jbG9zZU1vZGFsbFwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JChcIi5tb2RhbFwiKS5zbGlkZVVwKDcwMCk7XHJcblx0fSk7XHJcblxyXG5cclxuXHQvKiAtLS0tIEltYWdlIHNsaWRlciBvbiBJbmRleC5odG1sIC0tLS0gKi9cclxuXHJcblx0JChmdW5jdGlvbigpIHtcclxuXHJcblx0ICAgIC8vc2V0dGluZ3MgZm9yIHNsaWRlclxyXG5cdCAgICB2YXIgd2lkdGggPSAxMTAwO1xyXG5cdCAgICB2YXIgYW5pbWF0aW9uU3BlZWQgPSA0NTA7XHJcblx0ICAgIHZhciBwYXVzZSA9IDQwMDA7XHJcblx0ICAgIHZhciBjdXJyZW50U2xpZGUgPSAxO1xyXG5cclxuXHQgICAgLy9jYWNoZSBET00gZWxlbWVudHNcclxuXHQgICAgdmFyICRzbGlkZXIgPSAkKCcjc2xpZGVyJyk7XHJcblx0ICAgIHZhciAkc2xpZGVDb250YWluZXIgPSAkKCcuc2xpZGVzJywgJHNsaWRlcik7XHJcblx0ICAgIHZhciAkc2xpZGVzID0gJCgnLnNsaWRlJywgJHNsaWRlcik7XHJcblxyXG5cdCAgICB2YXIgaW50ZXJ2YWw7XHJcblxyXG5cdCAgICBmdW5jdGlvbiBzdGFydFNsaWRlcigpIHtcclxuXHQgICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0ICAgICAgICAgICAgJHNsaWRlQ29udGFpbmVyLmFuaW1hdGUoeydtYXJnaW4tbGVmdCc6ICctPScrd2lkdGh9LCBhbmltYXRpb25TcGVlZCwgZnVuY3Rpb24oKSB7XHJcblx0ICAgICAgICAgICAgICAgIGlmICgrK2N1cnJlbnRTbGlkZSA9PT0gJHNsaWRlcy5sZW5ndGgpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDE7XHJcblx0ICAgICAgICAgICAgICAgICAgICAkc2xpZGVDb250YWluZXIuY3NzKCdtYXJnaW4tbGVmdCcsIDApO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgfSk7XHJcblx0ICAgICAgICB9LCBwYXVzZSk7XHJcblx0ICAgIH1cclxuXHQgICAgZnVuY3Rpb24gcGF1c2VTbGlkZXIoKSB7XHJcblx0ICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgJHNsaWRlQ29udGFpbmVyXHJcblx0ICAgICAgICAub24oJ21vdXNlZW50ZXInLCBwYXVzZVNsaWRlcilcclxuXHQgICAgICAgIC5vbignbW91c2VsZWF2ZScsIHN0YXJ0U2xpZGVyKTtcclxuXHJcblx0ICAgIHN0YXJ0U2xpZGVyKCk7XHJcblxyXG5cclxuXHR9KTtcclxuXHJcblxyXG4vKiAtLS0tIFN0aWNreSBuYXZpZ2F0aW9uIC0tLS0tLSAqL1xyXG5cclxuLy8gZGVmaW5lIHZhcmlhYmxlc1xyXG5cdHZhciBuYXZPZmZzZXQsIHNjcm9sbFBvcyA9IDA7XHJcblx0XHJcblx0Ly8gYWRkIHV0aWxpdHkgd3JhcHBlciBlbGVtZW50cyBmb3IgcG9zaXRpb25pbmdcclxuXHRqUXVlcnkoXCIuY29udGVudE5hdk11c2ljXCIpLndyYXAoJzxzZWN0aW9uIGNsYXNzPVwibmF2aWdhdGlvbk11c2ljXCI+PC9zZWN0aW9uPicpO1xyXG5cdGpRdWVyeShcIi5jb250ZW50TmF2TXVzaWNcIikud3JhcElubmVyKCc8ZGl2IGNsYXNzPVwibmF2LWlubmVyXCI+PC9kaXY+Jyk7XHJcblx0alF1ZXJ5KFwiLm5hdi1pbm5lclwiKS53cmFwSW5uZXIoJzxkaXYgY2xhc3M9XCJuYXYtaW5uZXItbW9zdFwiPjwvZGl2PicpO1xyXG5cdFxyXG5cdC8vIGZ1bmN0aW9uIHRvIHJ1biBvbiBwYWdlIGxvYWQgYW5kIHdpbmRvdyByZXNpemVcclxuXHRmdW5jdGlvbiBzdGlja3lVdGlsaXR5KCkge1xyXG5cdFx0XHJcblx0XHQvLyBvbmx5IHVwZGF0ZSBuYXZPZmZzZXQgaWYgaXQgaXMgbm90IGN1cnJlbnRseSB1c2luZyBmaXhlZCBwb3NpdGlvblxyXG5cdFx0aWYgKCFqUXVlcnkoXCIuY29udGVudE5hdk11c2ljXCIpLmhhc0NsYXNzKFwiZml4ZWRcIikpIHtcclxuXHRcdFx0bmF2T2Zmc2V0ID0galF1ZXJ5KFwiLmNvbnRlbnROYXZNdXNpY1wiKS5vZmZzZXQoKS50b3A7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vIGFwcGx5IG1hdGNoaW5nIGhlaWdodCB0byBuYXYgd3JhcHBlciBkaXYgdG8gYXZvaWQgYXdrd2FyZCBjb250ZW50IGp1bXBzXHJcblx0XHRqUXVlcnkoXCIubmF2aWdhdGlvbk11c2ljXCIpLmhlaWdodChqUXVlcnkoXCIuY29udGVudE5hdk11c2ljXCIpLm91dGVySGVpZ2h0KCkpO1xyXG5cdFx0XHJcblx0fSAvLyBlbmQgc3RpY2t5VXRpbGl0eSBmdW5jdGlvblxyXG5cdFxyXG5cdC8vIHJ1biBvbiBwYWdlIGxvYWRcclxuXHRzdGlja3lVdGlsaXR5KCk7XHJcblx0XHJcblx0Ly8gcnVuIG9uIHdpbmRvdyByZXNpemVcclxuXHRqUXVlcnkod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcblx0XHRzdGlja3lVdGlsaXR5KCk7XHJcblx0fSk7XHJcblx0XHJcblx0Ly8gcnVuIG9uIHNjcm9sbCBldmVudFxyXG5cdGpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0c2Nyb2xsUG9zID0galF1ZXJ5KHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblx0XHRcclxuXHRcdGlmIChzY3JvbGxQb3MgPj0gbmF2T2Zmc2V0KSB7XHJcblx0XHRcdGpRdWVyeShcIi5jb250ZW50TmF2TXVzaWNcIikuYWRkQ2xhc3MoXCJmaXhlZFwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGpRdWVyeShcIi5jb250ZW50TmF2TXVzaWNcIikucmVtb3ZlQ2xhc3MoXCJmaXhlZFwiKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0pO1xyXG5cclxuLyogLS0tICsgQXJyb3cgZm9yIFN0aWNreSBOYXZpZ2F0aW9uIC0tLS0gKi9cclxuXHJcbiQoXCIuYXJyb3dEb3duTW9iaWxlXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cclxuXHQvKiAtLS0gQXJyb3cgUm90YXRlIG9uIGNsaWNrIC0tLSovXHJcbiAgICBpZiAoICQoIHRoaXMgKS5jc3MoIFwidHJhbnNmb3JtXCIgKSA9PSAnbm9uZScgKXtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcInRyYW5zZm9ybVwiLFwicm90YXRlKDE4MGRlZylcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQodGhpcykuY3NzKFwidHJhbnNmb3JtXCIsXCJcIiApO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCIubW9kYWwyXCIpLnNsaWRlVG9nZ2xlKDcwMCk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG4iLCIiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
