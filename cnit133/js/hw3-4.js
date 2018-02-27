var answer = -1;

$(function (answer) {
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
  // Compare student's answer with answer
  if (studentAnswer != answer) {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = ("No. Please try again.");
  }
  else {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = ("Very good!");
  }
  // Clear student's answer
  document.getElementById("answer").innerHTML = "";
}
