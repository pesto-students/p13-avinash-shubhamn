function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guesses = 0;
  
    while (guesses < totalGuesses) {
      let userInput = prompt(
        guesses === 0 ? "Enter a number between 1 and 100." :
        userInput < numToGuess ? `${userInput} is too small. Guess a larger number.` :
        `${userInput} is too large. Guess a smaller number.`
      );
  
      if (userInput === null) {
        return 0; 
      }
  
      let guess = parseInt(userInput);
  
      if (isNaN(guess)) {
        alert("Please enter a number.");
        continue;
      }
  
      guesses++;
  
      if (guess === numToGuess) {
        return guesses;
      }
    }
  
    return 0; 
  }
  
  // Example usage
  let numToGuess = 5;
  let totalGuesses = 10;
  let result = playGuessingGame(numToGuess, totalGuesses);
  
  if (result === 0) {
    console.log("You ran out of guesses!");
  } else {
    console.log(`Congratulations! You guessed the number in ${result} guesses.`);
  }
  