$(document).ready(function(){
  /* Generate two random integers between 0 and 9 */
  intA = Math.floor(Math.random() * 10);
  intB = Math.floor(Math.random() * 10);
  answer = intA * intB;
  /* Display question */
  $("#question").text("What is " + intA + " times " + intB + "?");
});
