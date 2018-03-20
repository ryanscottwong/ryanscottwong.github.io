$(document).ready(function(){

  /* JQuery for validation displays error message if form input is a negative number */
  $("#sales").validate({
    // Rules for each input item
    rules: {
      sold1: { required: true, number: true, min: 0},
      sold2: { required: true, number: true, min: 0},
      sold3: { required: true, number: true, min: 0},
      sold4: { required: true, number: true, min: 0},
      sold5: { required: true, number: true, min: 0}
    },
    messages: {
      sold1: " Please enter number greater than or equal to zero",
      sold2: " Please enter number greater than or equal to zero",
      sold3: " Please enter number greater than or equal to zero",
      sold4: " Please enter number greater than or equal to zero",
      sold5: " Please enter number greater than or equal to zero"
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

/* This script calculates how much the salesperson sold, how much they earned, and then outputs the results */
function calculate() {
  if ($("#sales").valid()) {
    // declare variables
    var product, sold, price, total;
    grandTotal = 0;
    for ( var i = 1; i <= 5; i ++ ) {
      // user input
      product = parseFloat(document.getElementById("product" + i).value);
      sold = parseFloat(document.getElementById("sold" + i).value);
      // determine price based on product number
      switch (i) {
        case 1:
          price = 2.98;
          break;
        case 2:
          price = 4.50;
          break;
        case 3:
          price = 9.98;
          break;
        case 4:
          price = 4.49;
          break;
        case 5:
          price = 6.87;
          break;
      }
      // calculate amount sold per product and grand total
      total = sold * price;
      grandTotal += total;
      // output price and amount per product
      document.getElementById("priceB" + i).value = price.toFixed(2);
      document.getElementById("totalB" + i).value = total.toFixed(2);
    }
    document.getElementById("grandTotalB").value = grandTotal.toFixed(2);
  }
}
