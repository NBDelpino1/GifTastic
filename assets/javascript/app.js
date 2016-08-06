var topics = ['Michael Jordan', 'Austin Powers', 'Optimus Prime', 'Family Guy'];
            renderButtons();
        $('.giphy').on('click' , function(){
console.log('hey');

        $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC",
        data:{
            limit: 5,
            api_key: "dc6zaTOxFJmzC",
            q: $(this).attr("data-name")}, 
        method: 'GET'})


        .done(function(response) {
            console.log(response);
            $.each(response.data, function (key, gif){
            $("#results").append('<iframe src="' + gif.embed_url + ' "/>');               
            })
            });


        }) //end of onclick function








//function runs when add button is clicked

        $('#addbutton').on('click', function(){
//Grab the input from the textbox and store in new variable
        var newGif = $('#textBox').val().trim();
//New variable then then pushed into to topics array
        addNewButton(newGif);
// Our array then runs which handles the processing of our Giphy array

// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
        return false;
        })




        function addNewButton(name){
        var newButton = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
        newButton.addClass('giphy'); 
        newButton.attr('data-name', name); 
        $(newButton).click(function(){
            $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC",
        data:{
            limit: 5,
            api_key: "dc6zaTOxFJmzC",
            q: name}, 
        method: 'GET'})


        .done(function(response) {
            console.log(response);
            $.each(response.data, function (key, gif){
            $("#results").append('<iframe src="' + gif.embed_url + ' "/>');               
            })
            });
        })
        newButton.text(name); 
//display new button        
        $('#gifbutton').append(newButton);

        }
//function creates new buttons

        function renderButtons() {
// Deletes the Giphy prior to adding new Giphys (this is necessary otherwise you will have repeat buttons)
        $('#gifbutton').empty();
// Loops through the array of Giphys
        for (var i = 0; i < topics.length; i ++) {
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
