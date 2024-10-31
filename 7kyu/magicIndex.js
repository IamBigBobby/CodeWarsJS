// A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

// findMagic([-20,-10,2,10,20]); // Returns 2

function findMagic(arr){
    const findElement = arr.filter((element, index) => element === index);
    return findElement.length > 0 ? findElement[0] : -1;
}

console.log(findMagic([-20,-10,2,10,20]))