const arrayA = [10, 5, 3, 0, 1, 2];

// Foreach solution
function solution(arrayA) {
    const numberSet = new Set();
    arrayA.forEach(num => { if (num > 0) numberSet.add(num); });

    let smallerNumber = 1;
    while (numberSet.has(smallerNumber)) {
        smallerNumber++;
    }
    return smallerNumber;
};

console.log(solution(arrayA));

// Reduce solution 

const arrayB = [10, 5, 3, 0, 1, 2];

function solution(arrayB) {
    const numberSet = arrayB.reduce((set, num) => {
        if (num > 0) set.add(num);
        return set;
    }, new Set());

    let smallerNumber = 1;
    while (numberSet.has(smallerNumber)) {
        smallerNumber++;
    }
    return smallerNumber;
};

console.log(solution(arrayB));