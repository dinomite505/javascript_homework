// Function that either calls it or crashes absolutely everything
const russianRoulette = fn => {
    // Pick a random number from 0 to 5
    const randomNumber = Math.floor(Math.random() * 6)

    // crash the code with an infinite loop if the random number was 5
    while (randomNumber === 5) {}
    
    // Call the function and return its result if the number wasn’t 5
    return fn()
}

russianRoulette(() => console.log("You are lucky!"))
//If you no longer see "You are lucky message" it means you are sent to afterlife.


// Couldn't solve your task but I used Math.floor(Math.random() to get that random integer
