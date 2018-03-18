$(function() {

  /* This script calculates the product and sum of every third integer
  from 5 to 20 inclusive and then displays the results */
  var sum = 0;
  var product = 1;
  for ( var number = 5; number <= 20; number += 3 )
  {
     sum += number;
     product *= number;
  }
  productComma = product.toLocaleString(undefined, {maximumFractionDigits: 0});
  document.getElementById("third").innerHTML =
    ("The sum of every third integer " +
      "from 5 to 20 inclusive is " + sum +
      "<br>The product of every third integer " +
      "from 5 to 20 inclusive is " +  productComma);

  /* This script calculates the product and sum of every fourth integer from 3 to 31 inclusive and then displays the results */
  var number = 3;
  var sum = 0;
  var product = 1;
  while ( number >= 3 && number <=31 ) {
     sum += number;
     product *= number;
     number += 4;
  }
  productComma = product.toLocaleString(undefined, {maximumFractionDigits: 0});
  document.getElementById("fourth").innerHTML =
    ("The sum of every fourth integer " +
      "from 3 to 31 inclusive is " + sum +
      "<br>The product of every fourth integer " +
      "from 3 to 31 inclusive is " +  productComma);

  // draggable div
  $( "#draggable" ).draggable();

});
