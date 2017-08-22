$(document).ready(function() {
    var Topic = ["Jim", "Pam", "michael scott"];
    // This function handles events where one button is clicked
    Buttons();
    $("#add-movie").on("click", function(event) {
        event.preventDefault()
        $("#ButtonsHere").empty();
        // This line grabs the input from the textbox
        var movie = $("#movie-input").val().trim();
        console.log(movie);
        // The movie from the textbox is then added to our array
        Topic.push(movie);
        console.log(movie);

        // Calling renderButtons which handles the processing of our movie array
        Buttons();
    });

    $(document).on("click", ".person", GifFunk);


    function Buttons() {
        // $("#ButtonsHere").empty(); // this prevents repeat buttons
        for (var i = 0; i < Topic.length; i++) {
            var a = $("<button>");
            a.addClass("person");
            a.attr("data-name", Topic[i]);
            a.text(Topic[i]);
            $("#ButtonsHere").append(a);
        };
    };


    function GifFunk() {
        var thing = $(this).attr("data-name");
        console.log(Topic[1])
        // Constructing a queryURL using the animal name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            thing + "&api_key=dc6zaTOxFJmzC&limit=10";

        // Performing an AJAX request with the queryURL
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            // After data comes back from the request
            .done(function(response) {
                console.log(queryURL);
                console.log(thing);
                console.log(response);
                // storing the data from the AJAX request in the results variable
                var results = response.data;

                // Looping through each result item
                for (var i = 0; i < results.length; i++) {

                    // Creating and storing a div tag
                    var animalDiv = $("<div>");

                    // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + results[i].rating);

                    // Creating and storing an image tag
                    var animalImage = $("<img>");
                    // Animated here
                    animalImage.attr("src", results[i].images.fixed_height.url);

                    animalImage.attr("data-still", results[i].images.fixed_height.url); /// this to still img
                    // Appending the paragraph and image tag to the animalDiv
                    animalDiv.append(p);
                    animalDiv.append(animalImage);

                    // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                    $("#Gifs").prepend(animalDiv);

                }

                $("#Gifs").on("click", function() {
                	console.log("sfdg");
                    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                    var state = $(this).attr("still", );
                    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                    // Then, set the image's data-state to animate
                    // Else set src to the data-still value
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                });
            });
    };
});