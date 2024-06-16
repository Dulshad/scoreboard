const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");
const timerEl = document.getElementById("timer");

let homeScore = 0;
let guestScore = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;
let time = 0;

/**
 * TODO make the scores and timer able to be edited by click and typing
 * TODO saving the current scores and time to local storage so they can be retrieved if you refresh
 **/


function homeAdjustScore(num, type) {
    if (type === 'add') {
        homeScore += num;
        homeScoreEl.textContent = homeScore;
    }

    if (type === 'subtract') {
        homeScore -= num;
        if (homeScore <= 0){
            homeScore = 0;
        }
        homeScoreEl.textContent = homeScore;
    }

    this.updateLeader();
}

function guestAdjustScore(num, type) {
    if (type === 'add') {
        guestScore += num;
        guestScoreEl.textContent = guestScore;
    }

    if (type === 'subtract') {
        guestScore -= num;
        if (guestScore <= 0){
            guestScore = 0;
        }
        guestScoreEl.textContent = guestScore;
    }

    this.updateLeader();
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    if (homeScoreEl.classList.contains("leader")) {
        homeScoreEl.classList.remove("leader");
    }
    if (guestScoreEl.classList.contains("leader")) {
        guestScoreEl.classList.remove("leader");
    }

    this.resetTimer();
}

function startTimer() {
    if (timer === null) {
        timer = setInterval(matchTimer, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    this.updateTimerDisplay();
}

function matchTimer() {
    seconds += 1;
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }

    if (minutes === 60) {
        minutes = 0;
        hours += 1;
    }

    updateTimerDisplay()
}

function updateTimerDisplay() {
    time = ((hours < 10) ? ('0' + hours) : hours) + ":" + ((minutes < 10) ? ('0' + minutes) : minutes) + ":" + ((seconds < 10) ? ('0' + seconds) : seconds);
    timerEl.innerHTML = time.toLocaleString();
}

function updateLeader() {
    if (homeScore > guestScore) {
        if (guestScoreEl.classList.contains("leader")) {
            guestScoreEl.classList.remove("leader");
        }
        if (!homeScoreEl.classList.contains("leader")) {
            homeScoreEl.classList.add("leader");
        }
    }
    else if (guestScore > homeScore) {
        if (homeScoreEl.classList.contains("leader")) {
            homeScoreEl.classList.remove("leader");
        }
        if (!guestScoreEl.classList.contains("leader")) {
            guestScoreEl.classList.add("leader");
        }
    }
    else {
        if (homeScoreEl.classList.contains("leader")) {
            homeScoreEl.classList.remove("leader");
        }
        if (guestScoreEl.classList.contains("leader")) {
            guestScoreEl.classList.remove("leader");
        }
    }
}
