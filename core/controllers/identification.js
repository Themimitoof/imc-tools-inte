const route = require("express").Router(),
      db    = require("../db_connection");

route.get("/", (req, res) => {
    req.session.regenerate(() => {
        res.render("identification", {
            siteOptions: {
                pageTitle: "Identification",
                siteName: global.siteName,
                alert: req.query.alert
            }
        });
    });
});

route.post("/", (req, res) => {
    db.get("SELECT * FROM users WHERE identifiant = ?", [req.body.identifiant]).then((row) => {
        if(typeof row === "undefined") return res.redirect("/identification?alert=nonexistant");
        else if(row.voted == 0) {
            // Put user informations into session
            req.session.userid = row.id;
            req.session.team   = row.team;
            req.session.voices = row.voices;

            res.redirect("/");
        } else res.redirect("/identification?alert=alreadyvoted");
    }).catch((err) => {
        console.error("An error is occured when request to database on route POST /identification. Trace : \n", err);
        res.send("<h2>Une erreur est survenue lors de la requete a la base de donnees. Merci de voir avec l'informaticien.</h2>");
    });
});


module.exports = route;