"use strict"

// Master function
function runDiceGame() {
  console.log("==========================================================================================");
  console.log("Welcome to Ship, Captain and Crew! In this game, you will have three chances to roll a 6, then a 5, and then a 4 using 5 different dice. In order to score, or keep any dice, you MUST obtain the required dice in that specific order. This is a dice game in which pace is set, so it pays to get a little lucky and score sooner!");
  console.log("Bonuses are set for obtaining the highest pace!");
  console.log("==========================================================================================");
  let setUpInformation = getSetUpInformation();
  let scoreBoard = cyclePlayers(setUpInformation);
  printFinalScores(scoreBoard, setUpInformation);
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
  alert(playerNameArray[0] + " will start it off, get ready to roll!")
  let lowRoll = getRollCount(4, 4);
  let firstPIndex = 0;
  console.log(firstP + " has rolled a score of " + lowRoll);
  for (let i = 1; i < playerCount; i++) {
    alert("Next player up is " + playerNameArray[i] + '. ' + "Get ready!")
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
  if (firstP =! 0) {
    let arrayShift = array.splice(0, firstP);
    array = array.concat(arrayShift);
    console.log("The order is set! " + array);
  }
  return array;
}
// Player Turn
function playerTurn() {
  let rollList;
  let rerollOne;
  let rerollTwo;
  let bonus;
  let sequenceObtained = false;
  let score = 0;
  let bonusMultiplier = 0;
  rollList = initialRole(6);
  sequenceObtained = checkRoll(rollList);
  for (let i = 1; i < 4; i++) {
    // rollList = initialRole(6);
    if (sequenceObtained) {
      break;
    }
    else {
      rollList = reroll(rollList, 6)
      sequenceObtained = checkRoll(rollList);
      bonusMultiplier++;
    }
  }
  if (sequenceObtained) {

    score = rollDie(20) + rollDie(10);
    if (bonusMultiplier >= 2) {
      bonus = 0;
      score += bonus;
    }
    else {
    bonus = calculateBonus(bonusMultiplier);
    score += bonus;
    }
  }
  return score;
}
function calculateBonus(bonusMultiplier) {
  let bonusDice = [12, 8];
  let bonus = rollDie(bonusDice[bonusMultiplier]);
  return bonus;
}
function initialRole(die) {
  let rollList = [];
  for (let i = 0; i < 5; i++) {

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
    sequenceObtained = true;
  }
  return sequenceObtained;
}
function reroll(rollList, die) {
  let reRollList = [];
  if (rollList.includes(6) && rollList.includes(5)) {
    reRollList = [6, 5];

    reRollList.push(rollDie(die));

    reRollList.push(rollDie(die));

    reRollList.push(rollDie(die));
  }
  else if (rollList.includes(6)) {
    reRollList = [6];

    reRollList.push(rollDie(die));

    reRollList.push(rollDie(die));

    reRollList.push(rollDie(die));

    reRollList.push(rollDie(die));
  }
  else {
    reRollList = initialRole(die);
  }
  return reRollList;
}
function cyclePlayers(player) {
  let scoreBoard = []
  for (let i = 0; i < player.length; i++) {
    alert(player[i] + "'s Turn!");
    console.log(player[i] + "'s Turn!");
    scoreBoard.push(playerTurn());
    console.log(player[i] + " has scored " + scoreBoard[i]);
  }
  return scoreBoard;
}
function printFinalScores(scores, players) {
  console.log("-----------------------------------------");
  for (let i = 0; i < players.length; i++) {
    console.log(players[i] + " scored " + scores[i]);
  }
  console.log("-----------------------------------------");
}
runDiceGame();
