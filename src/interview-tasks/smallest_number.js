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




// Task from js course 
const task14Object = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friend: 'wolf',
	keys() {
		for (let keys in this) {
		}
	},
	call() {
		return `My name is ${this.name} ${this.lastName}, and I am ${this.age} years old. My best friend is a ${this.friend}`
	}
};

console.log(task14Object.call()); 