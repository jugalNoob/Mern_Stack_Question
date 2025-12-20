function callBack ......///////////

function one(a, b) {
    return a + b;
}

function two(a, b) {
    return a * b;
}

function sum(num1, num2, operat) {
    return operat(num1, num2);
}

console.log(sum(5, 5, one)); // Output: 10
console.log(sum(5, 5, two)); // Output: 25

/// Function declaration
function sum(a , b){
    return a+b
}
console.log(sum(5,5))
