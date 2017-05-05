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
      var result = playPingPong(userInput);
    }
  });
});

//--------------------------BACKEND LOGIC
//create function for game start
playPingPong = function(userInput) {
  debugger;
//create empty array for list of numbers and words
  var output = [];
//loop through to the number that the user inputted
  for (var i = 0; i <= userInput; i++) {
//if number is divisible by 3 no remainder
    if (userInput % 3 === 0) {
      output.push("ping");
    }
//if number is divisible by 5 no remainder
    else if (true) {

    }
//if number is divisible by both 3 & 5 no remainder
  };
};
