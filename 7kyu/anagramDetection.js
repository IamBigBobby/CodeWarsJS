// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

var isAnagram = function(test, original) {
    if (test.length !== original.length) {
        return false;
    }

    const createObj = function(word) {
        return word.split('').reduce((acc, letter) => {
            const letterToLowerCase = letter.toLowerCase();
            if(letterToLowerCase in acc){
                acc[letterToLowerCase] += 1;
            } else {
                acc[letterToLowerCase] = 1;
            }
            return acc;
        }, {});
    } 

    const objTest = createObj(test);
    const objOriginal = createObj(original);

    for (key in objTest) {
        if (objTest[key] !== objOriginal[key]) {
            return false;
        }
    }

    return true;
};

console.log(isAnagram("Twoo", "WooT"))