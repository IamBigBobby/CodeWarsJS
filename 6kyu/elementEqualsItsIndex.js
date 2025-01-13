// Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index.
// Return -1 if there is no such index.

// Your algorithm should be very performant.

// [input] array of integers ( with 0-based nonnegative indexing )
// [output] integer

// Examples:
// input: [-8,0,2,5]
// output: 2 # since array[2] == 2

// input: [-1,0,3,6]
// output: -1 # since no index in array satisfies array[index] == index
// Random Tests Constraints:
// Array length: 200 000

// Amount of tests: 1 000

// Time limit: 150 ms

function indexEqualsValue(a) {
    let left = 0;
    let right = a.length - 1;
    let result = -1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (a[middle] === middle) {
            result = middle;
            right = middle - 1;
        } else if (a[middle] < middle) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return result;
}


console.log(indexEqualsValue([-8,0,2,5]))
