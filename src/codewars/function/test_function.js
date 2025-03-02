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