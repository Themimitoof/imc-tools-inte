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