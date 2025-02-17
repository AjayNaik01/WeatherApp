document.addEventListener("DOMContentLoaded", function () {
    const errorfetch = document.querySelector(".errorfetch");
    const errorlocation = document.querySelector(".errorlocation");
    const content = document.querySelector(".content");
    const temperatureElem = document.querySelector("#temperature");
    const weatherElem = document.querySelector("#weather");
    const weatherIconElem = document.querySelector("#weather-icon");
    const button = document.querySelector("#button");
    const textInput = document.querySelector("#text");

    const Api = "fb78ce68a99992432a8ff7d2f6e857a0";

    function fetchError(type) {
        errorfetch.classList.add("hidden");
        errorlocation.classList.add("hidden");
        content.classList.add("hidden");

        if (type === "fetch") {
            errorfetch.classList.remove("hidden");
        } else if (type === "location") {
            errorlocation.classList.remove("hidden");
        }
    }

    async function fetchData(city) {
        const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api}&units=metric`;
        try {
            let response = await fetch(Url);
            if (!response.ok) {
                fetchError("location");
            } else {
                let data = await response.json();
                content.classList.remove("hidden");
                errorfetch.classList.add("hidden");
                errorlocation.classList.add("hidden");
                temperatureElem.textContent = `${data.main.temp}°C`;
                weatherElem.textContent = data.weather[0].description;
                weatherIconElem.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            }
        } catch (error) {
            fetchError("fetch");
        }
    }


    button.addEventListener("click", function (event) {
        event.preventDefault();
        const city = textInput.value.trim();
        if (city) {
            fetchData(city);
        } else {
            fetchError("location");
        }
    });
});