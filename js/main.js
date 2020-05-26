$(document).ready(function($) {

// dinamicly add class for background element
var width = $(window).width();

$(window).resize(function(event) {
	$('.serviceItem').removeClass('grayBack')
	width =$(this).width();
$('.serviceItem').each(function() {
	if(width > 768 && ($(this).index()%4 ==1 || $(this).index()%4 ==2)) {
		$(this).addClass('grayBack');
	}
	else if(width <= 768 && $(this).index()%2 ==0) {
		$(this).addClass('grayBack')
	}
});

});


$('.serviceItem').each(function() {
	if(width > 768 && ($(this).index()%4 ==1 || $(this).index()%4 ==2)) {
		$(this).addClass('grayBack');
	}
	else if(width <= 768 && $(this).index()%2 ==0) {
		$(this).addClass('grayBack')
	}
});
//end


	function registrPanelShowHide(){
		$('.registrForm').show();
		$('.loginform').hide();
		if($('.registrInfo').hasClass('loginShown') ){
			$('.registrForm').show();
			$('.loginform').hide();
			$('.registrInfo').removeClass('loginShown')
			return false;
		}
		else if(!$('.registrInfo').hasClass('loginShown') && $('.registrInfo').hasClass('slideRight')) {
			$('.registrInfo').removeClass('slideRight');
			
		}
		else {
			$('.registrInfo').addClass('slideRight');
			$('nav ul > ol').hide()
		}
	}

	// registration clicks
	$('body').delegate('.registrationButton' ,'click' , function() {
		registrPanelShowHide();
	});
	$('body').delegate('.regButton' ,'click' , function(e) {
		registrPanelShowHide();
	});
	 $('body').delegate('.registr' ,'click' , function(e){
		$(window).scrollTop(0);		
	});
	 $('body').delegate('.login' ,'click' , function(e){
		$(window).scrollTop(0);		
	});
	 $('body').delegate('.registrNotIndex' ,'click' , function(e){
	 	$('.registrInfo').addClass('fullHeight');
		$('.registrInfo').addClass('slideRight');
	});
	 //end


	 // login clicks
	 $('body').delegate('.logInLink' ,'click' , function() {
	 	
		if($('.registrInfo').hasClass('slideRight') && !$('.registrInfo').hasClass('loginShown')) {
			$('.registrInfo').addClass('loginShown');
			$('.registrForm').hide();
			$('.loginform').show();

		} else if($('.registrInfo').hasClass('slideRight') && $('.registrInfo').hasClass('loginShown')){
			$('.registrInfo').removeClass('slideRight');
			$('.registrInfo').removeClass('loginShown');
		}
		else if(!$('.registrInfo').hasClass('slideRight') && !$('.registrInfo').hasClass('loginShown')){
			$('.registrInfo').addClass('loginShown');
			$('.registrInfo').addClass('slideRight');
			$('.registrForm').hide();
			$('.loginform').show();
		}
	 });


// hide menu on click outside
$('body').delegate('main' ,'click' , function(e){
	if(!($('nav ul > ol').is(e.target)) && ($('nav ul > ol').has(e.target).length === 0))
	    {
	    	$('nav ul > li:last-of-type a .fa').removeClass('fa-times').addClass('fa-bars');
			$('nav ul > ol').parent().children('ol').hide()
	    }
});

// hide registration panel on click outside
$('body').delegate('.body' ,'click' , function(e){
	if(!($('.registrInfo').is(e.target)) && ($('.registrInfo').has(e.target).length === 0) )
	    {
	    	$('.registrInfo').removeClass('fullHeight');
	    	$('.registrInfo').removeClass('slideRight');
	    }
});


// responsive menu
	var ulLi = $('nav ul > li'),
      fa = $('nav ul > li:last-of-type a .fa');
  
   $('nav ul').append('<ol ></ol>');
  
   $('nav').each(function() {
     for (var i=0; i <= ulLi.length - 2; i++) {
       $('nav ul > ol').append("<li>"+ i +"</li>");
       $('nav ul > ol > li').eq(i).html(ulLi.eq(i).html());
     }
  });

  $('nav ul > li:last-of-type').on('click', function() {
    fa.toggleClass('fa-bars');
    fa.toggleClass('fa-times');
    $(this).parent().children('ol').slideToggle(500);
  });




  // make registration part full view height 
  $(window).scroll(function(){
    var aTop = $('header').height();
    if($(this).scrollTop()>=aTop){
        $('.registrInfo').addClass('fullHeight');
    }
    else {
    	$('.registrInfo').removeClass('fullHeight');
    }


    if($(window).scrollTop() + $(window).height() == $(document).height()) {
       $('.registrInfo').addClass('bottomHeight');
   }
   else {
   	$('.registrInfo').removeClass('bottomHeight');
   }
  });


// open and close contact form

  $('body').delegate('.closePopup', 'click', function() {
  	$('.popupContact').removeClass('shown');
  });

	$('.contactLink').on('click' , function() {
		$('.popupContact').addClass('shown');
	});


// like and heart icon demonstration on click

$('.heartIcon').on('click' , function() {
	$(this).addClass('shadowText');
	$(this).find('i').toggleClass('far');
	$(this).find('i').toggleClass('fas');
	setTimeout(function(){$('.heartIcon').removeClass('shadowText') },200);
});
$('.likeIcon').on('click' , function() {
	$(this).addClass('fontSizeText');
	$(this).find('i').toggleClass('far');
	$(this).find('i').toggleClass('fas');
	setTimeout(function(){$('.likeIcon').removeClass('fontSizeText') },200);
});


// show password on click eye

$('.passEye').on('click' , function() {
	var input = $(this).closest('.passwordAndEye').find('input');
	if($(this).hasClass('shownPas')){
		input.attr('type' , 'password');
		$(this).removeClass('shownPas');
		$(this).find('i').removeClass('fa-eye');
		$(this).find('i').addClass('fa-eye-slash');
	} else {
		$(this).addClass('shownPas');
		input.attr('type' , 'text');
		$(this).find('i').addClass('fa-eye');
		$(this).find('i').removeClass('fa-eye-slash');
	}
});





// more and less text //

var showChar = 230;
	var ellipsestext = "...";
	var moretext = "read more";
	var lesstext = "read less";
	$('.more').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);

			var html = c + '<span class="moreelipses">'+ellipsestext+'</span>&nbsp;<span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">'+moretext+'</a></span>';

			$(this).html(html);
		}

	});

	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});





	// change settings

	var nameValue = $('.userNameValue').text();
	var descriptValue = $('.descriptionValue').text();
	$('.changableInput').attr('value',nameValue );
	$('.changeDescript').text(descriptValue );


	$('body').delegate('.saveChanges', 'click', function() {
		var name = $('.changableInput').val();
		var desc = $('.changeDescript').val();
		$('.userNameValue').html(name);
		$('.descriptionValue').html(desc);
});


$('.changePass').on('click', function() {
	alert('Please check your email.')
})



$('.settingsIcon').on('click', function() {
	$('.userSettingsPart').toggle('show')
})



// team carousel slider

var owl = $('.owl-carousel');
owl.owlCarousel({
  	items:1,
    loop:true,
    margin:10,
    nav: true,
    autoplay:true,
    autoplayTimeout:2000,
    smartSpeed: 1000,
    autoplayHoverPause:true,

    responsive : {
    0 : {
        items : 1,
    },
    480 : {
        items : 3
    },
    768 : {
        items : 4,
    }
	}
});


});