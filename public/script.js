// require('dotenv').config()

// const key = process.env.OPENWEATHER_API_KEY;

// console.log(key);

// avisando que vamos mexer com api - async
async function questServer(inputCity) {
    // espere até o servidor responder - await
    // fetch é uma função que faz requisições para APIs
    // then - quando a requisição for concluída, faça algo, que é transformar a resposta em json
    const response = await fetch(`/api/weather?city=${inputCity}`);
    const data = await response.json();

    console.log(data);

    whiter(data, inputCity);
}

function button() {
    const inputCity = document.querySelector("#nameCity").value;

    questServer(inputCity);
}

function whiter(data, inputCity) {
    //pegue os dados da api e coloque no html, vai em data, em main, em temp; por exemplo
    const display = document.querySelector("#dados");

    display.style.display = "block";


    const city = document.querySelector("#city").innerHTML = "Tempo em " + inputCity[0].toUpperCase() + inputCity.substring(1);
    const tempC = document.querySelector("#temp").innerHTML = "Temperatura: " + Math.floor(data.main.temp) + "°C";
    const climate = document.querySelector("#climate").innerHTML = "Clima: " + data.weather[0].description;
    const humidity = document.querySelector("#humidity").innerHTML = "Umidade: " + data.main.humidity + "%";
    const favicon = document.querySelector("#favicon").href = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    background(data);
}

function background(data) {
    const body = document.querySelector("body");
    const temp = Math.round(data.main.temp);

    if (temp < 15) {
        body.style.background = "url('imgs/cold.jpg') no-repeat center center fixed";
        body.style.backgroundSize = "cover";
    }
    else if (temp < 10) {
        body.style.background = "url('imgs/gelado.jpg') no-repeat center center fixed";
        body.style.backgroundSize = "cover";
    }
    else if (temp < 20) {
        body.style.background = "url('imgs/medio.jpg') no-repeat center center fixed";
        body.style.backgroundSize = "cover";
    }
    else if (temp < 30) {
        body.style.background = "url('imgs/fresco.jpg') no-repeat center center fixed";
        body.style.backgroundSize = "cover";
    } else {
        body.style.background = "url('imgs/sun.jpg') no-repeat center center fixed";
        body.style.backgroundSize = "cover";
    }
}
