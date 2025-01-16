// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
    const result = [];
    let word = "";

    for (const char of str) {
 
        if (!isNaN(char)) continue;

        if(char === "-") continue;

        if (char === char.toUpperCase() && word) {
            result.push(word);
            word = "";
        }
        word += char;
    }

    if (word) {
        result.push(word);
    }

    const kebabString = result
        .map((word) => {
            const arrWord = word.split('');
            arrWord[0] = arrWord[0].toLowerCase();
            return arrWord.join('');
        }).join('-');

    return kebabString;
}

console.log(kebabize('ujz0LaRyyoRyawizAzoimoe'));