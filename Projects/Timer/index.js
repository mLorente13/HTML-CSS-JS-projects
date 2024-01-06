document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("themeSelector__btn")) {
        changeTheme(event.target.classList[2]);
        changeIcon(event.target);
    } else if (event.target.parentElement.classList.contains("start")) {
        startTimer();
    } else if (event.target.parentElement.classList.contains("reset")) {
        resetTimer();
    } else if (event.target.parentElement.classList.contains("stop")) {
        stopTimer();
    }
});

function changeTheme(theme) {
    if (theme == "fa-sun") {
        document.body.classList.remove("light");
        document.body.classList.add("night");
    } else {
        document.body.classList.remove("night");
        document.body.classList.add("light");
    }
}

function changeIcon(icon) {
    if (icon.classList.contains("fa-sun")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
}

let timer = document.querySelector(".timer");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let timerHours = document.querySelector(".timer__container__time__hours");
let timerMinutes = document.querySelector(".timer__container__time__minutes");
let timerSeconds = document.querySelector(".timer__container__time__seconds");
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
    setInterval(function () {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
        if (hours == 24) {
            hours = 0;
        }
        updateClock();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopTimer() {
    clearInterval(interval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetTimer() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateClock();
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function updateClock() {
    timerHours.textContent = hours < 10 ? "0" + hours : hours;
    timerMinutes.textContent = minutes < 10 ? "0" + minutes : minutes;
    timerSeconds.textContent = seconds < 10 ? "0" + seconds : seconds;
}
