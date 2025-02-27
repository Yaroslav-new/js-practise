import { getRandomNumbers, arrayRandomNumbers } from '../../utils.js';

// Logic of finding an ideal Square
const isSquare = function (arrayRandomNumbers) {
    return arrayRandomNumbers.filter(randomNumber => randomNumber > 0 && Number.isInteger(Math.sqrt(randomNumber)))
};

// Show result in the console
console.log(isSquare(arrayRandomNumbers));

// cockroach task
function cockroachSpeed(speed) {
    return Math.floor(speed * 27.78)
};

console.log(cockroachSpeed(1.08))

// an array of words that transfer into a sentence
const words = ['hello', 'world', 'this', 'is', 'great']

function smash(words) {
    return words.join(' ');
};

console.log(smash(words));

/*
Task:
   Given an integral number, determine if it's a square number:

   In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
*/
const isSquareTask2 = function (number) {
    for (let i = 0; i * i <= number; i++) {
        if (i * i === number) {
            return true;
        }
    }
    return false;
};

console.log(isSquareTask2(10))

// example 2 
const isSquareTask3 = function (number) {
    if (n < 0) return false; // Negative numbers cannot be perfect squares
    let sqrt = Math.sqrt(number);
    return Number.isInteger(sqrt);
};