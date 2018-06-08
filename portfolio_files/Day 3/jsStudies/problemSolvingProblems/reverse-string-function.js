"use strict";
runStringReverasl();
function runStringReverasl() { //Master Function
  let stringInputRaw = getUserInput();
  let stringAsArrayConverted = convertStringToArray(stringInputRaw);
  let reversedArray = reverseTheArray(stringAsArrayConverted);
  let convertedString = joinArrayToString(reversedArray);
  console.log("Your message, but backwords! " + convertedString);
  alert("Your message, but backwords! " + convertedString);
}
function getUserInput() {
  let userStringInputRaw;
  userStringInputRaw = prompt("Enter message to reverse:");
  return userStringInputRaw;
}
function convertStringToArray(stringData) {
  let stringAsArray;
  stringAsArray = stringData.split("");
  return stringAsArray;
}
function reverseTheArray(arrayData) {
  let arrayReversed;
  arrayReversed = arrayData.reverse();
  return arrayReversed;
}
function joinArrayToString(reversedData) {
  let joinedArray;
  joinedArray = reversedData.join("");
  return joinedArray;
}
