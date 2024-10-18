// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    const sentenceArr = s.split(' ');
    let shortestWordLength = sentenceArr[0].length;

    for (let i = 0; i < sentenceArr.length; i++){
        if (sentenceArr[i].length < shortestWordLength){
            shortestWordLength = sentenceArr[i].length;
        }
    }

    return shortestWordLength;
}

// const findShort = (s) => s
//   .split(' ')
//   .sort((a, b) => b.length - a.length)
//   .pop()
//   .length;

console.log(findShort("Let's travel abroad shall we"))

