const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=979e25236567012c3b8dd149b86738a0';
const apiForcast = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=979e25236567012c3b8dd149b86738a0';

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
//  let card = document.createElement('section');
// let h2 = document.createElement('h2');
// let p1 = document.createElement('p');
// let p2 = document.createElement('p');
// let image = document.createElement('img');


// h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
// p1.textContent = 'Date of Birth:' + ' ' + prophets[i].birthdate;
// p2.textContent = 'Place of Birth:' + ' ' + prophets[i].birthplace;
// card.appendChild(h2);
// card.appendChild(p1);
// card.appendChild(p2);
// card.appendChild(image);

// document.querySelector('div.cards').appendChild(card);


























// fetch(apiURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  
//     // temporary checking for valid response and data parsing

//     const towns = jsonObject['towns'];


//     for (let i = 0; i < towns.length; i++) {
//       if(towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven"){

//         let towndata = document.createElement('section');
//         let h2 = document.createElement('h2');
//         let h3 = document.createElement('h3');
//         let p1 = document.createElement('p');
//         let p2 = document.createElement('p');
//         let p3 = document.createElement('p');
//         let image = document.createElement('img');

//         h2.textContent = towns[i].name;
//         h3.textContent = towns[i].motto;
//         p1.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
//         p2.textContent = 'Population:' + ' ' + towns[i].currentPopulation;
//         p3.textContent = 'Annual Rain Fall:' + ' ' + towns[i].averageRainfall;
//         // <img></img>
//         image.setAttribute('src', './media/' + 'homepage-photos/' + towns[i].photo); 
//         // <img src="media/homepagephotos/Prestion.jpg"></img> [./ means currents directory]
//         image.setAttribute('alt', towns[i].name);
//         // <img src="Prestion.jpg" alt="preston"></img>


//         towndata.appendChild(h2);
//         towndata.appendChild(h3);
//         towndata.appendChild(p1);
//         towndata.appendChild(p2);
//         towndata.appendChild(p3);
//         towndata.appendChild(image);

//         document.querySelector('div.towndata').appendChild(towndata);
//       }



//       } 



// });