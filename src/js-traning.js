const arrayRandomNumbers = [0, -2, -10, 3, 6, 9, 0, 11, 1, 2];

const isSquare = function(arrayRandomNumbers){
    return arrayRandomNumbers > 0 && Number.isInteger(Math.sqrt(arrayRandomNumbers)); 
};