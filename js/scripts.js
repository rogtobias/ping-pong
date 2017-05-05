//--------------------------FRONTEND LOGIC
$(document).ready(function() {
  $("#pingPong").submit(function(event) {
    event.preventDefault();
      //get input from user and convert it from a string to a number
    var userInput = parseInt($("input#userInput").val());
      //check to make sure it is a number and alert user if it isn't
    if (isNaN(userInput)) {
      alert("Please only enter numbers.");
    } else {
      var userOutput = playPingPong(userInput);
    }
      //send the output back to the html & user
    $("#list").text(userOutput);
  });
});

//--------------------------BACKEND LOGIC
//create function for game start
playPingPong = function(userInput) {
  //debugger;
    //create empty array for list of numbers and words
  var output = [];
    //loop through to the number that the user inputted
  for (var i = 1; i <= userInput; i++) {
    //if number is divisible by 3 & 5 no remainder
    if (i % 15 === 0) {
      output.push("ping pong");
    }
      //if number is divisible by 5 no remainder
    else if (i % 5 === 0) {
      output.push("pong");
    }
      //if number is divisible by both 3 no remainder
    else if (i % 3 === 0) {
      output.push("ping");
    }
      //else push the number to output
    else {
      output.push(i);
    }

  };
  //return the result back to the frontend
  return output.join(", ");
};
