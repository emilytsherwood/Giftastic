// My food array
var food = ['pizza', 'cheeseburger', 'spaghetti', 
'pineapples', 'fries', 'donuts', 'pancakes', 'jello', 'pie', 'tacos'];

function createButtons(){
	// Have to clear the previous gifs before a new button/gif is clicked/created
	$('#gifsHere').empty();

	// Loops through the food array
	for (var i = 0; i < food.length; i++) {
	}
	var b = ('<button>');
	b.addClass('food');
	b.attr('data-food', food[i]);
	b.text(food[i]);
	$('#gifsHere').append(b);
}



// Creating an on-click function
$('button').on('click', function(){
  	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL, 
        method: 'GET'
    })

     .done(function(response) {
        console.log(response);
        var results = response.data;
});
});



// Need to create a FORM that takes user input for the gif
// Don't forget submit button
// Make sure to RETURN FALSE;