

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

var saveBtn = $(".saveBtn");
//when save button for time block is clicked want to save the new text
saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var todo = $(this).siblings(".todo").val();

    localStorage.setItem(time, todo);
});


//display the text even after page is refreshed
function saveTodo() {
// for each time block
    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentTodo = localStorage.getItem(currentHour);

        if(currentTodo !== null) {
            $(this).siblings(".todo").val(currentTodo);
        }
    });
}
// function call
saveTodo();