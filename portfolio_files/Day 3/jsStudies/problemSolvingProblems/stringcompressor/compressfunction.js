"use strict"
function compress() {
let str = getUserInput('Insert string to compress:  ');
// let str = "aaabbbbbccccaacccbbbaaabbbaaa";
let uncompressedStrArray = str.split("");
let cStr = []
let counter = 0;
for (let i = 0; i < uncompressedStrArray.length; i++) {
  counter++;
  if (uncompressedStrArray[i] != uncompressedStrArray[i + 1]) {
    cStr.push(counter, uncompressedStrArray[i]);
    counter = 0;
  }
}
let compressedString = cStr.join("");
alert(compressedString);
}
function getUserInput(message) {
  let inputPrompt = prompt(message);
  return inputPrompt;
}
compress();
