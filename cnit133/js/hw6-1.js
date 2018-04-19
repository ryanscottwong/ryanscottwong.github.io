function roundNumber() {
  var errMsg = "Invalid input"; // error message
  var numberString = String(document.getElementById("number").value); // convert number to string
  var numberSplit = numberString.split("."); // split number at decimal point

  if (isNaN(document.getElementById("number").value) || // invalid if user inputs something other than a number
    (document.getElementById("number").value) == "" || // invalid if user inputs nothing
    !numberString.includes(".") || // invalid if user enters number with no decimal places
    numberSplit[1].length < 4 ) // invalid if user enter number with less than 4 decimal places
    {
      document.getElementById("errOut").innerHTML = errMsg; // display error message
    }
  else {
    document.getElementById("errOut").innerHTML = "";
    var num = parseFloat(document.getElementById("number").value);
    document.myForm.output.value =
      "The entered number: " + num +
      "\n rounded to the nearest integer using toFixed: " +
         roundToIntegerToFixed( num ) +
      "\n calculated square root rounded to the nearest integer: " +
         roundToSqrtToFixed( num ) +
      "\n rounded to the nearest tenth using toFixed: " +
         roundToTenthsToFixed( num ) +
      "\n rounded to the nearest hundredth using toFixed: " +
         roundToHundredthsToFixed( num ) +
      "\n rounded to the nearest thousandth using toFixed: " +
         roundToThousandthsToFixed( num );
  }
}

// round number to nearest integer
function roundToIntegerToFixed( number ) {
  return( number.toFixed(0) );
}

// square root of number rounded to nearest integer
function roundToSqrtToFixed( number ) {
  return ( Math.sqrt( number ).toFixed(0) );
}

// round number to nearest tenth
function roundToTenthsToFixed( number ) {
  return( number.toFixed(1) );
}

// round number to nearest hundredth
function roundToHundredthsToFixed( number ) {
  return( number.toFixed(2) );
}

// round number to nearest thousandth
function roundToThousandthsToFixed( number ) {
  return( number.toFixed(3) );
}

// reset input field
function reset() {
  document.getElementById("errOut").innerHTML="";
  document.getElementById("number").focus();
}
