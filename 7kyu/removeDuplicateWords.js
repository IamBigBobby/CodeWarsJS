// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'


function removeDuplicateWords (s) {
    const arrS = s.split(' ');
    const objS = arrS.reduce((acc, word) => {
        if (word in acc) {
            acc[word] += 1;
        } else {
            acc[word] = 1;
        }
        return acc;
    }, {});

    return Object.keys(objS).join(' ');
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))