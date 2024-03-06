"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Sheldon Skaggs
      Date:   3/6/2024

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function (e) {
  // Prevent browser default behavior
  e.preventDefault();

  let pwd = document.getElementById("pwd").value;
  let feedback = document.getElementById("feedback");

  // Create regular expression literals to check for password parts
  //  1 At least one uppercase letter
  //  2 At least one digit
  //  3 At least one of the following special characters; !$#%
  let regex1 = /[A-Z]/;
  let regex2 = /\d/;
  let regex3 = /[!\$#%]/;

  // Check Password Length, should be 8 characters or more
  if(pwd.length < 8) {
    feedback.textContent = "Your password must be at least 8 characters";
  } else if(!regex1.test(pwd)) {
    feedback.textContent = "Your password must include an uppercase letter.";
  } else if (!regex2.test(pwd)) {
    feedback.textContent = "Your password must include a number."
  } else if (!regex3.test(pwd)) {
    feedback.textContent = "Your password must include one of the following: !$#%";
  } else {
    signupForm.submit();
  }
});
