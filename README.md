# appStrategIn
![image](https://user-images.githubusercontent.com/82518647/146827000-9da1b34b-6313-468b-98d9-47f6e02da2d2.png)7

L' application permet de s’inscrire via des informations basiques.
• Au premier accès, l’utilisateur doit se créer un compte (email, mdp) sur la route /register
• Une fois le compte créé, l’utilisateur doit utiliser la route /login pour récupérer un token.
• Une fois logué, l’utilisateur peut accéder à la liste des utilisateurs déjà enregistrés sur la plateforme via la route /users.

--Installation et lancement du coté front--

Positionnez-vous sur répertoire frontend;
Installer npm avec la commande: $ npm install npm

Puis lancer le front du projet avec la commande : $ npm start
Ouvrir un navigateur web au choix et accéder au : http://localhost:3000/

--Installation et lancement du coté backend--

Positionnez-vous au répertoire backend;
Installer npm avec la commande: $ npm install npm

Puis lancer le back du projet avec la commande : $npx nodemon
Si cela ne marche pas vos faites :$ node server.js

Et Vous aurez accès à toutes les fonctionnalités de notre site

Il est important de savoir qu'il faut lancer les deux parties (frontend et backend) pour avoir accès aux fonctionnalités de notre site.
