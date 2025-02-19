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
