/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Sheldon Skaggs
      Date:   2/2/2024

      Filename: project03-01.js
*/

// Create a variable of HTML elements that have the menuItem class
let menuItems = document.getElementsByClassName("menuItem");

// Add event listeners to the menuItems
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("change", calcTotal);
}

// Function to calculate the total for all selected items
function calcTotal() {
  // orderTotal to hold the total
  let orderTotal = 0;

  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
  }

  // Display the bill total
  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}


 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }