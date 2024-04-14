const randomNumber = Math.round((Math.random() * 100))
const inputField = document.querySelector('.js-input-field');
const submitButton = document.querySelector('.js-submit-button');
let remainingGuesses = 10;
const remainingGuessesDisplay = document.querySelector('.remaining-guess-count');
const resultMsg = document.querySelector('.result');
const guessCount = [];


submitButton.addEventListener('click', () => {
  const guess = parseInt(inputField.value);
  inputField.value = '';
  validationGuessInput(guess);
});

function validationGuessInput(guess) {
  if (isNaN(guess)) {
    alert(`please enter valid Number`);
  }
  else if (guess <= 0) {
    alert(`please enter number greater than zero`);
  }
  else if (guess > 100) {
    alert(`please enter number 100 or less`);
  }
  else {
    gamePlay(guess);
    remainingGuesses--;
    remainingGuessesDisplay.innerHTML = remainingGuesses;
    previousGuessCount(guess);
  }
}

function gamePlay(guess) {
  if (remainingGuesses === 1) {
    displayResult(`game over the number was ${randomNumber}`)
    gameEnd();
    return;
  }
  if (guess === randomNumber) {
    displayResult(`you won the number was ${randomNumber}`);
    resultMsg.style.color = 'green';
    gameEnd();
  }

  else if (guess > randomNumber) {
    displayResult(`please enter smaller number`);
  }
  else {
    displayResult(`please enter bigger number`);
  }
}

function displayResult(message) {
  // const resultMsg = document.querySelector('.result');
  resultMsg.innerHTML = message;
}


function gameEnd() {
  inputField.setAttribute('disabled', '');
  startGame();
}

function startGame() {
  const startButton = document.querySelector('.start-game-button');
  startButton.addEventListener('click', () => {
    inputField.removeAttribute('disabled');
    displayResult('');
    remainingGuesses = 10;
    remainingGuessesDisplay.innerHTML = 10;
    document.querySelector('.guess').innerHTML = '';
  });
}

function previousGuessCount(guess) {
  document.querySelector('.guess').innerHTML += `${guess} : `;
}