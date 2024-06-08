let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");


function displaynumfact(event) {
    if (event.key === "Enter") {
        let userInputVal = userInputEl.value;
        if (userInputVal === "") {
            alert("Enter a number");
            return
        }

        let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputVal;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    fact
                } = jsonData;
                factEl.textContent = fact;
            });

    }
}




userInputEl.addEventListener("keyup", displaynumfact);
