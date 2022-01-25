var saveBtn = $(".saveBtn");

// Display today's date
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

//saveBtn click listener
saveBtn.on("click", function () {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").text();
    //console.log(this)

    // Save text in local storage
    localStorage.setItem(time, plan);
});

function usePlanner() {
    $(".hour").each(function () {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);
        //console.log(this);
        //console.log(currHour);

        if (currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    })
};

function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function () {
        var currHour = parseInt($(this).attr("id"));

        console.log(this)

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

usePlanner();
timeBlockColor();