var randomNumber = Math.floor(Math.random() * 100) + 1;
 var attemptsLeft = 10;
function checkGuess() {
   var userGuess = document.getElementById('guess').value;
   var resultMessage = document.getElementById('result');
   var remainingGuessesMessage = document.getElementById('remainingGuesses');
   if (userGuess === '' || userGuess < 1 || userGuess > 100) {
     resultMessage.textContent = "Please enter a valid number between 1 and 100.";
     return;
   }
   userGuess = Number(userGuess);
   attemptsLeft--;
   if (userGuess === randomNumber) {
     resultMessage.textContent = "Congratulations! You guessed it right. The number was " + randomNumber + ".";
     disableInput();
   } else if (userGuess > randomNumber) {
     resultMessage.textContent = "Your guess is too high!";
   } else if (userGuess < randomNumber) {
     resultMessage.textContent = "Your guess is too low!";
   }
   if (attemptsLeft > 0) {
     remainingGuessesMessage.textContent = "You have " + attemptsLeft + " guesses remaining.";
   } else {
     remainingGuessesMessage.textContent = "Game over! The number was " + randomNumber + ".";
     disableInput();
   }
 }
 function disableInput() {
   document.getElementById('guess').disabled = true;
   document.querySelector('button').disabled = true;
 }