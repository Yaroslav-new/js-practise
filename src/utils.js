// funtion of random number from -100 to 100
export function getRandomNumbers () {
    return Math.floor(Math.random() * 201) - 100;
};
// defind length of array with length 50
export const arrayRandomNumbers = Array.from({ length: 50 }, getRandomNumbers)