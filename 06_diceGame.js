/* 
* The Concept

    A player will roll a die if it is in a state to be rolled. On each roll, they will score based off its value. So, we have a few problems to solve:
        We need a state to hold a players choice.
        A dictionary, or table, to hold the points depending on the roll.
    Variables to hold some data:
        Score
        The value of our die after its been rolled.
        The state of the die
        Number of possible rolls
        Our game will only allow players to take three chances to score.
        A way to create a random number from 1 to 6.
        A way to score our points
        An action for our player to take that will then hold various conditions.
        These conditions will need to check if the move is allowed, if the number of rolls are still within range, and provide a response if there is an error. 
*/

//* Variables
let score = 0; // default for the start of the turn
let dieRoll; // a variable to hold our roll value
let stateOfDie = 'not rolled'; // the current state of our die (not rolled / rolled)
let numRolls = 0; // starting count for our rolls allowed (1-3)

//* Dictionary
// 1 = 100, 2-6 = x*10
let scoring = {
    "1": 100,
    "2": 20,
    "3": 30,
    "4": 40,
    "5": 50,
    "6": 60,
}

//* State Machine
// dieState | "not rolled", "roll", "score"
let dieState = {
    "not rolled": ["roll", "throw"],
    "roll": ["score", "roll", 'throw'],
    "throw": ["score", "roll", "throw"],
    "score": ["not rolled"]
}

function scoreDice(dict, dieValue) {
    // This will update our score and provide us feedback.
    score += dict[dieValue];
    console.log(`Your score is: ${score}`);
}

function rollDie() {
    // We'll generate a random number and increase our roll count.
    dieRoll = Math.floor((Math.random() * 6) + 1); // assigning a random value to our global variable "dieRoll"
    numRolls++; // increasing our roll count (1-3)
}

function playState(task) {
    // pulling in our command and running our conditionals.
    let valid = dieState[stateOfDie];
    console.log(task);

    if(valid.includes(task)) {
        stateOfDie = task; // updating our stateOfDie to the "new" task

        if(stateOfDie === 'roll' || stateOfDie === "throw") {

            if(numRolls === 3) {
                console.log(`You've rolled ${numRolls} times and need to score! This roll doesn't count.`)
            } else {
                rollDie(); // starting our roll function to reassign dieRoll & increase numRolls value.
                console.log(`You rolled a ${dieRoll}. Would you like to roll again or finalize the score?`);
                scoreDice(scoring, dieRoll); // passing in our dictionary "scoring" and current value of global variable "dieRoll"
                console.log(`Number of rolls: ${numRolls}`);
            }

        }

        if(stateOfDie === 'score') {
            // resetting our varibales.
            dieRoll = 'not rolled';  
            numRolls = 0;
            console.log(`Final Score: ${score}!`);
            score = 0;
        }

    } else {
        console.error(`Invalid state for the die: ${stateOfDie} to ${task}`);
    }
}

playState('roll');
// playState('throw');
playState('something');
// playState('roll');
// playState('score');