/**
 * GAME FUNCTION:
 * Player must guess a number between min and max
 * Player gets certain amount of guesses
 * Notify player of guesses remaining
 * Notify the player correct answers in case of loose
 * Let player choose to play again
 */
//Game Values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;
//UI Elements
const UIgame = document.querySelector("#game"),
  UIminNum = document.querySelector(".min-num"),
  UImaxNum = document.querySelector(".max-num"),
  UIguessBtn = document.querySelector("#guess-btn"),
  UIguessInput = document.querySelector("#guess-input"),
  UImessage = document.querySelector(".message");
//append UImin-max values from js
UIminNum.textContent = min;
UImaxNum.textContent = max;
//Listen for guess
UIguessBtn.addEventListener("click", function () {
  let guess = parseInt(UIguessInput.value);
  //Validate
  if (isNaN(guess) || guess < min || guess > max) {
    console.log("setMessageShouldWork");
    console.log(guess);
    setMessage(`please enter a number between${min} and ${max} `, "red");
  }
  //Check if won
  if (guess === winningNum) {
    //Game Over -- won

    //Disable Input
    UIguessInput.disabled = true;
    //Change border color
    UIguessInput.style.borderColor = "green";
    //Set Message to won
    setMessage(`Winning number is ${guess}, horray!!`, "green");
  } else {
    //Wrong number
    guessesLeft--;
    console.log(guessesLeft);
    if (guessesLeft <= 0) {
      //Game Over -- loose
      UIguessInput.disabled = true;
      UIguessInput.style.borderColor = "red";
      setMessage(`Game Over, correct answer was ${winningNum} `);
    } else {
      //Game Continue -- Wrong Answer
      UIguessInput.style.borderColor = "yellow";
      setMessage(`Guess is NOT correct, ${guessesLeft} guesses left.. `, "red");
      UIguessInput.value = "";
    }
  }
});

function setMessage(message, color) {
  //update message content in the dom
  UImessage.style.color = color;
  UImessage.textContent = message;
}
