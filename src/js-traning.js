// funtion of random number from -100 to 100
function getRandomNumbers () {
    return Math.floor(Math.random() * 201) - 100;
};
// defind length of array 
const arrayRandomNumbers = Array.from({ length: 50 }, getRandomNumbers)

// Logic 
const isSquare = function(arrayRandomNumbers){
    return arrayRandomNumbers.filter(randomNumber => randomNumber > 0 && Number.isInteger(Math.sqrt(randomNumber)))
};

// Show result in the console
console.log(isSquare(arrayRandomNumbers));

// cockroach task
function cockroachSpeed(speed) {
    return Math.floor(speed * 27.78)
};

console.log(cockroachSpeed(1.08))