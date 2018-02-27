var answer = -1;

function askQuestion() {
  // Generate two random integers between 0 and 9
  intA = Math.floor(Math.random() * 10);
  intB = Math.floor(Math.random() * 10);
  answer = intA * intB;
  // Display question
  $("#question").text("How much is " + intA + " times " + intB + "?");
  return answer;
}

function getAnswer(answer) {
  // Get student's answer from form using getElementById
  studentAnswer = document.getElementById("answer").value;
  // Clear student's answer
  document.getElementById("answer").innerHTML = "";
  // Compare student's answer to answer
  document.getElementById("message").innerHTML = ("The answer is " + answer + 
    "; your answer is " + studentAnswer);
}
