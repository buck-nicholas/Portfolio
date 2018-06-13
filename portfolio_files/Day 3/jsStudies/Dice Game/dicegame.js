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
  let setUpInformation = getSetUpInformation();
  playerTurn();
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
function playerTurn() {
  let rollList;
  let rerollOne;
  let rerollTwo;
  let sequenceObtained = false;
  for (let i = 1; i < 4; i++) {
    if (i === 1){
      rollList = initialRole(12);
      sequenceObtained = checkRoll(rollList);
      console.log("In 1: " + rollList);
    }
    else if (i === 2 && sequenceObtained === false) {
      // do 2nd roll
      rerollOne = reroll(rollList, 8);
      sequenceObtained = checkRoll(rerollOne);
      console.log("In 2: " + rerollOne);
    }
    else if (i === 3 && sequenceObtained === false) {
      // do 3rd and final roll
      rerollTwo = reroll(rerollOne, 6);
      sequenceObtained = checkRoll(rerollTwo);
      console.log("In 3: " + rerollTwo);
    }
    else {
      break;
    }
  }
  console.log("Sequence Obtained after all rolls: " + sequenceObtained);
  // let currentPlayer = playerTurn(playerInformation /*needs turn end array*/);
  // .indexOf Max Score Array Value for Winner
  let currentPlayer = 0;
}
function initialRole(die) {
  let rollList = [];
  for (let i = 0; i < 3; i++) {
    let roll = rollDie(die);
    rollList.push(roll);
  }
  return rollList; // as array of 3 values
}
function checkRoll(rollList) {
  let sequenceArray = [];
  if (rollList.includes(6)) {
    sequenceArray.push(6);
    if (rollList.includes(5)) {
      sequenceArray.push(5);
      if (rollList.includes(4)) {
        sequenceArray.push(4);
      }
    }
  }
  let sequenceObtained = false
  if (sequenceArray.length === 3) {
    let sequenceObtained = true;
    console.log("Sequence Obtained");
  }
  else {
    console.log("Sequence has not been obtained.")
  }
  return sequenceObtained;
}
function reroll(rollList, die) {
  let reRollList = [];
  if (rollList.includes(6) && rollList.includes(5)) {
    reRollList = [6, 5];
    reRollList.push(rollDie(die));
  }
  else if (rollList.includes(6)) {
    reRollList = [6];
    reRollList.push(rollDie(die));
    reRollList.push(rollDie(die));
  }
  else {
    reRollList = initialRole(die);
  }
  return reRollList;
}



















runDiceGame();
