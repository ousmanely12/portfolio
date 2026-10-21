# Portfolio — Mohamed Ousmane LY

Portfolio personnel de **Mohamed Ousmane LY**, développeur Web Fullstack & Mobile, étudiant en L3 Informatique de Gestion à SMI (Thiès, Sénégal).

Site one-page : présentation, compétences, projets, parcours et formulaire de contact. Thème clair / sombre et design responsive.

## Technologies

- React 19 + Vite
- HTML5 / CSS3 (sans framework CSS)
- Formspree pour l'envoi du formulaire de contact

## Lancer le projet

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## Personnaliser

Tout le contenu (infos personnelles, compétences, projets, parcours) se trouve dans [`src/data.js`](src/data.js).
Un lien laissé vide (`github`, `cvUrl`, `demoUrl`, `githubUrl`) masque le bouton correspondant.

- **CV** : déposer le PDF dans `public/` puis renseigner `cvUrl` (ex. `"/cv-mohamed-ousmane-ly.pdf"`).
- **Photos** : `public/profile-1.jpg` et `public/profile-2.jpg`.

## Formulaire de contact

1. Créer un formulaire gratuit sur [formspree.io](https://formspree.io).
2. Créer un fichier `.env` à la racine avec l'identifiant du formulaire :

   ```
   VITE_FORMSPREE_ID=xxxxxxxx
   ```

3. Sur Netlify / Render, ajouter la même variable d'environnement.

Sans cette variable, le bouton « Envoyer » ouvre la messagerie du visiteur avec le message pré-rempli.
