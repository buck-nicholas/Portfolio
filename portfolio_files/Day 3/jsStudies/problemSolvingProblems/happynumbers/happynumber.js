"use strict";

let num = 123

let arr =  num.toString(10).split("").map(Number); // STEP 1: splits given number into array of numbers
let doMath = arr.reduce((a, b) => b*b + a, 0); // STEP 2: square and add all numbers in array

console.log(arr);
console.log(typeof arr[1]);
console.log(doMath);
