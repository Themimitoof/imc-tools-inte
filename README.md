# IMC-Tools-Inté
Interface Web pour faciliter les votes lors de la journée d'intégration pour l'école IMC Randstad.


## Fonctionnalités
 * Système d'identification de l'utilisateur
 * Suppression de la possibilité de voter plusieurs fois (blocage sur la base de données)
 * Possibilité de choisir la force de vote par utilisateur (nombre de votes comptabilisés)


## Avantages
 * Nécessite uniquement NodeJS sur la machine
 * Base de données SQLite (pas besoin de mettre en place un serveur MySQL)
 * Installation de la base de données automatique


## Inconvénients
 * Limitations du nombre de connexions simultanées (du aux limitations de SQLite en lui-même)
 * Pas d'interface administrateur. La configuration doit être faite depuis un outil d'administration pour SQLite


## Installation
Dans un premier temps, installez [Node.JS](https://nodejs.org). Une fois fait, télécharger le dépôt en cliquant sur l'onglet _[releases](https://github.com/themimitoof/imc-tools-inte/releases)_ ou bien en le clonant via la commande suivante (nécessite Git) :
```
git clone https://github.com/themimitoof/imc-tools-inte
cd imc-inte
```

Ensuite, nous devons installer les dépendences propre au serveur Web ainsi que les dépendences côté _front-end_ :
```
npm i
npm i -g bower
bower i
```

Copiez le fichier ```config.js.sample``` en ```config.js``` et éditez les données en fonction de vos besoins.

Il ne vous reste plus qu'à lancer le serveur Web en tapant la commande ```node index.js```.