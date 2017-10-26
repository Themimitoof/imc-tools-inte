/**
 * IMC Tools Inté - Outil de votes pour la journée d'intégration
 * Version: 2.0.0
 * Auteur: Michael Vieira <contact+dev[at]mvieira[dot]fr>
 * Licence: MIT
 */

const db   = require("sqlite"),
      path = require("path");

db.open(path.resolve(__dirname + "/../database.sqlite"), {cached: true}).catch((err) => {
    console.error("Unable to open database. See trace:\n", err);
    process.exit(1);
});

module.exports = db;