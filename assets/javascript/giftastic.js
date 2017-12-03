$( document ).ready(function() {
    // console.log( "test!" );

 	// Initial array of movies
      var afv = ["afvbabies", "afvpets", "afv"];
      console.log(afv);

     // Function for displaying movie data

      function renderButtons() {

        // Deleting the movie buttons prior to adding new movie buttons
        $("#search-view").empty();

        // Looping through the array of afv 
        for (var i = 0; i <afv.length; i++) {

        // Then dynamicaly generating buttons for each afv in the array.

        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
        // Adding a class
          a.addClass("afv");
        // Adding a data-attribute with a value of the afv at index i
          a.attr("data-name", afv[i]);
        // Providing the button's text with a value of the places at index i
          a.text(afv[i]);
        // Adding the button to the HTML
          $("#addAfv").append(a);
        }
      }

          // listen to on click for the submit buttion 
        $("#submit-button").on("click", function(e){
          // event.preventDefault() prevents the form from trying to submit itself.
          event.preventDefault();
          // create a variable to hold all the afv searched
          var afv = $("#Input-afv-search").val().trim();
          // console.log(afv)
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("afv");
           // Adding a data-attribute with a value of afv at index i
          a.attr("data-name", afv);
          // Providing the button's text with a value of the places at index i
          a.text(afv);
          // Adding the new button to the Html
          $("#addFood").append(a);

      })

     	                    
              var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + afv + "&api_key=chJF2E6dEc4mlE405FcAlzVVkQHncAAG&limit=10";

              $.ajax({
               url: queryURL,
              method: "GET"
              }).done(function(response) {
          
          console.log(response);

              for(i=0; i<response.data.length;i++){

          //Creating and storing a div tag
          
             var searchDiv =$('<div>');

             var rating = response.data[i].rating; 

          // Creating a paragraph tag with the result item's rating
          
             var p =$("<p>").text("Rating: "+ response.data[i].rating);
          // console.log(rating);

          // creating and storing an image tag

              var afv = $('<img>'); 

            // Setting the src attribute of the image to a property pulled off the result item
            // When the user clicks on a still GIPHY images, the gif should animate. 
            // If the user clicks the gif again, it should stop playing.
            // Immage variable holds both animated and still image
            // Setting the src attribute of the image to a property pulled off the result item

                afv.attr('src', response.data[i].images.original_still.url);
            
                // foodImage.attr('src', response.data[i].images.original_mp4.mp4); 

            // Appending the paragraph and image tag to the searchDiv
//           
                searchDiv.append(p);
            
                searchDiv.append(afv);
//             
            // Prependng the searchDiv to the HTML page in the "search-view" div
//              
                $("#search-view").prepend(searchDiv);
         

                  }

                })


            // This function handles events where one button is clicked

                $("#addAfv").on("click", ".afv", function(event) {

            // event.preventDefault() prevents the form from trying to submit itself.
             // We're using a form so that the user can hit enter instead of clicking the button if they want

                 event.preventDefault();

             console.log("You clicked a afv button")

             // This line will grab the text from the input box

                var afv = $(this).attr("data-name");

            // console.log(afv)
            
            // The selected food from the textbox is then added to our array
      
            
              });

            // Calling the renderButtons function at least once to display the initial list of movies
      
            renderButtons();

           // queryURL for GIPHY API data pull 

     
             }); 


  
       


       
        

 
      //  write a For loop that replaces [0] with [i] and grabs the url

      //  create a new DOM element for image

      //  add the response URL attribute to the image

      //  append the image to the div
    

	   //  QueryURL for Giphy API






