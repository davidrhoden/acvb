var points, select, thisid, thisrel, choices, resultOne, resultTwo, resultThree, ResultFour;
points = 0;

resultOne = "<h2>Fork &amp; Taco</h2><p>Oh you fancy huh? Get your taste buds ready to dive into Asian Pear Chicken and Thai Grouper tacos, just make sure to use your dinner fork. Because tacos with a dessert fork – that’s just weird.</p><p>Share this quiz! <i class=\"fa fa-facebook-official\"></i><i class=\"fa fa-twitter-square\"></i></p>";

resultTwo = "<h2>Rositas Taco</h2><p>You like your tacos fresh, tasty and as authentic as they come. Next time you’re in town, get ready for the best food truck taco you’ve ever jammed down your mouth hole. </p><p>Share this quiz! <i class=\"fa fa-facebook-official\"></i><i class=\"fa fa-twitter-square\"></i></p>";

resultThree = "<h2>Taco Deli</h2><p>You’re headed to the deli! Don’t worry, no sandwiches (or tortas) here. Just classic – and completely delicious – Austin tacos. Pro tip: accessorize with plenty of the legendary green sauce. </p><p>Share this quiz! <i class=\"fa fa-facebook-official\"></i><i class=\"fa fa-twitter-square\"></i></p>";

resultFour = "<h2>Torchy’s Tacos</h2><p>You’ve elected Torchy’s as President of Austin Tacos. But whether your mouth votes Democrat or Republican (those are both taco names), you’re sure to go home happy. </p><p>Share this quiz! <i class=\"fa fa-facebook-official\"></i><i class=\"fa fa-twitter-square\"></i></p>";


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
