"use strict";

function masterGenerator() {
let arrayOfPrime = generatePrimeNumbers();
console.log(arrayOfPrime);
}
function generatePrimeNumbers() {
  let primeArray = [];
  for (let counter = 1; counter <= 100; counter++) {
    let notPrime = false;
    for (let divider = 2; divider < counter; divider++) {
      if (counter % divider === 0) {
        notPrime = true;
      }
    }
    if (notPrime === false) {
      primeArray.push(counter);
    }
  }
  return primeArray;
}

masterGenerator();
