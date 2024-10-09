// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let workedStr = str;
   if(str.length % 2 !== 0){
    workedStr = `${str}_`
   }
   const resultArr = [];

   for (let i = 0; i < workedStr.length; i += 2){
    resultArr.push(`${workedStr[i]}${workedStr[i + 1]}`)
   }

   return resultArr;
}

console.log(solution('abcdef'));
