/**
 * IMC Tools Inté - Outil de votes pour la journée d'intégration
 * Version: 2.0.0
 * Auteur: Michael Vieira <contact+dev[at]mvieira[dot]fr>
 * Licence: MIT
 */

module.exports = (app) => {
    // Import db_connection and launch migrations
    const db = require("./db_connection");
    db.migrate();
    

    // Require controllers files
    const identification = require("./controllers/identification");
    const votes          = require("./controllers/votes");
    const results        = require("./controllers/results");


    // Setting up routes for controllers
    app.use("/", votes);
    app.use("/identification", identification);
    app.use("/results", results);
    
}