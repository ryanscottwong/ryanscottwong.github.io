function multiplication() {
  /* Generate two random integers between 0 and 9 */
  intA = Math.floor(Math.random() * 10);
  intB = Math.floor(Math.random() * 10);
  /* Display question */
  var question = document.getElementById("question");
  question.innerHTML = ("What is " + intA + " times " + intB + "?");
}
