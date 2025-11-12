"use strict"; 

//get DOM elements "getElementById" (slide 59)
const btnNom = document.getElementById("btn-nom");
const btnPrenom = document.getElementById("btn-prenom");
const btnNomPrenom = document.getElementById("btn-nom-prenom");
const btnAge = document.getElementById("btn-age");
const btnNote = document.getElementById("btn-note");
const btnPi = document.getElementById("btn-pi");

//handling events (slides 17–20)  "Each button triggers a processing on a click"

//add listeners "onclick"
btnNom.addEventListener("click", function () {
  //print in the console "console.log()" (slide 33)
  console.log("John");
});

btnPrenom.addEventListener("click", function () {
  console.log("Doe");
});

btnNomPrenom.addEventListener("click", function () {
  console.log("John-Doe");
});

btnAge.addEventListener("click", function () {
  console.log("30");
});

btnNote.addEventListener("click", function () {
  console.log("15");
});

btnPi.addEventListener("click", function () {
  console.log("3.14");
});
