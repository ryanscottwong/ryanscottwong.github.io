$(document).ready(function(){

  // This script shows/hides instructions.
  $("#button").click(function(){
    $("#panel").slideToggle("slow");
  }); // end show/hide

  /* JQuery for validation displays error message if form input is not a number */
  $("#myform").validate({
    // Rules for each input item
    rules: {
      item1sold: { required: true, number: true, min: 0, max: 100},
      item2sold: { required: true, number: true, min: 0, max: 100},
      item3sold: { required: true, number: true, min: 0, max: 100},
      item4sold: { required: true, number: true, min: 0, max: 100}
    },
    messages: {
       item1sold: "Please enter a number between 0 and 100",
       item2sold: "Please enter a number between 0 and 100",
       item3sold: "Please enter a number between 0 and 100",
       item4sold: "Please enter a number between 0 and 100"
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

function process() {
if ($("#myform").valid()) {
// define variables
var item1soldb, item2soldb, item3soldb, item4soldb, finalAvg, grade;
// get input number value from form using getElementById
 item1soldb = document.getElementById("item1sold").value;
 item2soldb = document.getElementById("item2sold").value;
 item3soldb = document.getElementById("item3sold").value;
 item4soldb = document.getElementById("item4sold").value;
 // calculate final average
 finalAvg = parseInt((.5 * item1soldb) + (.2 * item2soldb) + (.2 * item3soldb) + (.1 * item4soldb));
 // determine grade based on final average
 if (finalAvg >= 90) {
   grade = "A";
 }
 else if (finalAvg >= 80) {
   grade = "B";
 }
 else if (finalAvg >= 70) {
   grade = "C";
 }
 else if (finalAvg >= 60) {
   grade = "D";
 }
 else {
   grade = "F"
 }
 // display for grade F
 if (grade == "F") {
 document.forms["myform"].elements["comment"].value = ("Final average is " + finalAvg
 + "\nFinal grade is " + grade + "\nStudent must retake the course");
 }
 // display for grades A-D
 else {
 document.forms["myform"].elements["comment"].value = ("Final average is " + finalAvg
 + "\nFinal grade is " + grade);
 }
}
}
