$(document).ready(function(){

  /* JQuery for validation displays error message if form input is a negative number */
  $("#salespersonform").validate({
    // Rules for each input item
    rules: {
      item1Sold: { required: true, number: true, min: 0},
      item2Sold: { required: true, number: true, min: 0},
      item3Sold: { required: true, number: true, min: 0},
      item4Sold: { required: true, number: true, min: 0}
    },
    messages: {
       item1Sold: " Please enter a number greater than or equal to zero",
       item2Sold: " Please enter a number greater than or equal to zero",
       item3Sold: " Please enter a number greater than or equal to zero",
       item4Sold: " Please enter a number greater than or equal to zero"
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
function total() {
  if ($("#salespersonform").valid()) {
    salaryWeekly = 200.00;
    commissionRate = 0.09;
    item1Price = 239.99;
    item2Price = 129.75;
    item3Price = 99.95;
    item4Price = 350.89;
    item1SoldB = document.getElementById("item1Sold").value;
    item2SoldB = document.getElementById("item2Sold").value;
    item3SoldB = document.getElementById("item3Sold").value;
    item4SoldB = document.getElementById("item4Sold").value;
    item1Total = (item1SoldB * item1Price).toFixed(2);
    item2Total = (item2SoldB * item2Price).toFixed(2);
    item3Total = (item3SoldB * item3Price).toFixed(2);
    item4Total = (item4SoldB * item4Price).toFixed(2);
    amountSold = (item1SoldB * item1Price + item2SoldB * item2Price + item3SoldB * item3Price + item4SoldB * item4Price).toFixed(2);
    weeklyEarnings = (salaryWeekly + (commissionRate * amountSold)).toFixed(2);
    document.getElementById("item1SoldB").value = (item1SoldB);
    document.getElementById("item2SoldB").value = (item2SoldB);
    document.getElementById("item3SoldB").value = (item3SoldB);
    document.getElementById("item4SoldB").value = (item4SoldB);
    document.getElementById("item1TotalB").value = (item1Total);
    document.getElementById("item2TotalB").value = (item2Total);
    document.getElementById("item3TotalB").value = (item3Total);
    document.getElementById("item4TotalB").value = (item4Total);
    document.getElementById("amountSoldB").value = (amountSold);
    document.getElementById("weeklyEarningsB").value = (weeklyEarnings);
  }
}
