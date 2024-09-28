// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    const flower1Number = flower1 % 2;
    const flower2Number = flower2 % 2;

    if ((flower1Number === 0 && flower2Number === 0) || (flower1Number !== 0 && flower2Number !== 0)) {
        return false;
    }

    return true
}


console.log(lovefunc(2, 2))