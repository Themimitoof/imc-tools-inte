if(document.querySelector("#choices") != null) {
    var choices = document.querySelectorAll("#choices button");

    choices.forEach((choice) => {
        choice.addEventListener("click", (e) => {
            e.preventDefault();

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            
            xhr.onreadystatechange = () => {
                console.log("this: ", this);
                if(this.readyState === XMLHttpRequest.DONE) {
                    if(this.status === 200) {
                        alert("c reusi")
                    } else if(this.status === 403) {
                        alert("t pu connecte")
                    } else alert("Arf... Vous avez cassé un truc... Voyez avec l'informaticien, il va corriger le problème sans remorts ;)");
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
        "Les résultats c'est pour bientôt !",
        "Cette fois-ci je vais eviter de créer une émeute...",
        "Les résultats arrivent... Contemplez votre président en attendant",
        "Il y a une carotte dans le potage c'est long....",
        "AH ! Voici les résultats :"
    ];


    for(i = 0; i < texts.length; i++) {
        setInterval((x) => {
            console.log(i, texts[x])
            // title.classList.remove("fadeOut");     
            // title.classList.add("fadeIn");        
            title.innerHTML = texts[x];
        }, 500 * i, i);

        // setTimeout(() => {
        //     title.classList.remove("fadeIn");
        //     title.classList.add("fadeOut");
        // }, 800);
    }
}