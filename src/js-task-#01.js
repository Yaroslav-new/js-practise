function getRandomNumbers () {
    return Math.floor(Math.random() * 201) - 100;
};
const arrayA = Array.from({ length: 50 }, getRandomNumbers)

function solution(arrayA) {
    
    const numberSet = new Set(arrayA.filter(num => num > 0));

    let smallerNumber = 1;
    
    while (numberSet.has(smallerNumber)) {
        smallerNumber++;
    };
    return smallerNumber;
};

console.log(solution(arrayA));