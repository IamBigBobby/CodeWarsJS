// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= length of input <= 100

// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.

// Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you!

function validParentheses(parenStr) {
    const openBrackets = ['('];
    const bracketsPair = {
        [')']: '('
    }

    const stak = [];

    for (let i = 0; i < parenStr.length; i++) {
        const currentSymbol = parenStr[i];
        
        if(openBrackets.includes(currentSymbol)){
            stak.push(currentSymbol);
        } else {
            if (stak.length === 0) {
                return false;
            }

            const lastStakElement = stak[stak.length - 1];

            if(bracketsPair[currentSymbol] === lastStakElement) {
                stak.pop();
            } else {
                return false
            }
        }
    }

    return stak.length === 0;
}

console.log(validParentheses(')('))