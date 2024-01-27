/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Sheldon Skaggs
      Date:   1/27/2024

      Filename: project02-04.js
 */

// create constants for prices and tax with their value
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

// set event handlers to calculate cost when checkboxes are changed
document.getElementById("chicken").onchange = calcTotal;
document.getElementById("halibut").onchange = calcTotal;
document.getElementById("burger").onchange = calcTotal;
document.getElementById("salmon").onchange = calcTotal;
document.getElementById("salad").onchange = calcTotal;

// Function to calculate total cost
function calcTotal() {
  // declare variables
  let cost = 0;
  let tax = 0;
  let totalCost = 0;

  // declare variables to access form controls
  let buyChicken = document.getElementById("chicken").checked;
  let buyHalibut = document.getElementById("halibut").checked;
  let buyBurger = document.getElementById("burger").checked;
  let buySalmon = document.getElementById("salmon").checked;
  let buySalad = document.getElementById("salad").checked;

  // add selected items to cost
  cost += buyChicken ? CHICKEN_PRICE : 0;
  cost += buyHalibut ? HALIBUT_PRICE : 0;
  cost += buyBurger ? BURGER_PRICE : 0;
  cost += buySalmon ? SALMON_PRICE : 0;
  cost += buySalad ? SALAD_PRICE : 0;

  // display the cost of the food
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  // calculate tax
  tax = cost * SALES_TAX;

  // display tax
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  // calculate totalCost
  totalCost = cost + tax;

  // display total cost
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
