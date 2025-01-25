// Description:
// Give you two array arr1 and arr2. They contains some numbers. They have the same length. Calculate the sum of the corresponding position number, find the most pairs that has the same sum value. return the result by a 2D array that contains all pairs. For example:

// arr1=[1,2,3,4,5]
// arr2=[9,8,0,0,0]
// findPair(arr1,arr2) should return [[1,9],[2,8]]
// because:

// 1  2  3 4 5
// +  +  + + +
// 9  8  0 0 0
// |  |  | | |
// 10 10 3 4 5
// 1,9 and 2,8 have the same sum value 10
// You do not need to verify the input data. arr1 and arr2 will always have the same number of elements, and testcase will not provide an empty array.

// If all pairs has diffrent sum value, please return [].

// If more than one groups of pairs has same number, choose which has the max sum value(see the last example)

// You don't need sort the result, return the pairs according to the order of the index.

// Examples
// arr1=[1,2,3,4,5]
// arr2=[0,0,0,0,0]
// findPair(arr1,arr2) should return []

// arr1=[1,2,3,4,5]
// arr2=[5,4,3,2,1]
// findPair(arr1,arr2) should return [[1,5],[2,4],[3,3],[4,2],[5,1]]

// arr1=[0,1,3,4,5]
// arr2=[1,0,3,2,1]
// findPair(arr1,arr2) should return [[3,3],[4,2],[5,1]]

// arr1=[1,2,3,4,5]
// arr2=[-1,2,-3,4,-5]
// findPair(arr1,arr2) should return [[1,-1],[3,-3],[5,-5]]

// arr1=[1,2,3,0,5,-2]
// arr2=[-1,2,-3,4,-5,6]
// findPair(arr1,arr2) should return [[2,2],[0,4],[-2,6]]

function findPair(arr1, arr2) {
    const countGroup = new Map();
    const length = arr1.length;

    for (let i = 0; i < length; i++) {
        const sum = arr1[i] + arr2[i];
        if (countGroup.has(sum)) {
            countGroup.get(sum).push([arr1[i], arr2[i]]);
        } else {
            countGroup.set(sum, [[arr1[i], arr2[i]]]);
        }
    }

    const arrCountGroup = Array.from(countGroup.values());

    const maxLength = Math.max(...arrCountGroup.map(group => group.length));

    if (maxLength === 1) return [];

    const resultGroups = arrCountGroup.filter(group => group.length === maxLength);

    resultGroups.sort((a, b) => {
        const sumA = a.reduce((sum, pair) => sum + pair[0] + pair[1], 0);
        const sumB = b.reduce((sum, pair) => sum + pair[0] + pair[1], 0);
        return sumB - sumA;
    });

    return resultGroups[0] || [];
}


console.log(findPair([0,1,3,4,5],[1,0,3,2,1]))