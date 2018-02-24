$(document).ready(function(){

  // This script shows/hides instructions.
  $("#button").click(function(){
    $("#panel").slideToggle("slow");
  }); // end show/hide

  /* JQuery for validation displays error message if form input is not a number */
  $("#myform").validate({
    // Rules for each input item
    rules: {
      hwAvg: { required: true, number: true, min: 0, max: 100},
      midExam: { required: true, number: true, min: 0, max: 100},
      finalExam: { required: true, number: true, min: 0, max: 100},
      acr: { required: true, number: true, min: 0, max: 100}
    },
    messages: {
       hwAvg: "Please enter a number between 0 and 100",
       midExam: "Please enter a number between 0 and 100",
       finalExam: "Please enter a number between 0 and 100",
       acr: "Please enter a number between 0 and 100"
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
var hwAvgb, midExamb, finalExamb, acrb, finalAvg, grade;
// get input number value from form using getElementById
 hwAvgb = document.getElementById("hwAvg").value;
 midExamb = document.getElementById("midExam").value;
 finalExamb = document.getElementById("finalExam").value;
 acrb = document.getElementById("acr").value;
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
