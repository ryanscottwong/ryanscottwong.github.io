$(function () {
  // Generate two random integers between 0 and 9
  intA = Math.floor(Math.random() * 10);
  intB = Math.floor(Math.random() * 10);
  answer = intA * intB;
  // Display question
  $("#question").text("How much is " + intA + " times " + intB + "?");
  return answer;
}); // end document ready

function getAnswer(answer) {
  // Get student's answer from form using getElementById
  studentAnswer = document.getElementById("answer").value;
  // Compare student's answer to answer
  document.forms["myform"].elements["message"].value = ("Your answer is " + studentAnswer);
}
