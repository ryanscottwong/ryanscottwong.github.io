$(document).ready(function(){

  // salesperson name tooltip
  $( function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  /* JQuery for validation displays error message if form input is not a number */
  $("#my_form").validate({
    // Rules for each input item
    rules: {
      item1: {required: true, number: true, min: 0},
      item2: {required: true, number: true, min: 0},
      item3: {required: true, number: true, min: 0},
      item4: {required: true, number: true, min: 0}
    },
    messages: {
       item1: "Please enter a number",
       item2: "Please enter a number",
       item3: "Please enter a number",
       item4: "Please enter a number"
    },
  errorPlacement: function(error, element) {
    if ( element.is(":text")) {
      error.appendTo( element.parent());
    }
    else {
      error.insertAfter(element);
    }
  });	// end validation
}); // document ready

function process() {
  if ($("#my_form").valid()) {
    // define variables
    var item1b, item2b, item3b, item4b;
    // get input number value from form using getElementById
    item1b = document.getElementById("item1").value;
    item2b = document.getElementById("item2").value;
    item3b = document.getElementById("item3").value;
    item4b = document.getElementById("item4").value;
  }
}
