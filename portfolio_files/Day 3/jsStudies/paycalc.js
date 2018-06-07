"use strict";

let hoursWorked = prompt("How many hours did you work this week?");
let hourlyPayRate = prompt("What is your hourly pay rate?");
let amountPayed;
let standardWorkWeekHours = 40;
let overtimeWageMultiplier = 1.5;
if (hoursWorked > standardWorkWeekHours) {
  let overtimeHours = hoursWorked - standardWorkWeekHours;
  hoursWorked = hoursWorked - overtimeHours;
  amountPayed = (hoursWorked * hourlyPayRate) + (overtimeHours * (hourlyPayRate * overtimeWageMultiplier));
}
else {
  amountPayed = hoursWorked * hourlyPayRate;
}
console.log("You will be payed $" + amountPayed + " pretax for this week/'s work");
