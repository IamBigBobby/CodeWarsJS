// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    let countOfVowels = 0

    for (let i = 0; i < str.length; i ++) {
        if (vowelsArr.includes(str[i])) {
            countOfVowels += 1;
        }
    }

    return countOfVowels;
}

console.log(getCount("abracadabra"))


