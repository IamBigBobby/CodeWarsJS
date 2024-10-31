// Easy; Make a box
// Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
// Like this:

// n = 5

// [
//   '-----',
//   '-   -',
//   '-   -',
//   '-   -',
//   '-----'
// ]
// n = 3

// [
//   '---',
//   '- -',
//   '---'
// ]

function box(n){
    const topBottomBorder = '-'.repeat(n);
    const leftRoghtBorder = `-${' '.repeat(n - 2)}-`;
    const resultArr = [];
    
    for (let i = 0; i < n; i++){
        if(i === 0 || i === n - 1){
            resultArr.push(topBottomBorder);
        } else {
            resultArr.push(leftRoghtBorder);
        }
    }
    return resultArr;
}

console.log(box(7))