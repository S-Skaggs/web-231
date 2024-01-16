/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Sheldon Skaggs
      Date:   1.15.2024

      Filename: js02.js
 */

// setup the form when the page loads
window.addEventListener("load", setupForm);

// set the form's default values
function setupForm() {
  document.getElementById("photoNum").value = 1;
  document.getElementById("photoHrs").value = 2;
  document.getElementById("makeBook").checked = false;
  document.getElementById("photoRights").checked = false;
  document.getElementById("photoDist").value = 0;
}