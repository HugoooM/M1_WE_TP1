# TP Web : Javascript et HTML5 - Gestionnnaire de formes

Ce projet est une application web permettant de créer et gérer des formes graphiques 
(traits et rectangles) sur une zone de dessin. Chaque forme peut être personnalisée en 
termes de couleur et d'épaisseur de trait, et les formes créées peuvent être supprimées 
via une liste affichée à côté de la zone de dessin.

## Fonctionnalités
- Création de formes : Ajout de traits et de rectangles à la zone de dessin.
- Personnalisation : Choix de la couleur et de l'épaisseur de trait pour chaque forme.
- Liste des formes : Visualisation de toutes les formes créées dans une liste située à 
droite de la zone de dessin.
- Suppression : Suppression des formes en les sélectionnant dans la liste.

## Architecture MVC
Ce projet utilise le modèle MVC pour structurer le code de l'application :

- Modèle : Gère les données des formes (type, couleur, épaisseur, etc.).
- Vue : Affiche la zone de dessin et la liste des formes.
- Contrôleur : Interagit avec la vue et le modèle pour ajouter, personnaliser, et 
supprimer des formes.

## Utilisation
Pour utiliser cette application web, il suffit d'ouvrir le fichier canvas.html dans 
un navigateur web.

> Créé par Hugo Montiège