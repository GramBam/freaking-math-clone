let x, y, answer;
let result = false;
const correctBtn = document.getElementById('correct');
const incorrectBtn = document.getElementById('incorrect');

document.addEventListener('DOMContentLoaded', startGame());

function startGame() {
  genQuestion();
  correctBtn.addEventListener('click', checkIfCorrect);
  incorrectBtn.addEventListener('click', checkIfIncorrect);
}

function genNumbers() {
  function getRandomNum() {
    return Math.floor((Math.random() * 10) + 1);
  }
  x = getRandomNum();
  y = getRandomNum();
  answer = Math.floor(Math.random() * 20) + 1;
}

function genQuestion() {
  genNumbers();
  document.getElementById('question').innerHTML = x + " + " + y;
  document.getElementById('answer').innerHTML = answer;
}

function checkIfCorrect() {
  if(x + y === answer) {
    genQuestion();
  } else {
    gameOver();
  }
}

function checkIfIncorrect() {
  if(x + y === answer) {
    gameOver();
  } else {
    genQuestion();
  }
}


function gameOver() {
  alert('game over!')
}