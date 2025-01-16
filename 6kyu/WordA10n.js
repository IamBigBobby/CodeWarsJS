// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

function abbreviate(string) {
    const changeWord = function (word) {
        const punctuation = ['.', '?', '!', ',', ';', ':'];
        const wordArr = word.split('');
        const lastChar = wordArr[wordArr.length - 1];
    
        if (punctuation.includes(lastChar)) {
            const firstLetter = wordArr[0];
            const lastLetter = wordArr[wordArr.length - 2];
            const coreLength = wordArr.length - 3;
    
            return coreLength > 1
                ? `${firstLetter}${coreLength}${lastLetter}${lastChar}`
                : word;
        } else {
            const firstLetter = wordArr[0];
            const lastLetter = wordArr[wordArr.length - 1];
            const coreLength = wordArr.length - 2;
    
            return coreLength > 1
                ? `${firstLetter}${coreLength}${lastLetter}`
                : word;
        }
    };
    
   const result = string.split(' ').map((word) => {
    if(word.includes('-')){
        return word.split('-').map((wordPart) => {
            return changeWord(wordPart);
        }).join('-')
    }
    return changeWord(word);
   }).join(' ')

   return result;
}

console.log(abbreviate('elephant-rides are really fun!'));