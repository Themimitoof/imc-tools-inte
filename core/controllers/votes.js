const route = require("express").Router(),
      db    = require("../db_connection");


route.get("/", (req, res) => {
    if(typeof req.session.userid === "undefined") return res.redirect("/identification");
    
    // Get team informations for generating the form
    db.all("SELECT * FROM teams WHERE id != ?", [req.session.team]).then((row) => {
        res.render("vote", {
            siteOptions: {
                pageTitle: "Votez pour votre équipe favorite",
                siteName: global.siteName
            }, data: row
        });
    }).catch((err) => {
        console.error("An error is occured when request to database on route GET /. Trace : \n", err);
        res.send("<h2>Si vous voyez ce message, c'est que vous etes fort et beau/belle. On vous le dit pas assez mais c'est vrai ! Par contre, il y a un probleme. Merci de voir avec l'informaticien et remerciez-le pour ce compliment.</h2>");
    });
});


route.post("/", (req, res) => {
    if(typeof req.session.userid === "undefined") return res.json({code: 403, message: "You are not connected to perform this action."});

    console.log(req.body);

    for(i = 0; i < req.session.choices; i++) {
        db.run("INSERT into results values (null, ?, ?)", [req.session.userid, req.body.team]).catch((err) => {
            console.error("An error is occured when request to database on route POST /. Trace : \n", err);            
            return res.json({code: 500, message: "An error is occured when you tried to vote. Please refresh and retry."});
        });
    }

    // If all is good, send add voted flag on users table
    db.run("UPDATE users SET voted=1 WHERE id = ?", [req.session.userid]).then(() => {
        // Destroy the session and send OK message
        req.session.destroy(() => {
            return res.json({code: 200, message: "Vote accepted. Session destroyed."});
        });
    }).catch((err) => {
        console.error("An error is occured when request to database on route POST /. Trace : \n", err);            
        return res.json({code: 500, message: "An error is occured when you tried to vote. Please refresh and retry."});
    });
});


module.exports = route;