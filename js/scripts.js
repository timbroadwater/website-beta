// Random Quote Generator
$(document).ready(function(){
    var myQuotes = new Array(); 

	myQuotes[0] = "\"Everyone wants to innovate... no one wants to change.\" –Mike Monteiro"; 
	myQuotes[1] = "\"Good user experience design is something that too few companied do.\" –Laua Klein"; 
	myQuotes[2] = "\"When you're focusing on just the conversion rates... that's when problems occur.\" –Harry Brignull"; 
	myQuotes[3] = "\"Pay attention to what users do, not what they say... users do not know what they want.\" –Jakob Nielsen"; 
	myQuotes[4] = "\"It is a capital mistake to theorize before one has data.\" –Sherlock Holmes"; 
	myQuotes[5] = "\"The hardest part of UX Design, taking that step back... and focusing on that problem space.\" –Smitha Prasadh"; 
	myQuotes[6] = "\"I fight for the users!\" –Tron"; 
	myQuotes[7] = "\"UX without users is not UX... it's X, which means don't do it!\" –Hoa Loranger"; 
	myQuotes[8] = "\"Put the customer first. Invent. And be patient.\" –Jeff Bezos"; 
	myQuotes[9] = "\"One of usability’s most hard–earned lessons is that ‘you are not the user.’\"  –Jakob Nielson";
	myQuotes[10] = "\"Pushing out designs without user input is extremely dangerous and problematic.\" –Hoa Loranger";

	var myRandom = Math.floor(Math.random()*myQuotes.length); 
	$(".message").text( myQuotes[myRandom ] );

});

// Floating Nav
$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    var nav = $('header');

    $('#hero').each(function() {
        var topDistance = $(this).offset().top;

        if ( (topDistance) < scrollTop ) {
                    {
            nav.css({
                boxShadow: '0 5px 25px rgba(0,0,0,0.33)',             
	            });
	        }
        }
        else if ( (topDistance) > scrollTop ) {
                    {
            nav.css({
                boxShadow: '0 0 0 rgba(0,0,0,0)',             
	            });
	        }
        }
    });
});

// Floating Nav 2
$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    var nav = $('header');

    $('#carousel').each(function() {
        var topDistance = $(this).offset().top;

        if ( (topDistance) < scrollTop ) {
                    {
            nav.css({
                boxShadow: '0 5px 25px rgba(0,0,0,0.33)',             
	            });
	        }
        }
        else if ( (topDistance) > scrollTop ) {
                    {
            nav.css({
                boxShadow: '0 0 0 rgba(0,0,0,0)',             
	            });
	        }
        }
    });
});

// Services Page
$(document).ready(function(){
	$('.audit').addClass('svc-select');
	$('.customer-text').addClass('hide');
	$('.quant-text').addClass('hide');
	$('.ui-text').addClass('hide');

	// Audit
	$('.audit').click(function() {
  		$('.svclist').removeClass('svc-select');
  		$('.audit').addClass('svc-select');
  		$('.rtext').addClass('hide');
  		$('.audit-text').removeClass('hide');
	});

	// customer
	$('.customer').click(function() {
  		$('.svclist').removeClass('svc-select');
  		$('.customer').addClass('svc-select');
  		$('.rtext').addClass('hide');
  		$('.customer-text').removeClass('hide');
	});

	// quant
	$('.quant').click(function() {
  		$('.svclist').removeClass('svc-select');
  		$('.quant').addClass('svc-select');
  		$('.rtext').addClass('hide');
  		$('.quant-text').removeClass('hide');
	});

	// uidesign
	$('.uidesign').click(function() {
  		$('.svclist').removeClass('svc-select');
  		$('.uidesign').addClass('svc-select');
  		$('.rtext').addClass('hide');
  		$('.ui-text').removeClass('hide');
	});

});

// Mobile Services Page
$(document).ready(function(){

	// Audit
	$('.auditm').click(function() {
  		$('.audit-textm').slideToggle();
  		$('.auditm .fa').toggleClass('rotate');
	});

	// customer
	$('.customerm').click(function() {
  		$('.customer-textm').slideToggle();
  		$('.customerm .fa').toggleClass('rotate');
	});

	// quant
	$('.quantm').click(function() {
  		$('.quant-textm').slideToggle();
  		$('.quantm .fa').toggleClass('rotate');
	});

	// uidesign
	$('.uidesignm').click(function() {
  		$('.uidesign-textm').slideToggle();
  		$('.uidesignm .fa').toggleClass('rotate');
  		$('.uidesignm').toggleClass('whiteborder');
	});

});