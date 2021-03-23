const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=979e25236567012c3b8dd149b86738a0';
const apiForcast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=979e25236567012c3b8dd149b86738a0';
const eventURL= 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(apiForcast)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const list = jsObject['list'];

    for (let i = 0; i < list.length; i++) {
      if (list[i].dt_txt.includes('18:00:00')) {

        let table = document.createElement("section");


        const imagesrc = "https://openweathermap.org/img/w/" + jsObject.list[i].weather[0].icon + ".png"; //note the concatenation
        const desc = jsObject.list[i].weather[0].description;
        let image = document.createElement("img");
        image.setAttribute("src", imagesrc);
        image.setAttribute("alt", desc);
        table.appendChild(image);
        // document.querySelector("tr.temperature").appendChild(table);

        let p = document.createElement("p");
        p.textContent = ((list[i].main.temp - 273.15) * (9 / 5) + 32).toFixed(0) + "ºF";
        // ((jsObject.main.temp-273.15)*(9/5)+32).toFixed(2)
        table.appendChild(p);
        
        //table2.appendChild(table);
        
        document.querySelector('div.table').appendChild(table);
      }
    }
  });


  fetch(apiURL)
.then((response)=> response.json())
.then((jsObject)=>{
    console.log(jsObject)
    document.getElementById("weather").textContent=jsObject.weather[0].description;

    document.getElementById("current").textContent=((jsObject.main.temp-273.15)*(9/5)+32).toFixed(2)+ "ºF";
    

    document.getElementById("high").textContent=((jsObject.main.temp_max-273.15)*(9/5)+32).toFixed(2);
    document.getElementById("humidity").textContent=jsObject.main.humidity+"%";
    document.getElementById("windspeed").textContent=jsObject.wind.speed;
    document.getElementById("windchill").textContent=doInputOutput(((jsObject.main.temp-273.15)*(9/5)+32),jsObject.wind.speed);
});


fetch(eventURL)
.then(function(response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const towns = jsonObject["towns"];
   // towns.shift();
    //towns.splice(1, 3);

    //let events=towns[1].events;
    for(let i=0; i<towns.length; i++){
        if(towns[i].name=="Preston"){
        let events=towns[i].events;
        let h3=document.createElement("h3");
        h3.textContent="Upcoming Events";
        document.querySelector("section.upcomingevent").appendChild(h3);
    let div=document.createElement("div");
    for(let i=0; i<events.length; i++){
let p5=document.createElement("p");
p5.textContent=events[i];
div.appendChild(p5);
document.querySelector("section.upcomingevent").appendChild(div);}}}

});
