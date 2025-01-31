// Your task is to write a function calculate, which accepts a string with a mathematical exprssion written in prefix Polish notation and evaluates it. This means that all operations are placed before their operands. For example, the expression 3 + 5 is written in Polish notation as + 3 5, and (3 + 5) / (2 * 2) is / + 3 5 * 2 2.

// The only valid operations are +, -, * and /. The input string is guaranteed to be a valid expression.

// You can use eval or alternative if available in your language, but it is in no way needed for an idiomatic solution.

// Examples
// calculate('123.456')       == 123.456
// calculate('+ -5 5')        == 0
// calculate('* + 2 2 3')     == 12
// calculate('/ + 3 5 * 2 2') == 2
// Input
// A non-empty string consisting of numbers and arithmetic operators separated by spaces. This string is a valid arithmetic expression written in prefix polish notation.

// Output
// A number, result of evaluating the expression.

function calculate(expression) {
    const arrExpression = expression.split(' ');
    const stak = [];

    for (let i = arrExpression.length - 1; i >= 0; i--) {
        const currentElement = arrExpression[i];
        if (!isNaN(Number(currentElement))) {
            stak.push(Number(currentElement));
        } else {
            const firstDigit = stak.pop();
            const secondDigit = stak.pop();

            switch(arrExpression[i]){
                case '*':
                    stak.push(firstDigit * secondDigit);
                    break;
                case '/':
                    stak.push(firstDigit / secondDigit);
                    break;
                case '+':
                    stak.push(firstDigit + secondDigit);
                    break;
                case '-':
                    stak.push(firstDigit - secondDigit);
                    break;
            }
        }
    }

    return stak[0];
}

console.log(calculate('/ + 3 5 * 2 2'))