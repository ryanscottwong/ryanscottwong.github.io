$(document).ready(function(){

  /* JQuery for validation displays error message if form input is not a number */
  $("#myform").validate({
    // Rules for each input item
    rules: {
      temp: { required: true, number: true, min: 0 }
    },
    messages: {
      temp: "Please input a numeric value"
    },
    errorPlacement: function(error, element) {
      if ( element.is(":text")) {
        error.appendTo( element.parent());
      }
      else {
        error.insertAfter(element);
      }
    }
  });	// end validation
}); // document ready

function celsius() {
  if ($("#myform").valid()) {
    // define variables
    var tempC, tempF;
    // get input number value from form using getElementById
    tempC = document.getElementById("temp").value;
    // convert temperature to Fahrenheit
    tempF = parseInt((9 / 5) * (tempC - 32));
    // display Fahrenheit temperature
    document.forms["myform"].elements["conversion"].value = ("Temperature in Fahrenheit is " + tempF);
  }
}
