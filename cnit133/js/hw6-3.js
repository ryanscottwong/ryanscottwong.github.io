
function parseNumber() {

  // error message
  var errMsg="Telephone number has incorrect format - Please use (999) 999-9999";

  // get user input for telephone number
  var phoneNumber = document.forms["myForm"].elements["input"].value;

  // validate input for correct format
  phoneRegExp = /^(\()(\d{3})(\))(\s)(\d{3})(-\d{4})$/;

  // test to see if input is in valid format using a regular excpression
  if ( !phoneRegExp.test(phoneNumber))
    // display error message if format is incorrect
    document.getElementById("errOut").innerHTML = errMsg;

  else  {
    // clear error message
    document.getElementById("errOut").innerHTML = "";

    var tokens = phoneNumber.split(/\ |\-/); // split phone number into tokens
    var areaCode = tokens[0]; // area code is first token
    var digits7 = tokens[1] + "-" + tokens[2]; // 7 digits are second token

    document.getElementById("areaCode").innerHTML = areaCode;
    document.getElementById("digits7").innerHTML = digits7;
  }
}
