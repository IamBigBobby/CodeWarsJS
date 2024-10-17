// Write a function that returns the number of arguments it received.

// args_count() --> 0
// args_count('a') --> 1
// args_count('a', 'b') --> 2

const args_count = (...args) => {
    return [...args].length;
}

console.log(args_count(1, 2, 3, "yes"))
