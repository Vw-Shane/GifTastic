//question on line 44

$(document).ready(function() {
    var Topic = ["Jim Halpert", "Pam Beasley", "Michael Scott"];
    buttons();
    NewButtons();
    $(document).on("click", ".person", GifFunk);

    function buttons() {
        for (var i = 0; i < Topic.length; i++) {
            var b = $("<button>");
            b.addClass("person");
            b.attr("data-name", Topic[i]);
            b.text(Topic[i]);
            $("#ButtonsHere").append(b);
        };
    };

    function NewButtons() {
        $("#add-buton").on("click", function(event) {
            // console.log("fsdg");
            event.preventDefault()
            $("#ButtonsHere").empty();
            var button = $("#search-input").val().trim();
            // console.log(button);
            Topic.push(button);
            buttons();
        });
    };

    function GifFunk() {
        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            gif + "&api_key=dc6zaTOxFJmzC&limit=10";
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .done(function(response) {
                // console.log(response);
                var results = response.data;
                console.log(results);
                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");
                    var p = $("<p>").text("Rating", results[i].rating);
                    var gifStill = $("<img>");
                    gifStill.attr("src", results[i].images.fixed_height_still.url); // Do I need .url at end ???????
                    gifStill.attr("src", results[i].images.fixed_height_still.url); //compare this too lines 65-68 of othet js//
                    gifDiv.append(p);
                    gifDiv.append(gifStill);
                    $("#Gifs").prepend(gifDiv);
                };
                $("#Gifs").on("click", function() {
                    console.log("Hey You clicked I worked Nice Job!!");
                    var state = $(this).attr(results[i].type)
                    console.log(state);
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                })

            });

    };

});