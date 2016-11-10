// My food array
var food = ['pizza', 'cheeseburger', 'spaghetti',
    'pineapples', 'fries', 'donuts', 'pancakes', 'jello', 'pie', 'tacos'
];

function createButtons() {
    // Have to clear the previous gifs before a new button/gif is clicked/created
    $('#buttonsHere').empty();
    // Loops through the food array
    for (var i = 0; i < food.length; i++) {
        var b = $('<button>');
        b.addClass('food');
        b.attr('data-food', food[i]);
        b.text(food[i]);
        $('#buttonsHere').append(b);
    }
}

createButtons();


// Creating an on-click function
function clickingFoodItem() {
    $('.food').on('click', function() {
        var foodItem = $(this).data('food'); // Grabbing the data-attribute assigned to the button

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + foodItem + "&api_key=dc6zaTOxFJmzC&limit=10";
        //One URL for each gif in my array

        $.ajax({
            url: queryURL,
            method: 'GET'
        })

        .done(function(response) {
            console.log(response);
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                // var createImgDiv = $('<div class="gifPic>');
                var foodImage = $('<img>');
                foodImage.attr('src', results[i].images.fixed_height.url);
                $('#buttonsHere').after(foodImage);

                var rating = results[i].rating;
                var ratingText = $('<p>').text("Rating: " + rating);
                $('#buttonsHere').after(ratingText);
            }

        });
    });
}
clickingFoodItem();
//Supposed to add a new button based on user search...not generating gifs

$(document).on('click', '#addGif', function() {
    var userFoodGif = $('#foodInput').val().trim();
    food.push(userFoodGif);

    createButtons();
    clickingFoodItem();
    return false;
});

//  for (var i=0; i < results.length; i++) {
//  	  var foodImage = $('<img>');
//       foodImage.attr('src', results[i].images.fixed_height.url);
//       $('#buttonsHere').after(foodImage);
// }
