function celsius()
{
  rules: {
    template: { required: true, number: true, min: 0}
  },
  messages: {
    temp: "Please input a numeric value"
  },
  errorPlacement: function(error, element) {
  if ( element.is(":text")) {
    error.appendTo( element.parent());
  }
  else {
    error.insertAfter(element);
  }
}
