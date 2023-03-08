# Évaluation du test technique
Ce projet consiste en une application Angular qui affiche deux barres de progression pour évaluer deux critères différents. L'application permet également de réinitialiser la valeur des critères ou d'ajouter 5% ou 10% à chaque critère.

## Installation
- Assurez-vous d'avoir installé **Node.js** sur votre machine.
- Clonez ce dépôt en utilisant la commande suivante : git clone https://github.com/doric/astriofrontassessment.
- Naviguez vers le répertoire du projet : cd evaluation-test-technique.
- Installez les dépendances en utilisant la commande suivante : **npm install**.

## Utilisation
- Lancez l'application en utilisant la commande suivante : **ng serve.**
- Ouvrez votre navigateur et allez à l'adresse http://localhost:4200/.
- Utilisez les boutons pour réinitialiser la valeur des critères ou ajouter/retirer **5%** ou **10%** à chaque critère.

## Structure du projet
Le projet est organisé selon l'architecture MVC (Modèle-Vue-Contrôleur). Voici les différents fichiers et dossiers :

- **app.component.ts** : fichier contenant le code pour le composant principal de l'application.
- **app.component.html** : fichier contenant le code HTML pour le composant principal de l'application.
- **app.component.scss** : fichier contenant les styles pour le composant principal de l'application.
- **app.module.ts** : fichier contenant la définition du module principal de l'application.
- **progress-bar** : dossier contenant le code pour le composant de la barre de progression.
- **progress-bar/progress-bar.component.ts** : fichier contenant le code pour le composant de la barre de progression.
- **progress-bar/progress-bar.component.html** : fichier contenant le code HTML pour le composant de la barre de progression.
- **progress-bar/progress-bar.component.scss** : fichier contenant les styles pour le composant de la barre de progression.
- **models** : dossier contenant les modèles de l'application.
- **models/evaluation.ts** : fichier contenant le modèle pour l'évaluation.
- **controllers** : dossier contenant les contrôleurs de l'application.
- **controllers/evaluation.controller.ts** : fichier contenant le contrôleur pour l'évaluation.

## Auteur
Ce projet a été créé par **Doric Ngouffo**.
