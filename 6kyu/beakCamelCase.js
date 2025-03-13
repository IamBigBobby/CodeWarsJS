// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    const result = [];
    
    for (const char of string) {
        if (char === char.toUpperCase()) {
            result.push(' ');
        }
        result.push(char);
    }

    return result.join('');
}

console.log(solution("camelcasingtest"));
