const key = "309152e045c2b433866c6dcc6bc9c842"

// avisando que vamos mexer com api - async
async function questServer(inputCity){
    // espere até o servidor responder - await
    // fetch é uma função que faz requisições para APIs
    // then - quando a requisição for concluída, faça algo, que é transformar a resposta em json
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${key}&lang=pt_br`).then((response) => response.json());

    console.log(data);

    whiter(data);
}

function button(){
    const inputCity = document.querySelector("#nameCity").value;

    questServer(inputCity)
}

function whiter(data){
    //pegue os dados da api e coloque no html, vai em data, em main, em temp; por exemplo
    const display = document.querySelector("#dados");

    display.style.display = "block";
    

    const city = document.querySelector("#city").innerHTML = "Tempo em "+ data.name;
    const tempC = document.querySelector("#temp").innerHTML = "Temperatura: " + Math.round(data.main.temp - 273.15) + "°C";
    const climate = document.querySelector("#climate").innerHTML = "Clima: " + data.weather[0].description;
    const humidity = document.querySelector("#humidity").innerHTML = "Umidade: " + data.main.humidity + "%";

    background(data);
}

function background(data){
    const body = document.querySelector("body");
    const temp = Math.round(data.main.temp - 273.15);

    if (temp < 15){
        body.style.background = "url('../imgs/cold.jpg') no-repeat center center fixed";
        // body.style.backgroundSize = "cover";
    }
    else if(temp < 10){
        body.style.background = "url('../imgs/gelado.jpg') no-repeat center center fixed";
        body.style.backgroundSize = "cover";
    }
    else if(temp < 20){
        body.style.background = "url('../imgs/medio.jpg') no-repeat center center fixed";
        body.style.backgroundSize = "cover";
    }
    else if(temp < 30){
        body.style.background = "url('../imgs/fresco.jpg') no-repeat center center fixed";
        body.style.backgroundSize = "cover";
    } else{
        body.style.background = "url('img/sun.jpg') no-repeat center center fixed";
        body.style.backgroundSize = "cover";
    }
}