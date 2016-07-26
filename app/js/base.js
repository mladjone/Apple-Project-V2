$( document ).ready(function(){	
	var watchFirst1234Height = $('.watchFirstOne').height();
	var watchFirstDivHeight = $('.watchFirstOne div').height()*1.5;
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
	  	if( $(this).scrollTop() > watchFirstFourPOS && $(this).scrollTop() < watchFirstFourPOS + watchFirst1234Height) {
	  		$('.watchFirstFour div').css({"position":"relative"});
	  	}else{
	        $('.watchFirstFour div').css({"position":"fixed"});
	  	}
        
        window.addEventListener('mousewheel', mouseWheelEvent);
        function mouseWheelEvent(e) {
	        if ( e.wheelDelta >= 120){
	            if( ($(this).scrollTop() > watchFirstDivHeight) && ($(this).scrollTop() < watchFirst1234Height) ) {
	            	setTimeout(function() {
	            		$('html, body').stop().animate({scrollTop: 0}, 400);
	            		$('.watchFirstOne div').stop().fadeTo( 400 , 1);
	            		$('.watchFirstTwo div').stop().fadeTo( 200 , 0);
	            		$('.watchFirstOne').css({"background-image": "linear-gradient(#ffffff, #d9dee0)"});
	            		$('.watchFirstTwo').css({"background-image": "linear-gradient(#d9dee0, #ffffff)"});
	            	},300);
	            }
	            if( ($(this).scrollTop() > watchFirst1234Height+watchFirstDivHeight) && ($(this).scrollTop() < watchFirst1234Height*2) ) {
	            	setTimeout(function() {
	            		$('html, body').stop().animate({scrollTop: watchFirstTwoPOS}, 400);
	            		$('.watchFirstTwo div').stop().fadeTo( 400 , 1);
	            		$('.watchFirstThree div').stop().fadeTo( 200 , 0);
	            		$('.watchFirstTwo').css({"background-image": "linear-gradient(#f7ede9, #faddd6)"});
	            		$('.watchFirstThree').css({"background-image": "linear-gradient(#faddd6, #ffffff)"});
	            	},300);
	            }
	            if( ($(this).scrollTop() > watchFirst1234Height*2+watchFirstDivHeight) && ($(this).scrollTop() < watchFirst1234Height*3) ) {
	            	setTimeout(function() {
	            		$('html, body').stop().animate({scrollTop: watchFirstThreePOS}, 400);
	            		$('.watchFirstThree div').stop().fadeTo( 400 , 1);
	            		$('.watchFirstFour div').stop().fadeTo( 200 , 0);
	            		$('.watchFirstThree').css({"background-image": "linear-gradient(#edf4f7, #daf0f8)"});
	            		$('.watchFirstFour').css({"background-image": "linear-gradient(#daf0f8, #ffffff)"});
	            	},300);
	            }
	        } else if(e.wheelDelta <= -120){
	            if( ($(this).scrollTop() > watchFirstDivHeight) && ($(this).scrollTop() < watchFirst1234Height) ) {
	            	setTimeout(function() {
	            		$('html, body').stop().animate({scrollTop: watchFirstTwoPOS}, 400);
	            		$('.watchFirstOne div').stop().fadeTo( 200 , 0);
	            		$('.watchFirstTwo div').stop().fadeTo( 400 , 1);
	            		$('.watchFirstTwo').css({"background-image": "linear-gradient(#f7ede9, #faddd6)"});
	            		$('.watchFirstOne').css({"background-image": "linear-gradient(#ffffff, #f7ede9)"});
	            	},300);
	            }
	            if( ($(this).scrollTop() > watchFirst1234Height+watchFirstDivHeight) && ($(this).scrollTop() < watchFirst1234Height*2) ) {
	            	setTimeout(function() {
	            		$('html, body').stop().animate({scrollTop: watchFirstThreePOS}, 400);
	            		$('.watchFirstTwo div').stop().fadeTo( 200 , 0);
	            		$('.watchFirstThree div').stop().fadeTo( 400 , 1);
	            		$('.watchFirstThree').css({"background-image": "linear-gradient(#edf4f7, #daf0f8)"});
	            		$('.watchFirstTwo').css({"background-image": "linear-gradient(#ffffff, #edf4f7)"});
	            	},300);
	            }
	            if( ($(this).scrollTop() > watchFirst1234Height*2+watchFirstDivHeight) && ($(this).scrollTop() < watchFirst1234Height*3) ) {
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
