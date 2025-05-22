# Note ton logement

Ce projet permet aux utilisateurs d'évaluer un logement à partir de différents critères, avec intégration de Google Maps.

## Fonctionnalités

- Autocomplétion d'adresse (Google Places API)
- Carte interactive avec marqueurs de notes
- Formulaire d'évaluation avec étoiles
- Affichage des moyennes par logement
- Stockage via Google Sheets et Apps Script

## Déploiement

### GitHub Pages

1. Crée un dépôt GitHub
2. Dépose ces fichiers dans la branche principale
3. Va dans Paramètres > Pages et choisis la racine (`/`) comme dossier source

### Netlify

1. Va sur [netlify.com](https://www.netlify.com/)
2. Clique sur "Add new site" > "Deploy manually" puis glisse le dossier du projet

## Google Sheets backend

1. Crée une feuille de calcul Google Sheets
2. Ouvre `Extensions > Apps Script` et colle le script fourni dans `apps_script.gs`
3. Déploie comme une Web App publique (Accès : Tout le monde)

## Remplacez `YOUR_GOOGLE_MAPS_API_KEY` dans `index.html` avec votre propre clé.
