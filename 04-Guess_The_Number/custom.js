// +++++++++ OLD CODE ++++++++++
// let randomNum = parseInt(Math.random() * 100 + 1);
// console.log(randomNum);

// const submit = document.querySelector("#subt");
// const userInput = document.querySelector("#guessField");
// const guessSlot = document.querySelector(".guesses");
// const remaining = document.querySelector(".lastResult");
// const lowOrHi = document.querySelector(".lowOrHi");
// const startOver = document.querySelector(".resultParas");
// const labelText = document.querySelector(".labelText");

// const p = document.createElement("p");

// let prevGuess = [];
// let numGuess = 1;
// let playGame = true;

// if (playGame) {
//   submit.addEventListener("click", function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     if (!guess || guess <= 0 || isNaN(guess)) {
//       //   console.log("Please Enter a valid Number");
//       labelText.innerHTML = "Please Enter a valid Number";
//       return;
//     } else {
//       console.log(guess);
//       labelText.innerHTML = "";
//       validateGuess(guess);
//     }
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert("Please Enter a valid Number");
//   } else if (guess < 1) {
//     alert("Please Enter a number more than 1");
//   } else if (guess > 100) {
//     alert("Please Enter a number less than 100");
//   } else {
//     prevGuess.push(guess);
//     if (numGuess === 11) {
//       displayGuess(guess);
//       displayMessage(`Game Over! Random number was ${randomNum}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNum) {
//     displayMessage(`you guessd it right`);
//     endGame();
//   } else if (guess < randomNum) {
//     displayMessage(`Number is TOOO Low`);
//   } else if (guess > randomNum) {
//     displayMessage(`Number is TOOO High`);
//   }
// }

// function displayGuess(guess) {
//   userInput.value = "";
//   guessSlot.innerHTML += `${guess},`;
//   numGuess++;
//   remaining.innerHTML = `${11 - numGuess}`;
// }

// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//   userInput.value = "";
//   userInput.setAttribute("disabled", "");
//   p.classList.add("button");
//   p.innerHTML = `<button id="newGame">Start New Game</button>`;
//   startOver.appendChild(p);
//   playGame = false;
//   newGame();
// }
// function newGame() {
//   const newGameButton = document.querySelector("#newGame");
//   newGameButton.addEventListener("click", function (e) {
//     randomNum = parseInt(Math.random() * 100 + 1);
//     prevGuess = [];
//     numGuess = 1;
//     guessSlot.innerHTML = "";
//     lowOrHi.innerHTML = "";
//     remaining.innerHTML = `${11 - numGuess}`;
//     userInput.removeAttribute("disabled");
//     startOver.removeChild(p);
//     playGame = true;
//   });
// }

// +++++++++++ OPTIMIZED CODE +++++++++++
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

// Intialize the variables
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const labelText = document.querySelector(".labelText");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

// onSubmit event code
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const guess = parseInt(userInput.value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    labelText.textContent = "Please enter a valid number between 1 and 100.";
  } else {
    labelText.textContent = "";
    validateGuess(guess);
  }
});

// Function for Validate the value
const validateGuess = (guess) => {
  prevGuess.push(guess);
  displayGuess(guess);

  if (guess === randomNum) {
    displayMessage("You guessed it right!");
    endGame();
  } else if (numGuess === 11) {
    displayMessage(`Game Over! Random number was ${randomNum}`);
    endGame();
  } else {
    displayMessage(
      guess < randomNum ? "Number is TOO Low" : "Number is TOO High"
    );
  }
};

// Function for display guess
const displayGuess = (guess) => {
  userInput.value = "";
  guessSlot.textContent += `${guess}, `;
  remaining.textContent = `${11 - numGuess}`;
  numGuess++;
};

// Function for display message
const displayMessage = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

// Function for end the game
const endGame = () => {
  userInput.value = "";
  userInput.setAttribute("disabled", true);
  p.classList.add("button");
  p.innerHTML = `<button id="newGame" class="btn btn-secondary mt-2">Start New Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};

// Function for New game
const newGame = () => {
  document.querySelector("#newGame").addEventListener("click", () => {
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);
    prevGuess = [];
    numGuess = 1;
    guessSlot.textContent = "";
    lowOrHi.textContent = "";
    remaining.textContent = "10";
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
};
