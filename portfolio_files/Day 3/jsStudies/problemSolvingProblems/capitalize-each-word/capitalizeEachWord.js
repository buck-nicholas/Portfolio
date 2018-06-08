"use strict";

function runCapitalizeEachword() {
  let userInput = getUserInput();
  let normalizedString = normalizeStringData(userInput);
  let stringAsArray = convertStringToArray(normalizedString);
  let convertedArray = convertUserInput(stringAsArray);
  let joinedConversion = joinConvertedArray(convertedArray);
  alert("Converted Data: " + joinedConversion);
}
function getUserInput() {
  let userPrompt;
  userPrompt = prompt("What would you like to convert?");
  return userPrompt;
}
function normalizeStringData(string) {
  let lowercaseString;
  lowercaseString = string.toLowerCase();
  return lowercaseString;
}
function convertStringToArray(stringData) {
  let stringAsArray;
  stringAsArray = stringData.split(" ");
  return stringAsArray;
}
function convertUserInput(inputData) {
  for (let i = 0; i < inputData.length; i++) {
    inputData[i] = inputData[i].charAt(0).toUpperCase() + inputData[i].slice(1);
  }
  return inputData;
}
function joinConvertedArray(joinData) {
  let joinedArray;
  joinedArray = joinData.join(" ");
  return joinedArray;
}

runCapitalizeEachword();
