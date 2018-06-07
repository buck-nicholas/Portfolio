"use strict";
let buzzCounter = 0;
let fizzCounter = 0;
let fizzBuzzCounter = 0;

for(let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
    fizzBuzzCounter++;
  }
  else if (i % 3 === 0) {
    console.log("fizz");
    fizzCounter++;
  }
  else if (i % 5 === 0) {
    console.log("buzz");
    buzzCounter++;
  }
  else {
    console.log(i);
  }
}

console.log("Amount of Fizz: " + fizzCounter + ". " + "Amount of Buzz: " + buzzCounter + ". " + "Amount of Fizzbuzz: " + fizzBuzzCounter + ".")
