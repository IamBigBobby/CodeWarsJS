// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

// Note:

// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
// Example: (Input --> output)

// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""

function formatWords(words){
  if (words === null || words.length === 0) {
    return '';
  }

  const filteredWord = words.filter((word) => {
    if (word !== ''){
      return word;
    }
  })

  if (filteredWord.length === 2){
    return filteredWord.join(' and ')
  } else if (filteredWord.length > 2) {
    return `${filteredWord.slice(0, -1).join(', ')} and ${filteredWord[filteredWord.length - 1]}`
  } else{
    return filteredWord[0] || '';
  }
}

console.log(formatWords(['']));