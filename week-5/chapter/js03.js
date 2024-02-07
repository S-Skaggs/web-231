/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Sheldon Skaggs
     Date:   2/7/2024

     Filename: js03.js
 */

// Days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Add event listener to the window's load event to run addWeekDays
window.addEventListener("load", addWeekDays);

// Function to write weekday names into the calendar
function addWeekDays() {
  let i = 0; // initial counter value

  // reference the collection of heading cells in the table
  let headingCells = document.getElementsByTagName("th");

  // write each of the seven days into a heading cell
  while (i < 7) {
    headingCells[i].innerHTML = weekDays[i];

    // increase counter by 1
    i++;
  }
}

// Add event listener to the window's load event to run showGames
window.addEventListener("load", showGames);

// Function to write game information into the calendar
function showGames() {
  for (let i = 0; i < gameDates.length; i++) {
    let gameInfo = "";

    // open the paragraph
    switch (gameResults[i]) {
      case "W":
        gameInfo += "<p class='win'>";
        break;
        case "L":
          gameInfo += "<p class='lose'>";
          break;
        case "S":
          gameInfo += "<p class='suspended'>";
          break;
          case "P":
            gameInfo += "<p class='postponed'>";
            break;
    }

    // display the game location
    if (gameLocations[i] === "h") {
      gameInfo += "vs. ";
    } else if (gameLocations[i] === "a") {
      gameInfo += "@ ";
    }

    // include the opponent
    gameInfo += gameOpponents[i] + "<br>";

    // include the result and score
    gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

    // display innings played for suspended, shortened, or extra inning games
    if (gameInnings[i] < 5) {
      gameInfo += " [" + gameInnings[i] + "]***";
    } else if (gameInnings[i] < 9) {
      gameInfo += " [" + gameInnings[i] + "]*";
    } else if (gameInnings[i] > 9) {
      gameInfo += " [" + gameInnings[i] + "]";
    }

    // close the paragraph
    gameInfo += "</p>";

    // write the information to a table cell
    let tableCell = document.getElementById(gameDates[i]);
    tableCell.insertAdjacentHTML("beforeend", gameInfo);
  }
}