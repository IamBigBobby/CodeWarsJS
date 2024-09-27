// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


function bmi(weight, height) {
    const bmiValue = weight / height ** 2;
    let result = '';

    if (bmiValue <= 18.5) {
        result = "Underweight";
    } else if (bmiValue <= 25.0) {
        result = "Normal";
    } else if (bmiValue <= 30.0) {
        result = "Overweight";
    } else {
        result = "Obese";
    }

    return result;
}

console.log(bmi(80, 1.92));
