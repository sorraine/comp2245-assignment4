document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("btn");
    var result = document.querySelector("#result");

    btn.addEventListener("click", function(event) {
        event.preventDefault();
        
       var value = document.querySelector("#q").value;
       
        fetch(`http://localhost/comp2245-assignment4/superheroes.php?query=${value}`)
        .then(response => response.json())
        .then(data => {
            if (value == "") {

                document.querySelector("#alias").style.display = "none";
                document.querySelector("#bio").style.display = "none";
                document.querySelector("#name").style.display = "none";
                document.querySelector("ul").style.display = "block";

               
                data.forEach(element => {
                    let list = document.createElement("li");

                    document.querySelector("ul").appendChild(list).innerHTML = element["alias"];
                });
                

            } else {
                document.querySelector("ul").style.display = "none";
                document.querySelector("#alias").style.display = "block";
                document.querySelector("#bio").style.display = "block";
                document.querySelector("#name").style.display = "block";
                document.querySelector("#name").style.color = "black";
            
                document.querySelector("#name").innerHTML = "a.k.a " + data["name"];
                document.querySelector("#alias").innerHTML = data["alias"];
                document.querySelector("#bio").innerHTML = data["biography"];
            }
        })
        .catch(error => {
            console.log(error);
            let x = document.querySelector("#name")
            x.style.display = "block";
            x.style.color = "red";
            x.innerHTML = "Superhero Not Found";
            document.querySelector("ul").style.display = "none";
            document.querySelector("#alias").style.display = "none";
            document.querySelector("#bio").style.display = "none";
            


        })

        document.querySelector("#q").value = "";
    })
})