function search() {
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

  // display number of occurences of the character if found in the string
  if (count != 0)
    document.getElementById("output").value = count +
    " occurrence(s) of " + key + " found";

  // display error message if character isn't found in the string
  else {

    // assemble HTML to pump into new window
    var myText = "<html>\n";
    myText += "<head>\n";
    myText += "<title>Character not found</title>\n";
    myText += "</head>\n";
    myText += "<body>\n";
    myText += "<div align='center'>\n";
    myText += "<strong>Search character " + key + " not found in text string</strong><br>\n";
    myText += "<input type='button' value='Close Window' onclick='window.close()'>\n";
    myText += "</div>\n";
    myText += "</body>\n";
    myText += "</html>";

    // open window on the upper right of the screen
    var errWindow = window.open("", "new_window", "top=220,left=50,width=300,height=100");

    errWindow.focus();

    // pump html into to this new opened window
    errWindow.document.write(myText);

    // tell browser that errWindow document is finished loading
    errWindow.document.close();

    // Put error msg in input text box of original page
    document.getElementById("output").value = "see popup window";
   }
}
