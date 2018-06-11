"use strict";

function masterFunction() {
 let sequece = generateSequence();
 console.log(sequece.join(", "));
}

function generateSequence() {
  let arr = [1, 1]
  for (let i = 0; arr.length <= 10; i++) {
    let j = i + 1;
          let newValue = arr[i] + arr[j];
    arr.push(newValue);
  }
  return arr;
}

masterFunction();
