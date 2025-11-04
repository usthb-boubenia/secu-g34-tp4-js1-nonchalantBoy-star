"use strict"; // Mode strict, vu au slide 51 (empêche les erreurs de portée var / let)

// Chaque bouton déclenche une fonction (événement onclick, slide 22 et slide 28)

// Fonction F1
function f1() { // Déclaration de fonction, slides 45–47

    // Déclaration d'une variable tableau contenant des chaînes (Types complexes : tableaux, slide 38)
    let etudiant = ["Etudiant1", "Etudiant2", "Etudiant3"]; // let = variable locale, slide 37

    // Boucle for pour parcourir le tableau (slide 44 - boucles)
    for (let i = 0; i < etudiant.length; i++) {
        
        // Affichage dans la console (console.log(), slide 33)
        console.log(etudiant[i]);
    }
}


// Fonction F2
function f2() { // Fonction, slides 45–47

    // Objet avec propriétés (Types complexes : objets, slide 39)
    let etudiant = {
        nom: "John",
        prenom: "Doe",
        age: 30
    };

    // Affichage de l'objet complet dans la console (slide 33)
    console.log(etudiant);
}


// Fonction F3
function f3() { // Fonction, slides 45–47

    // Tableau d'objets (slide 40)
    let etudiant = [
        { nom:"nom1", prenom:"prenom1", age:21 },
        { nom:"nom2", prenom:"prenom2", age:22 },
        { nom:"nom3", prenom:"prenom3", age:23 }
    ];

    // Boucle for sur le tableau (slide 44)
    for (let i = 0; i < etudiant.length; i++) {

        // Accès aux propriétés objet + conversion en texte (slide 39 pour objets)
        // Affichage formaté (console.log(), slide 33)
        console.log(
            etudiant[i].nom + "-" + 
            etudiant[i].prenom + "-" + 
            etudiant[i].age.toString() // conversion toString(), slide 38 (méthodes de type)
        );
    }
}
