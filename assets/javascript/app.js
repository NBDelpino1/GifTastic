var topics = ['Michael Jordan', 'Austin Powers', 'Optimus Prime', 'Family Guy'];
renderButtons();
//Ajax call
$('.giphy').on('click', function() {
    $('#results').empty();
        $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC",
            data: {
                limit: 5,
                api_key: "dc6zaTOxFJmzC",
                q: $(this).attr("data-name")
            },
            method: 'GET'
        }).done(function(response) {
            console.log(response);
            $.each(response.data, function(key, gif) {
                $("#results").append('<iframe src="' + gif.embed_url + ' "/>');
            })
        });
    })
    ///function generates new giphys for button clicked  
$('#addbutton').on('click', function() {
        //get input from textbox
        var newGif = $('#textBox').val().trim();
        //call addNewButton function and pass in what was entered in the textbox
        addNewButton(newGif);
        // We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
        return false;
    })
    //function adds new buttons

function addNewButton(name) {
        //create actual button
        var newButton = $('<button>')
            //give button a class         
        newButton.addClass('giphy');
        //give button an attribute
        newButton.attr('data-name', name);
        //when button clicked run ajax call
        $(newButton).click(function() {
            $('#results').empty();
            $.ajax({
                url: "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC",
                data: {
                    limit: 5,
                    api_key: "dc6zaTOxFJmzC",
                    q: name
                },
                method: 'GET'
            }).done(function(response) {
                console.log(response);
                $.each(response.data, function(key, gif) {
                    $("#results").append('<iframe src="' + gif.embed_url + ' "/>');
                })
            });
        })
        newButton.text(name);
        $('#gifbutton').append(newButton);
    }
    //function displays new button

function renderButtons() {
    // Deletes the Giphy prior to adding new Giphys (this is necessary otherwise you will have repeat buttons)
    $('#results').empty();
    // Loops through the topics array
    for (var i = 0; i < topics.length; i++) {
        // Then dynamicaly generates buttons for each Giphy in the array
        // Note the jQUery syntax here...        
        var newButton = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
        newButton.addClass('giphy');
        newButton.attr('data-name', topics[i]);
        newButton.text(topics[i]);
        //display new button        
        $('#gifbutton').append(newButton);
    }
}