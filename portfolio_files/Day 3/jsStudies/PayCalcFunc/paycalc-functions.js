"use strict";
payCalculator();
function payCalculator() {
  let standardWorkWeekHours = 40;
  let overtimeWageMultiplier = 1.5;
  let hoursWorked = getHoursWorked();
  let basePay = getBasePay();
  let overtimeRated = isOvertimeRated(hoursWorked, standardWorkWeekHours);
  if (overtimeRated) {
    let overtimeHours = hoursWorked - standardWorkWeekHours;
    console.log("Pay Rated: $" + (((hoursWorked - overtimeHours) * basePay) + ((basePay * 1.5) * overtimeHours)));
  }
  else {
    console.log("Pay Rated: $" + (hoursWorked * basePay));
  }
}
function getHoursWorked() {
  let userInputHours = prompt('Hours:');
  return userInputHours;
}
function getBasePay() {
  let userInputBasePay = prompt('Base Pay:');
  return userInputBasePay;
}
function isOvertimeRated(hoursWorked, standardWorkWeekHours) {
  let overtimeIsRatedBoolean = hoursWorked > standardWorkWeekHours;
  return overtimeIsRatedBoolean;
}
