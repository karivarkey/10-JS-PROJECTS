function main() {

    var currentTime = new Date(); // Current date and time
    var newYear = new Date(currentTime.getFullYear() + 1, 0, 1); // New Year's Day of next year

    var timeRemaining = newYear - currentTime; // Difference in milliseconds

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    // // Display the remaining time
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    console.log(days)
}

document.addEventListener('DOMContentLoaded', function () {
    var intervalId = setInterval(main, 1000);
});