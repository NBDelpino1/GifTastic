// HANDLE TO INPUT ON ENTER
$(document).ready(function(){

    $('#userinput').keypress(function(e){

        if(e.keyCode==13){

            $("#logo").animate({
                height: '70px'
            });

            $('#imagesContainer').empty();

            var userQuery = $('#userinput').val().trim();

            console.log('Request: ' + userQuery + ' "');

            $.ajax({

                url : "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC",
                data : {

                    limit : 20,
                    api_key : "dc6zaTOxFJmzC",

                    q : userQuery
                },
                method : 'GET'

            }).done(function (res) {

                console.log('Response: ' + res.data);

                $.each(res.data, function (key, gif) {

                    // Grab the ratings from the data returned and denerate some html to display to user
                    $("#imagesContainer").append(' <div class="col s4 m3"><div class="video-container"><iframe  src=" ' + gif.embed_url + ' " frameborder="0"></iframe></div></div>');

                    // TODO - need to append this to its respective iframe
                    // $("#ratingsContainer").append('<div class="col s3"><p>Rated: ' + gif.rating + '</p></div>');

                });

                console.log("Hope you liked what you saw, see ya next time!");

            });

            return false;
        }

    });
});


// HANDLE THE SUBMIT BUTTON
$(document).ready(function () {

    $('#submitButton').on('click', function () {

        $("#logo").animate({
            height: '70px'
        });

        $('#imagesContainer').empty();

        var userQuery = $('#userinput').val().trim();

        console.log('User Query = ' + '" ' + userQuery + ' "');

        $.ajax({

            url : "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC",
            data : {

                limit : 20,
                api_key : "dc6zaTOxFJmzC",

                q : userQuery
            },
            method : 'GET'

        }).done(function (res) {

            console.log(res.data);

            $.each(res.data, function (key, gif) {

                console.log("Time to show you the goods, go check out the browser!");

                // Grab the ratings from the data returned and denerate some html to display to user
                $("#imagesContainer").append(' <div class="col s4 m3"><div class="video-container"><iframe  src=" ' + gif.embed_url + ' " frameborder="0"></iframe></div></div>');

            });

            console.log("Hope you liked what you saw, see ya next time!");

        });

        return false;

    });

});


// HANDLE THE LINKS
$(document).ready(function () {

    $('.topicLink').on('click', function () {


        $("#logo").animate({
            height: '70px'
        });

        $('#imagesContainer').empty();

        var userQuery = $(this).text();

        $.ajax({

            url : "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC",
            data : {

                limit : 20,
                api_key : "dc6zaTOxFJmzC",

                q : userQuery
            },
            method : 'GET'

        }).done(function (res) {

            console.log(res.data);

            $.each(res.data, function (key, gif) {

                // Grab the ratings from the data returned and denerate some html to display to user
                $("#imagesContainer").append(' <div class="col s4 m3"><div class="video-container"><iframe  src=" ' + gif.embed_url + ' " frameborder="0"></iframe></div></div>');

            });

            console.log("Hope you liked what you saw, see ya next time!");

        });

        return false;

    });

});