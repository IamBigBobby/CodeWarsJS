// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {
    

    const arrStr = strng.split('');
    let word = '';
    let digit = '';

    for (let i = strng.length - 1; i >= 0; i--) {
        const char = arrStr[i];
        if (isNaN(char)) {
            word = strng.slice(0, i + 1);
            digit = strng.slice(i + 1);
            break;
        }
    }

    if (word === '') {
        digit = strng;
    }

    if (digit === '' && word) {
        return `${word}1`
    }

    let parseIncrementedDigit = (parseInt(digit, 10) + 1).toString();
    const amountZero = digit.length - parseIncrementedDigit.length;

    return amountZero > 0 ? `${word}${'0'.repeat(amountZero)}${parseIncrementedDigit}` : `${word}${parseIncrementedDigit}`
}

console.log(incrementString('009'));