var points, select, thisid, thisrel, choices, resultOne, resultTwo, resultThree, ResultFour;
points = 0;

resultOne = "<h2>Continental Club</h2><p>Ready for a new take on old school? Giddy up on down to SoCo and get ready for the best of rockabilly, country and swing at this legendary Austin hot spot for country cool.</p><hr><p>Share this quiz! <i class=\"fa fa-facebook-official\"></i><i class=\"fa fa-twitter-square\"></i></p>";

resultTwo = "<h2>Emo’s</h2><p>Get ready to rock on Riverside. Or dance. Or mosh. Or cry (What? It’s called Emo’s). And do all of that with a hot, up-and-coming act that you’ll be able to say you saw “way back when.”</p><hr><p>Share this quiz! <i class=\"fa fa-facebook-official\"></i><i class=\"fa fa-twitter-square\"></i></p>";

resultThree = "<h2>Stubbs</h2><p>It’s the big outdoor venue for the biggest bands of the day. After the show, you and your 2,000 new friends can wash down that ear candy with some mouth candy, aka Stubb’s delish BBQ. Yum.</p><hr><p>Share this quiz! <i class=\"fa fa-facebook-official\"></i><i class=\"fa fa-twitter-square\"></i></p>";

resultFour = "<h2>ACL Live</h2><p>You’ve seen it on TV, you’ve heard about it for years, and now you’re there. The intimate venue that hosts the best music TV show and the coolest bands on the planet. Soak it in. You’ll love it. </p><hr><p>Share this quiz! <i class=\"fa fa-facebook-official\"></i><i class=\"fa fa-twitter-square\"></i></p>";


function turnBlue(){

    select = $(this);
    a1answers = $('.answer.a1');
    thisid = select.attr('id');
    thisrel = select.attr('rel');
    thisgroup = select.attr('group');
    
  	if (select.hasClass("a1")) {
  	$('.answer.a1').not(select).removeClass("selected");
  	select.toggleClass( "selected" );
    } else if (select.hasClass("a2")) {
  	$('.answer.a2').not(select).removeClass("selected");
  	select.toggleClass( "selected" );
    } else if (select.hasClass("a3")) {
  	$('.answer.a3').not(select).removeClass("selected");
  	select.toggleClass( "selected" ); 
  	} else if (select.hasClass("a4")) {
  	$('.answer.a4').not(select).removeClass("selected");
  	select.toggleClass( "selected" );
  	}
}

function showResult(){
 	choices = $(".selected");
	choices.each(function() {
         points += parseInt($(this).attr("rel"));
    });

	if (points<=6) {
		$('#result').html(resultOne);
	} else if (points>=6 && points<=9) {
		$('#result').html(resultTwo);
	} else if (points>=9 && points<=12) {
		$('#result').html(resultThree);
	}	else if (points>=12) {
		$('#result').html(resultFour);
	}
}

$(document).ready(function() {
	$('.answer').on('click', turnBlue);
	$('.showResult').on('click', showResult);
});
