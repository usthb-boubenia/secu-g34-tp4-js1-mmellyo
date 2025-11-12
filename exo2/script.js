"use strict"; 

//f1(): print elements of array of students (slide 38)
//                              loop forEach (slide 44)
function f1() {
  const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
  etudiants.forEach(function (e) {
    console.log(e);
  });
}

//f2(): Create objet student (slide 39)
function f2() {
  const etudiant = { nom: "John", prenom: "DOE", age: 30 };
  console.log(etudiant);
}

//f3(): Array of student objects (slides 40)
function f3() {
  const etudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
  ];

  //loop foreach (slide 44)
  etudiants.forEach(function (e) {
    console.log(e.nom + "-" + e.prenom + "-" + e.age);
  });
}

// handeling events and targeting functions (slides 129–133)
document.getElementById("btn-f1").addEventListener("click", f1);
document.getElementById("btn-f2").addEventListener("click", f2);
document.getElementById("btn-f3").addEventListener("click", f3);
