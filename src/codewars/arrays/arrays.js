/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.
*/

function check (a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] == x) {
            return true;
        }
    }
    return false;
}

function check1 (a, x) {
    return a.includes(x);
}