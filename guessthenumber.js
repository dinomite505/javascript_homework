const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to start the new game where you'd guess the number from 1-100
function startNewGame() {
    const min = 1;
    const max = 100;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let attempts = 0;
    
    // Outputs welcome message and guess the number once the script is run
    console.log("Welcome to the Guess the Number game!");
    console.log(`I've selected a random number between ${min} and ${max}. Try to guess it!\n`);

    // Field box to enter a valid number. If wrong it prompts you to enter a number between 1 and 100
    function guessNumber() {
    rl.question('Enter your guess: ', (input) => {
        const guess = parseInt(input);

        if (isNaN(guess) || guess < min || guess > max) {
        console.log('Please enter a valid number between 1 and 100.');
        guessNumber();
    } else {
        attempts++;

        
    if (guess === randomNumber) {
        console.log(`Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts.`);
        rl.question('Do you want to play again? (yes/no): ', (answer) => {
            if (answer.toLowerCase() === 'yes') {
            startNewGame();
            } else {
                console.log('Thanks for playing! Goodbye.');
                rl.close();
            }
        });
        } else if (guess < randomNumber) {
            console.log('Too low! Try again.');
            guessNumber();
        } else {
            console.log('Too high! Try again.');
            guessNumber();
        }
        }
    });
}

    guessNumber();
}

startNewGame();
