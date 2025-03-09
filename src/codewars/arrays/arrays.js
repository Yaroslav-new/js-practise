/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.
*/

function check(a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] == x) {
            return true;
        }
    }
    return false;
}

function check1(a, x) {
    return a.includes(x);
}

// Function to convert a name into initials
function abbrevName(name) {
    return name
        .split(' ')
        .map(letter => letter[0].toUpperCase())
        .join(".")
}

// return new array with specified length and filled in with specified value
let task4Func1 = (length, value) => {
    return new Array(length).fill(value);
};