

// displays current day month and year at top of page
var currentDay = moment(new Date()).format("MM/DD/YYYY");
$("#currentDay").text(currentDay);

function timeBlockColor() {
    //current hour
    var hour = moment().hours();

    // change color of time block depending on hour
    $(".time-block").each(function() {
        // control color of each individual time block by using id
        var currentHour = parseInt($(this).attr("id"));


        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// call the function 
timeBlockColor();

