const db   = require("sqlite"),
      path = require("path");

db.open(path.resolve(__dirname + "/../database.sqlite"), {cached: true}).catch((err) => {
    console.error("Unable to open database. See trace:\n", err);
    process.exit(1);
});

module.exports = db;