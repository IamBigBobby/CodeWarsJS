// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

function getLengthOfMissingArray(arrayOfArrays) {
    if (!arrayOfArrays || arrayOfArrays.length === 0) {
        return 0;
    }

    for (let arr of arrayOfArrays) {
        if (!arr || arr.length === 0) {
            return 0;
        }
    }

    const sortedArray = arrayOfArrays.sort((a, b) => a.length - b.length);

    for (i = 0; i < sortedArray.length - 1; i++){
        if (sortedArray[i].length === 0 || sortedArray[i] === null) {
            return 0
        }
        if (sortedArray[i + 1].length !== sortedArray[i].length + 1) {
            return sortedArray[i].length + 1;
        }
    }
}

console.log(getLengthOfMissingArray([[4, 4, 2, 1, 1, 0, 0],
    [1, 1, 4, 4, 4, 4],
    [1, 0, 3, 1, 4, 0, 2, 2, 1],
    [1, 0, 2, 1, 1, 1, 0, 2, 0, 4, 4, 4, 2],
    [4, 3, 2, 4],
    [1, 1, 3, 3, 2, 0, 3, 3],
    [2, 4, 2, 4, 0, 4, 4, 0, 4, 0],
    [4, 3, 3, 2, 4, 1, 0, 1, 4, 3, 2],
    [0, 4, 1, 0, 0, 1, 4, 0, 3, 0, 1, 4]])); // 3