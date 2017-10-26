/**
 * IMC Tools Inté - Outil de votes pour la journée d'intégration
 * Version: 2.0.0
 * Auteur: Michael Vieira <contact+dev[at]mvieira[dot]fr>
 * Licence: MIT
 */

// Import all dependencies
const express    = require("express"),
      pug        = require("pug"),
      bodyParser = require("body-parser"),
      session    = require("express-session"),
      app        = express(),
      config     = require("./config.js");


// Init global variables
var HTTP_PORT   = process.env.PORT || config.httpPort || 8088;
global.siteName = process.env.NAME || config.siteName || "GPaDéNom :'(";


// Configure ExpressJS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: '4c6573206368617473206e6520676f757665726e65726f6e7420706173206c612074657272652e',
    resave: false,
    saveUninitialized: true
}));
app.set('views', __dirname + '/public/views/');
app.use("/assets", express.static( __dirname + "/public/assets"));
app.set("view engine", "pug");
app.disable('x-powered-by');


// Import core folder
require("./core")(app);


// Open webserver
app.listen(HTTP_PORT, (err) => {
    if(err) throw err;

    console.log(`OMAGAD! A wild web server as apparered on: http://localhost:${HTTP_PORT}/`);
});