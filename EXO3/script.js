"use strict"; // Mode strict, vu au slide 51 (empêche les erreurs de portée var / let)

// Déclaration d'un tableau d'objets (slide 40)
let Students = [
    { matricule:1000, prenom:"JOHN",   nom:"DOE",     note1:14, note2:5 },
    { matricule:2000, prenom:"BOB",    nom:"CARLTON", note1:7,  note2:1 },
    { matricule:3000, prenom:"RAYANE", nom:"SMITH",   note1:13, note2:3 }
];

// Fonction B : prend un float et retourne un booléen (slide 47)
// Retourne true si moyenne >= 10 (réussite)
function B(moyenne) { // Fonction (slides 45–47)
    
    // Condition (slide 42)
    if (moyenne < 10) {
        return false; // Renvoie false si ajourné
    } 
    else {
        return true;  // Renvoie true si admis
    }
}

// Fonction A : appelle B (slide 47)
function A() {

    let moyenne_gen;      // Variable locale (slide 37)
    let deliberation;     // Stocke le résultat (ADMIS / AJOURNÉ)

    // Parcours du tableau Students (boucle for, slide 44)
    for (let i = 0; i < Students.length; i++) {

        // Calcul de la moyenne (opération arithmétique slide 41)
        moyenne_gen = ((Students[i].note1 + Students[i].note2) / 2) + 5;

        // Appel de B avec un float (slide 47)
        if (B(moyenne_gen)) {
            deliberation = "ADMIS";
        } else {
            deliberation = "AJOURNÉ";
        }

        // Affichage console (slide 33)
        console.log(Students[i].matricule + ": " + deliberation);
    }
}
