// Task
// Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example
// For n = 152, the output should be 52;

// For n = 1001, the output should be 101.

// Input/Output
// [input] integer n

// Constraints: 10 ≤ n ≤ 1000000.

// [output] an integer

function deleteDigit(n) {
    const digitArr = n.toString().split('').map((_, index, arr) => {
        return `${arr.slice(0, index).join('')}${arr.slice(index + 1).join('')}`;
    });

    const digitArrInteger = digitArr.map((element) => {
        return Number(element);
    })

    return Math.max(...digitArrInteger);
}

console.log(deleteDigit(123))

