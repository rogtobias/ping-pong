//--------------------------FRONTEND LOGIC
$(document).ready(function() {
  $("#pingPong").submit(function(event) {
    event.preventDefault();
    debugger;
    var userInput = parseInt($("input#userInput").val());

    if (isNaN(userInput)) {
      alert("Please only enter numbers.");
    } else {
      var result = playPingPong(userInput);
    }
  });
});

//--------------------------BACKEND LOGIC
