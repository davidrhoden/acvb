var points, select, thisid, thisrel, currentAnswer, newpoints, resultOne, resultTwo, resultThree, ResultFour;
points = 0;

resultOne = "<h2>Fork &amp; Taco</h2>Oh you fancy huh? Get your taste buds ready to dive into Asian Pear Chicken and Thai Grouper tacos, just make sure to use your dinner fork. Because tacos with a dessert fork – that’s just weird.";

resultTwo = "<h2>Rositas Taco</h2>You like your tacos fresh, tasty and as authentic as they come. Next time you’re in town, get ready for the best food truck taco you’ve ever jammed down your mouth hole. ";

resultThree = "<h2>Taco Deli</h2>You’re headed to the deli! Don’t worry, no sandwiches (or tortas) here. Just classic – and completely delicious – Austin tacos. Pro tip: accessorize with plenty of the legendary green sauce. ";

resultFour = "<h2>Torchy’s Tacos</h2>You’ve elected Torchy’s as President of Austin Tacos. But whether your mouth votes Democrat or Republican (those are both taco names), you’re sure to go home happy. ";


function turnBlue(){
	
    //$( this ).toggleClass( "selected" );
    select = $(this);
    thisid = select.attr('id');
    thisrel = select.attr('rel');
    
  	
  	$('.answer').not(select).removeClass("selected");
  	select.toggleClass( "selected" );
    points = parseInt(points*1 + thisrel);
}

function showResult(){
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
