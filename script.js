firstSetEl = document.getElementById("firstQuestionSet");
secondSetEl = document.getElementById("secondQuestionSet");
thirdSetEl = document.getElementById("thirdQuestionSet");
startBtnEl = document.getElementById("startBtn");
timerEl = document.getElementById("timer");
headerEl = document.getElementById("header");
scoreEl = document.getElementById("score");

// By default I want to hide all the questions
firstSetEl.classList.add("hide");
firstSetEl.dataset.display = "hide";
// *------*
secondSetEl.classList.add("hide");
secondSetEl.dataset.display = "hide";
// *------*
thirdSetEl.classList.add("hide");
thirdSetEl.dataset.display = "hide";

var timeLeft = 30;
var isActive = true;
var scoreBoard = 0;

(scoreEl.textContent = "Your Score :"), scoreBoard;

function startTimer() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 0 && isActive) {
      timeLeft--;
      timerEl.textContent = "time remaining : " + timeLeft;
    } else {
      clearInterval(timeInterval);
    }
  }, 1000);
}

function endGame() {
  isActive = false;
  thirdSetEl.classList.add("hide");
  thirdSetEl.dataset.display = "hide";

  // stops the timer
  // brings up the text area
  // saves the score to the localstorage
}

function showThirdQuestions(event) {
  console.log("third time around :", event.target.dataset.correct);


  secondSetEl.classList.add("hide");
  secondSetEl.dataset.display = "hide";
  // ------
  thirdSetEl.classList.remove("hide");
  thirdSetEl.dataset.display = "show";

  thirdSetEl.addEventListener("click", endGame);
}

function showSecondQuestions(event) {
  if (event.target.dataset.correct === "isAnswer") {
    scoreBoard++;
    scoreEl.textContent = "Your Score : " + scoreBoard;
  }else{
    scoreBoard = scoreBoard - 2;
    scoreEl.textContent = "Your Score : " + scoreBoard;
  }
  firstSetEl.classList.add("hide");
  firstSetEl.dataset.display = "hide";
  // ------
  secondSetEl.classList.remove("hide");
  secondSetEl.dataset.display = "show";

  secondSetEl.addEventListener("click", showThirdQuestions);
}

function startGame(event) {
  console.log("this is the first time :" + event);
  startTimer();
  headerEl.classList.add("hide");
  firstSetEl.classList.remove("hide");
  firstSetEl.dataset.display = "show";
  firstSetEl.addEventListener("click", showSecondQuestions);
}

startBtnEl.addEventListener("click", startGame);
