// Write a function called findUnique which returns the only unique number from an array.

// All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.

// Example
// Input:

// [ 1, 8, 4, 4, 6, 1, 8 ]
// Expected output:

// 6

function findUnique(numbers) {
    const numbersCount = {};

    for (const number of numbers) {
        numbersCount[number] = (numbersCount[number] || 0) + 1;
    }

    for (const number of numbers) {
        if (numbersCount[number] === 1) {
            return number;
        }
    }
}

console.log(findUnique([1, 8, 4, 4, 6, 1, 8]))