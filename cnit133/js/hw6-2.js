function search() {
  var errMsg = "Please enter text and a character in the required fields"; // error message
  var count = 0;
  // get user input for text string
  var stringToSearch = document.getElementById("stringToSearch").value.toLowerCase();
  // get user input for search character
  var key = document.getElementById("key").value.toLowerCase().charAt(0);

  // count the number of occurrences of the character within the string
  for (i = 0; i < stringToSearch.length; i++) {
    if (stringToSearch.charAt(i) == key)
      count++;
  }

  if (stringToSearch == "" || key =="") {
    document.getElementById("errOut").innerHTML = errMsg; // display error message
    document.getElementById("output").value = "";
  }

  // display number of occurences of the character if found in the string
  else if (count != 0) {
    document.getElementById("errOut").innerHTML = "";
    document.getElementById("output").value = count +
    " occurrence(s) of " + key + " found";
  }

  // display error message if character isn't found in the string
  else {
    document.getElementById("errOut").innerHTML = "";

    // assemble HTML to pump into new window
    var myText = "<html>\n";
    myText += "<head>\n";
    myText += "<title>Character not found</title>\n";
    myText += "</head>\n";
    myText += "<body>\n";
    myText += "<div align='center'>\n";
    myText += "<p style=\"font-family:Helvetica,Arial,sans-serif;font-size:14px;\">Search character " + key + " not found in text string</p>\n";
    myText += "<input type='button' value='Close Window' onclick='window.close()'>\n";
    myText += "</div>\n";
    myText += "</body>\n";
    myText += "</html>";

    // open window on the upper right of the screen
    var errWindow = window.open("", "new_window", "top=360,left=325,width=300,height=100");

    errWindow.focus();

    // pump html into to this new opened window
    errWindow.document.write(myText);

    // tell browser that errWindow document is finished loading
    errWindow.document.close();

    // Put error msg in input text box of original page
    document.getElementById("output").value = "see popup window";
   }
}
