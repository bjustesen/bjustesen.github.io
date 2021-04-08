const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5712169&appid=979e25236567012c3b8dd149b86738a0';
const apiForcast = 'https://api.openweathermap.org/data/2.5/forecast?id=5712169&appid=979e25236567012c3b8dd149b86738a0';


fetch(apiForcast)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const list = jsonObject["list"];
    for (let i = 0; i < list.length; i++) {
      let extract = list[i].dt_txt.substr(11);
      if (extract == "18:00:00") {
        let card = document.createElement("th");
        let td = document.createElement("td");
        td.textContent = ((list[i].main.temp - 273.15) * (9 / 5) + 32).toFixed(0) + "ºF";
        card.appendChild(td);

        const imagesrc = "https://openweathermap.org/img/w/" + jsonObject.list[i].weather[0].icon + ".png"; //note the concatenation
        const desc = jsonObject.list[i].weather[0].description;
        let image = document.createElement("img");
        image.setAttribute("src", imagesrc);
        image.setAttribute("alt", desc);
        card.appendChild(image);

       
        document.querySelector("table").appendChild(card);
        document.querySelector("table").appendChild(card);
      }
    }
  });


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject)
    document.getElementById("weather").textContent = jsObject.weather[0].description;

    document.getElementById("current").textContent = ((jsObject.main.temp - 273.15) * (9 / 5) + 32).toFixed(2) + "ºF";


    document.getElementById("high").textContent = ((jsObject.main.temp_max - 273.15) * (9 / 5) + 32).toFixed(2);
    document.getElementById("humidity").textContent = jsObject.main.humidity + "%";
    document.getElementById("windspeed").textContent = jsObject.wind.speed;
    document.getElementById("windchill").textContent = doInputOutput(((jsObject.main.temp - 273.15) * (9 / 5) + 32), jsObject.wind.speed);
  });