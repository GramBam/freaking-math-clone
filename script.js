let x, y, answer;
let score = 0;
let gameEnded = false;
let timeOut = undefined;
const timeLimit = 3000;
const canvas = document.getElementById('canvas');
const correctBtn = document.getElementById('correct');
const incorrectBtn = document.getElementById('incorrect');
const scoreDisplay = document.getElementById('score');
const timer = document.getElementById('timer');
const gameOverScreen = document.getElementById('game-over');
const finalScore = document.getElementById('final-score');
const playAgain = document.getElementById('play-again');
const gameOverSound = new Audio('gameOver.mp3');

document.addEventListener('DOMContentLoaded', startGame());

function startGame() {
  gameOverScreen.className = 'hidden';
  updateScore();
  genQuestion();
  correctBtn.addEventListener('click', checkIfCorrect);
  incorrectBtn.addEventListener('click', checkIfIncorrect);
  playAgain.addEventListener('click', startGame);
}

function genNumbers() {
  function getRandomNum() {
    return Math.floor((Math.random() * 10) + 1);
  }
  x = getRandomNum();
  y = getRandomNum();
  answer = genAnswerNum(((x+y) - 1),((x+y) + 1));
}

function genQuestion() {
  randomColour();
  genNumbers();
  document.getElementById('question').innerHTML = x + " + " + y;
  document.getElementById('answer').innerHTML = answer;
}

function genAnswerNum(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function checkIfCorrect() {
  if(x + y === answer) {
    score++;
    updateScore();
    genQuestion();
    restartTimer();
  } else {
    gameOver();
  }
}

function checkIfIncorrect() {
  if(x + y === answer) {
    gameOver();
  } else {
    score++
    updateScore();
    genQuestion();
    restartTimer();
  }
}

function restartTimer() {
  if (timeOut) { 
    timer.className = ''
    window.clearTimeout(timeOut)
  }
  startTimer()
}

function startTimer () {
  window.setTimeout(function () {
    timer.className = 'active'
  }, 100)
    timeOut = window.setTimeout(function() {
    if (!gameEnded) {
      gameOver();
    }
  }, timeLimit)
}

function updateScore() {
  scoreDisplay.innerHTML = "Score: " + score;
}

function randomColour() {
  const colour = '#' + Math.floor(Math.random() * 16777215).toString(16);
  canvas.style.backgroundColor = colour;
}

function gameOver() {
  gameOverSound.play();
  gameEnded = true;
  gameOverScreen.className = 'displayed';
  gameOverScreen
  finalScore.innerHTML = 'Score: ' + score;
  score = 0;
  updateScore();
}