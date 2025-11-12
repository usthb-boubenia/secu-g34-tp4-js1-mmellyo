//wts 14 , 5 
// how comments

"use strict"; 

const etudiants = [
  { mat: 1000, nom: "JOHN", prenom: "DOE", note: 14 , point: 5},
  { mat: 2000, nom: "pp", prenom: "DOE", note: 7 , point: 1},
  { mat: 3000, nom: "aa", prenom: "DOE", note: 13, point: 3 },

];
 
// (slides 46–47 : fonctions + retour de valeur)
function B(note) {
  return note >= 10;
}

function A() {
  etudiants.forEach(function (e) {  // boucle forEach (slide 44)
    const resultat = B(e.note);

    // condition if (slide 30 : structures conditionnelles)
    if (resultat) {
      console.log(e.mat + ": ADMIS");
    } else {
      console.log(e.mat + ": AJOURNÉ");
    }
  });  
}

// handeling events and targeting functions (slides 129–133)
document.getElementById("btn-delib").addEventListener("click", A);

