// Write a function that takes an integer num (num >= 0) and inserts dashes ('-') between each two odd digits in num.

// Examples
// 454793 ---> "4547-9-3"
//      0 ---> "0"
//      1 ---> "1"
// 13579  ---> "1-3-5-7-9"
//  86420 ---> "86420"

function insertDash(num) {
     const arrNumber = num.toString().split('').map((element) => Number(element));
     const resultArr = [];   
     for (let i = 0; i < arrNumber.length; i++){
          if(arrNumber[i] % 2 !== 0 && arrNumber[i + 1] % 2 !== 0 && i < arrNumber.length - 1){
               resultArr.push(arrNumber[i]);
               resultArr.push('-');
          } else {
               resultArr.push(arrNumber[i]);
          }
     }

     return resultArr.map((element) => element.toString()).join('');
}

console.log(insertDash(13579));