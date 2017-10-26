if(document.querySelector("#choices") != null) {
    var choices = document.querySelectorAll("#choices button");

    choices.forEach((choice) => {
        choice.addEventListener("click", (e) => {
            e.preventDefault();

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            
            xhr.onreadystatechange = () => {
                if(xhr.readyState === XMLHttpRequest.DONE) {
                    var el  = document.querySelector(".voteMsg"),
                        msg = document.querySelector(".voteMsg h2");

                    // Show the voteMsg div
                    el.classList.add("visible");

                    if(xhr.status === 200) {
                        msg.innerHTML = "Votre vote a été pris en compte. Merci pour votre participation (déso j'ai pas de récompense à donner)";
                        setTimeout(() => { window.location.href = "/"; }, 6000);
                    } else if(xhr.status === 403) {
                        msg.innerHTML = "Soit vous êtes déconnecté soit vous avez essayé de cliquer plusieurs fois pour essayer d'avoir plus de votes. AH LOL!";
                        setTimeout(() => { window.location.href = "/"; }, 6000);
                    } else msg.innerHTML = "Vous avez cassé un truc... Promis on ne vous en veut pas mais prévenez l'informaticien quand même !";
                }
            }
            
            xhr.send(JSON.stringify({ team: choice.value }));
        });
    });
}

// Results page
if(document.querySelector(".results") != null) {
    // Before showing the results, litle joke with the title
    var title = document.querySelector("#title"),
        texts = [
        "Cette fois-ci je vais eviter de créer une émeute...",
        "Donc j'ai pris mes précautions...",
        "Mais mon petit doigt me dit qu'elle va éclater dans quelques secondes...",
        "En attendant les résultats, comtemplez votre cher président !",
        "AH ! Voici les résultats :"
    ];

    var done = false, i = 0; // For manual loop into setInterval

    setInterval(() => {
        if(done != true || i < texts.length) {
            title.classList.remove("fadeOutUp");
            title.classList.add("fadeInUp");
            title.innerHTML = texts[i];

            if(i >= texts.length - 1) done = true;
            else {
                i++;
                setTimeout(() => {
                    title.classList.remove("fadeInUp");
                    title.classList.add("fadeOutUp");
                }, 2350);
            }
        }
    }, 2500);


    // Create and show chart after title
    setTimeout(() => {
        document.querySelector("#mainData").classList.add("visible");
        var pieChart = new Chart(document.querySelector("#pieChart").getContext("2d"), {
            type: "pie",
            data: pieChartData,
            options: {
                responsive: true
            }
        });
    
        document.querySelector("#congratsMsg").innerHTML = `Félicitations à l'équipe ${votesList[0].team} !`
    }, 13200);
}