const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const Christmas = "25 December 2023";

//I calculated the time difference in milliseconds.
function countdown() {
    const ChristmasDate = new Date(Christmas);
    const currentDate = new Date();

    //divide by 1000 to convert from ms into seconds.
    const totalSeconds = (ChristmasDate - currentDate) / 1000;

    //the total seconds are divided by the number of seconds in an hour (3600) and then by the number of hours in a day (24).

    const days = Math.floor(totalSeconds / 3600 / 24);
    //remaining hours/minutes are calculated by taking the % of the total seconds divided by the number of seconds in an hour/minutes respectively
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

//this function that checks if time is less than 10 and if it is, it adds 0 in front of it.
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);