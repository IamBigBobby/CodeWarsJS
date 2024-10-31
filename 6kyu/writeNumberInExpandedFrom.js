// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 2"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
   const strNum = num.toString();
   const length = num.toString().length;
   const resultArr = [];
   for (let i = 0; i < length; i++) {
    if (strNum[i] === '0'){
        continue;
    }
    resultArr.push(`${strNum[i] + "0".repeat(length - i - 1)}`)
   }
   return resultArr.join(' + ')
}

console.log(expandedForm(70314))