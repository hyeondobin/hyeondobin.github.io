console.log(0.1 + 0.2);
let weight;
let foodWeight;
let calories;

function printName() {
  const name = document.getElementById("weight").value;
  document.getElementById("result").innerText = name;
}

function calculateCalories(weight, calories) {
  if (weight >= 2.0) {
    calories = weight * 30 + 70;
  } 
  else if (weight < 2.0){
    calories = 70 * (weight * 0.75);
  }
  calculateFoodAmount();
}

function calculateFoodAmount(){
  calories * 1000 / 4000
  document.getElementById("result").innerText = calories;
}
