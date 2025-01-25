// Your job is to group the words in anagrams.

// What is an anagram ?
// star and tsar are anagram of each other because you can rearrange the letters for star to obtain tsar.

// Example
// A typical test could be :

// // input
// ["tsar", "rat", "tar", "star", "tars", "cheese"]

// // output
// [
//   ["tsar", "star", "tars"],
//   ["rat", "tar"],
//   ["cheese"]
// ]
// Hvae unf !

// I'd advise you to find an efficient way for grouping the words in anagrams otherwise you'll probably won't pass the heavy superhero test cases

function groupAnagrams(words){
    const anagramGroups = new Map();

    const generateKey = (word) => word.split('').sort().join('');

    for (const word of words) {
        const key = generateKey(word);
        if (anagramGroups.has(key)) {
            anagramGroups.get(key).push(word);
        } else {
            anagramGroups.set(key, [word]);
        }
    }

    return Array.from(anagramGroups.values());
}

console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));