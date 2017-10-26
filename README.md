# IMC-Tools-Inté
Interface Web pour faciliter les votes lors de la journée d'intégration pour l'école IMC Randstad.


## Fonctionnalités
 * Identification de l'utilisateur (pour éviter de voter pour sa propre équipe)
 * Blocage des comptes une fois le vote effectué
 * Possibilité de choisir le nombre de vote des utilisateurs


## Avantages
 * Nécessite uniquement NodeJS sur la machine
 * Base de données SQLite (pas besoin de mettre en place un serveur MySQL)
 * Installation de la base de données automatique


## Inconvénients
 * Toutes les contraintes de SQLite dont la connexions simultanées.
 * Pas d'interface administrateur. La configuration doit être faite depuis un outil d'administration pour SQLite


## Installation
Dans un premier temps, installez [Node.JS](https://nodejs.org) sur le poste. Ensuite, télécharger le dépôt en cliquant sur l'onglet _[releases](https://github.com/themimitoof/imc-tools-inte/releases)_ ou bien en le clonant le projet avec la commande suivante (nécessite _Git_) :
```
git clone https://github.com/themimitoof/imc-tools-inte
cd imc-inte
```

Ensuite, nous devons installer les dépendences propre au serveur Web ainsi que les dépendences pour l'aspect visuel :
```
npm i
npm i -g bower
bower i
```

Copiez le fichier ```config.js.sample``` en ```config.js``` et éditez les données en fonction de vos besoins.

Il ne vous reste plus qu'à lancer le serveur Web en tapant la commande ```node index.js```.

## Configuration
Pour la configuration, il est conseillé d'utiliser l'outil _[SQLBrowser](http://sqlitebrowser.org/) qui est open-source et libre de droit.

Lancez une première fois le serveur afin de générer la base de données. Ouvrez SQLBrowser et ouvrez la base de données qui ce situe à la racine du projet. Vous retrouverez _5 tables_ :
 * migrations : permet au serveur de connaitre la version de la base de données. __A ne surtout pas toucher !__
 * results : contient les votes des utilisateurs
 * sqlite_sequence : table maitre de la base de données. __A ne surtout pas toucher !__
 * teams : contient les équipes
 * users : contient les utilisateurs et les options de chacuns

Pour éditer les données du table, cliquez sur _Parcourir les données_ puis choisissez la table souhaité.


## En cas de pépin
En cas de problème avec le logiciel, vous pouvez ouvrir une issue en y insérant les logs afin de mieux comprendre l'erreur.

