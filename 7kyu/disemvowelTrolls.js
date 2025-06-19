function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = str.split('').filter((char) => !vowels.includes(char.toLowerCase())).join('');
    return result;
}

console.log(disemvowel('This website is for losers LOL!'));

