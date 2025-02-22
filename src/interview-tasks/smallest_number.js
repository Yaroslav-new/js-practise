/*
// finding the smallest positive intenger (greater than 0) hat doesn't occur in array

// funtion of random number from -100 to 100
function getRandomNumbers () {
    return Math.floor(Math.random() * 201) - 100;
};

// defind length of array 
const arrayRandomNumbers = Array.from({ length: 100 }, getRandomNumbers)
*/

const arrayA = [10, 5, 3, 0, 1, 2];

function solution(arrayA) {
    const numberSet = new Set(arrayA.filter(num => num > 0));
    let smallerNumber = 1;
    while (numberSet.has(smallerNumber)) {
        smallerNumber++;
    }
    return smallerNumber;
}

console.log(solution(arrayA)); 
