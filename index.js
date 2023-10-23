console.log(0.1 + 0.2);
let foodWeight;
let calories;

function printName() {
    const name = document.getElementById("weight").value;
    document.getElementById("result").innerText = name;
}

function calculateCalories(calories) {
    const weight = document.getElementById("weight").value;
    if (weight >= 2.0) {
        calories = weight * 30 + 70;
        console.log(calories);
    } else if (weight < 2.0) {
        calories = 70 * (weight * 0.75);
        console.log(calories);
    }
    calculateFoodAmount(calories);
}

function calculateFoodAmount(calories) {
    const age = document.getElementById("age").value;
    if (age >= 6 && age < 12) {
        document.getElementById("result").innerText = ((calories * 1000) / 4068) * 1.4;
    } else if (age < 4) {
        document.getElementById("result").innerText = ((calories * 1000) / 4068) * 3;
    } else if (age >= 4 && age < 6) {
        document.getElementById("result").innerText = ((calories * 1000) / 4068) * 2.5;
    } else {
        document.getElementById("result").innerText = ((calories * 1000) / 4068) * 1;
    }
}
