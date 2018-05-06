$(document).ready(
  function () {
    // Attach a click event handler to all the radio buttons in the attribute selection table
    $("#attributeTable :radio").click(function () {
        // The "this" variable refers to the radio button that was clicked.
        // The HTML code defines the name attribute of the radio button as the name of the CSS property
        // we want to set; the value of the radio button is the value we want to set the CSS property to.
        // By doing this, the CSS of the sample text can be set easily with the following line of code:
        $("#sampleText").css($(this).attr("name"), $(this).val());
    });

    // Attach a click event handler to the font size selection box
    $("#fontSize").change(function () {
        $("#sampleText").css($(this).attr("name"), $(this).val());
    });

    // Attach a click event handler to the checkboxes in the attribute selection table
    $("#attributeTable :checkbox").change(function () {
        $("#sampleText").css($(this).attr("name"), this.checked ? $(this).val() : "");
    });

    // Attach a click event handler to the radio buttons in the theme selection table
    $("#themeTable :radio").click(function () {
        // Clear specific CSS attributes that may have been set with the radio buttons in the attribute table
        // by selecting all the one that have the checked attribute, and firing the click event
        $("#attributeTable [checked]").click();

        // Reset the select box by setting the value to ""
        $("#fontSize").val("");

        // Remove any class already set, and set the class to the one selected.
        $("#sampleText").removeClass().addClass($(this).val());
    });

    // Attach a click event handler to the Reset All button
    $("#resetAll").click(function () {
        $("#themeTable [checked]").click(); // Clicks theme table elements that have a checked attribute
        $("#attributeTable [checked]").click(); // Clicks attribute table elements that have a checked attribute
        $("#fontSize").val(""); // Selects the font-size that has a value of ""
        $("#attributeTable :checked").click(); // Clicks all the checkboxes that are checked (to uncheck them)
    });
});
