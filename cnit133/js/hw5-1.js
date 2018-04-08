$(document).ready(function(){

  $("#myform").validate({

		messages: {
			name: "Please enter your name",
      size: "Please choose a size",
      cheese: "Please choose a cheese",
      topping: "Please choose at least one topping",
	    },

    /* the following is needed to place an error msg after the radio and checkbox elements */
    errorPlacement: function(error, element) {
    if ( element.is(":radio") || element.is(":checkbox")) {
      error.appendTo( element.parent());
      }
    else {
      error.insertAfter(element);
      }
    } // end errorPlacement
  });
});
