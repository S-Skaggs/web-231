"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Sheldon Skaggs
      Date:   2/23/2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let timeID;
let questionList = document.querySelectorAll("div#quiz input");

// Add onclick event handler to startQuiz
startQuiz.onclick = function() {
  overlay.className = "showquiz";
  timeID = window.setInterval(countdown, 1000);
}

// countdown function to count down the time remaining
// and display results
function countdown() {
  if(timeLeft === 0) {
    // Quiz is over.
    window.clearInterval(timeID);
    let totalCorrect = checkAnswers();

    if(totalCorrect == correctAnswers.length) {
      // User answered all questions correctly. Display message
      window.alert("Congratulations for answering 100% of the questions correct!");
    } else {
      // User missed some questions. Display message and reset time.
      window.alert("You correctly answered " + totalCorrect + " out of " + correctAnswers.length + " questions.");
      timeLeft = quizTime;
      quizClock.value = timeLeft;
      overlay.className = "hidequiz";
    }
  } else {
    // Quiz in progress, continue to count time down
    timeLeft--;
    quizClock.value = timeLeft;
  }
}



















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;

   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }
   }
   return correctCount;
}

