const route = require("express").Router(),
      db    = require("../db_connection"),
      path  = require("path"),
      fs    = require("fs");

route.get("/", (req, res) => {
    // Check if the lock file exists
    fs.readFile(path.resolve(__dirname + "/../../.lockfile"), (err, data) => {
        if(err != null) return res.send("Les votes ne sont pas encore fermes. Méchant pas beau va !");
        else {
            // Get data from database
            db.all("SELECT COUNT(results.teamvoted) AS votes, teams.team_name AS team from results, teams where teams.id = results.teamvoted group by teams.id order by votes DESC").then((rows) => {
                // Create datasets for ChartJS
                var dataset = {
                    datasets: [{ 
                        data: [],
                        backgroundColor: [
                            "#6BB9F0",
                            "#F2784B",
                            "#EF4836",
                            "#00B16A",
                            "#D2D7D3",
                            "#E26A6A",
                            "#22A7F0",
                            "#C8F7C5",
                            "#FABE58",
                            "#66CC99",
                            "#8E44AD",
                            "#446CB3",
                            "#D2527F",
                            "#2C3E50",
                            "#DADFE1"
                        ]
                    }], labels: []
                };

                rows.forEach((e) => {
                    dataset.datasets[0].data.push(e.votes);
                    dataset.labels.push(e.team);
                });
                
                // Render the view
                res.render("results", {
                    siteOptions: {
                        pageTitle: "Résultats",
                        siteName: global.siteName,
                        customClass: "results"
                    }, data: {
                        pieChart: JSON.stringify(dataset),
                        rowList: JSON.stringify(rows)
                    }
                });
            }).catch((err) => {
                console.error("An error is occured when request to database on route GET /results. Trace : \n", err);                            
                return res.status(500).send("<h2>Arf... c&eacute;p&eacute;t&eacute;... En live ? Arf... la loose... Probleme avec la base de donnees.</h2>");
            })
        }
    });
});

module.exports = route;