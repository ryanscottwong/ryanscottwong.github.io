$(document).ready(function () {
    $('.answer').hide();

    // Attach a click handler to the h2 elements.
    $(".main p").click(function () {
        // Save the h2 element that was clicked
        // as well as the following answer element.
        var p = $(this);
        var answer = p.next(".answer");

        if (answer.css("display") == "none") {
            // If the answer is currently not displayed,
            // display it with a sliding down motion,
            // and when done, add the "close" class to the h2 element.
            answer.slideDown(function () {
                p.addClass("coverClose");
            });
        }
        else {
            // Otherwise, fade the answer out, and when done,
            // remove the "close" class from the h2 element.
            answer.slideUp(function () {
                p.removeClass("coverClose");
            });
        }
    });
}); // end ready
