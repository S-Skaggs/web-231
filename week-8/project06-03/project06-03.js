"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Sheldon Skaggs
      Date:   2/29/2024

      Filename: project06-03.js
*/

// Create a reference to the form
let billShipForm = document.forms.billShip;

// Reference the checkbox to use shipping address for billing address
let useShip = document.getElementById("useShip");

// Add event listeners
useShip.addEventListener("click", copyShippingToBilling);

// Copy shipping address to billing address
function copyShippingToBilling() {
  if(useShip.checked) {
    billShipForm.elements.firstnameBill.value = billShipForm.elements.firstnameShip.value;
    billShipForm.elements.lastnameBill.value = billShipForm.elements.lastnameShip.value;
    billShipForm.elements.address1Bill.value = billShipForm.elements.address1Ship.value;
    billShipForm.elements.address2Bill.value = billShipForm.elements.address2Ship.value;
    billShipForm.elements.cityBill.value = billShipForm.elements.cityShip.value;
    billShipForm.elements.stateBill.selectedIndex = billShipForm.elements.stateShip.selectedIndex;
    billShipForm.elements.countryBill.value = billShipForm.elements.countryShip.value;
    billShipForm.elements.codeBill.value = billShipForm.elements.codeShip.value;
  }
}

// Create references to all text input and errorBox for validation
let formElements = document.querySelectorAll('input[type="text"]');
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

// Add event listeners to each formElement for invalid event
for(let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

// Function to handle invalid form input
function showValidationError(evt) {
  // Prevent default validation behavior
  evt.preventDefault();

  errorBox.textContent = "Complete all highlighted fields";
}