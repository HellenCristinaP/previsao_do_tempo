async function questServer(inputCity) {
    const city = inputCity.trim();
    if (city === "") {
        alert("Digite o nome da cidade");
        return;
    }

    try {
        //novo aprendizado - ao inves de implementar colocar a string direto para a URL, utilizei o URLSearchParams para criar a query string de forma mais segura e legível
        const query = new URLSearchParams({ city });
        const response = await fetch(`/api/weather?${query}`);
        const data = await response.json();

        if (!response.ok) {
            alert(data.error || "Não foi possível buscar o clima.");
            return;
        }

        if (!data.main || !Array.isArray(data.weather) || !data.weather[0]) {
            alert("A resposta do serviço de clima está incompleta.");
            return;
        }

        getWeather(data);
    } catch (error) {
        console.error("Erro ao buscar o clima:", error);
        alert("Não foi possível buscar o clima. Tente novamente.");
    }
}

function button() {
    const inputCity = document.querySelector("#nameCity").value;

    questServer(inputCity);
}

function getWeather(data) {
    const display = document.querySelector("#dados");

    display.style.display = "block";


    const city = document.querySelector("#city").innerHTML = "Tempo em " + data.name;
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
