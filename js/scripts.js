// Random Quote Generator
$(document).ready(function(){
    var myQuotes = new Array(); 

	myQuotes[0] = "The public has an appetite for anything about imagination - anything that is as far away from reality as is creatively possible. -Steven Spielberg"; 
	myQuotes[1] = "Good user experience design is something that too few companied do. -Laua Klein"; 
	myQuotes[2] = "When you're focusing on just the conversion rates, and not the affect on your customer's mind, that's when problems occur. -Harry Brignull"; 
	myQuotes[3] = "Pay attention to what users do, not what they say... users do not know what they want. -Jakob Nielsen"; 
	myQuotes[4] = "It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts. -Sherlock Holmes"; 
	myQuotes[5] = "The hardest part of UX Design, taking that step back... and focusing on that problem space. -Smitha Prasadh"; 
	myQuotes[6] = "I fight for the users! -Tron"; 
	myQuotes[7] = "Only those who dare to fail greatly can ever achieve greatly. -Robert F. Kennedy"; 
	myQuotes[8] = "We’ve had three big ideas at Amazon... they’re the reason we’re successful: Put the customer first. Invent. And be patient. -Jeff Bezos"; 
	myQuotes[9] = "One of usability’s most hard-earned lessons is that ‘you are not the user.’ If you work on a development project, you’re atypical by definition. Design to optimize the user experience for outsiders, not insiders. - Jakob Nielson";

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