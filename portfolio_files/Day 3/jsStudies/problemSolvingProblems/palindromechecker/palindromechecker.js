function palindromeMaster() {
  let userInput = getUserInput('Insert Possible Palindrome: ');
  let normalizedData = normalizeUserInput(userInput);
  let runCount = Math.floor(normalizedData.length / 2);
  let palindrome = true;
  let j = normalizedData.length - 1;
  for (let i = 0; i <= runCount; i++) {
    if (normalizedData[i] != normalizedData[j]) {
      palindrome = false;
    }
    j--;
  }
  alert('Palindrome Check Returned:  ' + palindrome)
}
function getUserInput(message) {
  let inputPrompt = prompt(message);
  return inputPrompt;
}
function normalizeUserInput(userInput) {
  let rawInput = userInput;
  console.log(rawInput);
  normalizedData = rawInput.toLowerCase().split(" ").join("").split("");
  console.log(normalizedData);
  return normalizedData;
}

palindromeMaster();
