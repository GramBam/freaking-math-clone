let x, y;

function generateNumbers() {
  function getRandom12() {
    return Math.floor((Math.random() * 12) + 1);
  }
  x = getRandom12();
  y = getRandom12();
}

function genQuestion() {
  generateNumbers();
  document.getElementById('question').value = x + " + " + y;
  document.getElementById('answer').value = '';
  document.getElementById('total').value = ''
}

function checkAnswer() {
  alert(x + y === +document.getElementById('answer').value ? 'Great' : 'Not Yet');
  document.getElementById('total').value = x + y;
}

genQuestion();