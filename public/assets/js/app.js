if(document.querySelector("#choices") != null) {
    var choices = document.querySelectorAll("#choices button");

    choices.forEach((choice) => {
        choice.addEventListener("click", (e) => {
            e.preventDefault();

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(document.forms[0])

            xhr.onreadystatechange = () => {
                if(this.readyState === XMLHttpRequest.DONE) {
                    if(this.status === 200) {
                        alert("c reusi")
                    } else if(this.status === 403) {
                        alert("t pu connecte")
                    } else alert("Arf... Vous avez cassé un truc... Voyez avec l'informaticien, il va corriger le problème sans remorts ;)");
                }
            }
        });
    });
}