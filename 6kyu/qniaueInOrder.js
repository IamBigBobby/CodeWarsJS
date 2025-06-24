// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    const filter = (arr) => {
        const result = [];
        for(let i = 0; i < arr.length; i++) {
            const currentItem = arr[i];
            const nextItem = arr[i + 1];

            if(currentItem !== nextItem && nextItem !== undefined) {
                result.push(currentItem);
            }

            if(i === arr.length - 1) {
                result.push(currentItem);
            }
        }

        return result;
    }

    let iterableArr;

    if(typeof iterable === "string") {
        iterableArr = iterable.split('');
    } else {
        iterableArr = iterable; 
    }

    return filter(iterableArr);
}

console.log(uniqueInOrder([1,2,2,3,3]));
