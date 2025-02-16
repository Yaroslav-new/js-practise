// funtion of random number from -100 to 100
function getRandomNumbers () {
    return Math.floor(Math.random() * 201) - 100;
};
// defind length of array 
const arrayRandomNumbers = Array.from({ length: 50 }, getRandomNumbers)

const isSquare = function(arrayRandomNumbers){
    return arrayRandomNumbers.filter(randomNumber => randomNumber > 0 && Number.isInteger(Math.sqrt(randomNumber)))
};

console.log(isSquare(arrayRandomNumbers));