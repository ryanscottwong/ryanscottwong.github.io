function question() {
  /* Generate two random integers between 0 and 9 */
  intA = Math.floor(Math.random() * 10);
  intB = Math.floor(Math.random() * 10);
  /* Display question */
  var element = document.getElementById("question");
  element.innerHTML = "What is " + intA + " times " + intB + "?";
}
