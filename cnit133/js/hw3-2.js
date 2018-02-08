$(document).ready(function(){

  // salesperson name tooltip
  $( function() {
    $('[data-toggle="tooltip"]').tooltip();
  } ); 

  // This script shows/hides instructions.
  $("#button").click(function(){
    $("#panel").slideToggle("slow");
  }); // end show/hide

  /* JQuery for validation displays error message if form input is not a number */
  $("#myform").validate({
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
  }
});	// end validation
}); // document ready

function process() {
if ($("#myform").valid()) {
// define variables
var item1b, item2b, item3b, item4, finalAvg, grade;
// get input number value from form using getElementById
 item1b = document.getElementById("item1").value;
 item2b = document.getElementById("item2").value;
 item3b = document.getElementById("item3").value;
 item4b = document.getElementById("item4").value;
 // calculate final average
 finalAvg = parseInt((.5 * hwAvgb) + (.2 * midExamb) + (.2 * finalExamb) + (.1 * acrb));
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
