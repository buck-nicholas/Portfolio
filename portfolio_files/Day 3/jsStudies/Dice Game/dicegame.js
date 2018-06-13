"use strict"

// get player names, 1-4 players X
// use 4 side to determin player rotation, high number goes first, then in ascending order X
// 20, 6, 8, 12,
// 4 is score multiplier
// start rolling with 12, then 8, then 6
// must get a 6, then a 5, then a 4,
// pull dice when wanted, but only in order,
// roll all three max three times
// if 6, 5, and 4 in that order are reached, role 20 side for score
// bonus, in pace bonus x3 / x2 / x1
// Master function
function runDiceGame() {
  let playerInformation = getSetUpInformation();
  let scoreListing = initialRole(playerInformation);
}
// universal functions
function getUserInput(message) {
  let userInput = prompt(message);
  return userInput;
}
function rollDie(sideCount) {
  let roll;
  roll = Math.floor((Math.random() * sideCount) + 1);
  return roll;
}
function giveAlert(message) {
  alert(message);
}
// Step 1 -- Get Player information
function getSetUpInformation() {
  let playerCount = getUserInput("How many players will there be? You can only have 1-4 players. ");
  let playerNameArray = getPlayerNames(playerCount);
  // let playerOrderArray = determinPlayerOrder(playerNameArray, playerCount);
  let firstP = determineLowRoll(playerNameArray, playerCount);
  let orderArray = setArrayOrder(playerNameArray, firstP);
  return orderArray;
}
function getPlayerNames(playerCount) {
  let playerNameArray = [];  // [[p1], [p2]]
  let playerName;
  let playerID = 1;
  for (let i = 0; i < playerCount; i++) {
    playerName = getUserInput("Name for Player " + playerID + ": ");
    playerNameArray.push(playerName);
    playerID++;
  }
  return playerNameArray;
}
function getRollCount(reqAmount, sideCount) {
  let c = 0
  let i = 0
  while (i !== reqAmount) {
    c++;
    i = rollDie(sideCount);
  }
  return c;
}
function determineLowRoll(playerNameArray, playerCount) {
  let firstP = playerNameArray[0];
  let lowRoll = getRollCount(4, 4);
  let firstPIndex = 0;
  console.log(firstP + " has rolled a score of " + lowRoll);
  for (let i = 1; i < playerCount; i++) {
    let tempRoll = getRollCount(4, 4);
    console.log(playerNameArray[i] + " has rolled a score of " + tempRoll);
    if (tempRoll === lowRoll) {
      tempRoll = getRollCount(4, 4);
      console.log(playerNameArray[i] + " has tied the low score and rerolled a score of " + tempRoll);
    }
    else if (tempRoll < lowRoll) {
      lowRoll = tempRoll;
      firstP = playerNameArray[i];
      firstPIndex = i;
      console.log(firstP + " has rolled the new lowest score of: " + lowRoll);
    }
  }
  console.log(firstP + " will start the game first!");
  return firstPIndex;
}
function setArrayOrder(array, firstP) {
  console.log(array);
  if (firstP =! 0) {
    let arrayShift = array.splice(0, firstP);
    array = array.concat(arrayShift);
    console.log("newOrder: " + array);
  }
  return array;
}
// Player Turn
function initialRole(playerInformation) {
  let dice = [6, 8, 10];
  let scoreListing = [];
  let playerResult = [];
  for (let i = 0; i < playerInformation.length; i++) {
    for (let j = 0; j < dice.length; j++) {
      playerResult.push(rollDie(dice[j]));
      if (playerResult.length === 3) {
        scoreListing.push([playerResult]);
        playerResult = [];
      }
    }
    // playerResult.length = 0;
    console.log(playerInformation[i] + " has rolled " + [scoreListing[i]]);
  }
  return scoreListing;
}
// var person = {
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
//     eyeColor:"blue"
// };
runDiceGame();
