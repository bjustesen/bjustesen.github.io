const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    // temporary checking for valid response and data parsing
    
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {
        let towndata = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let image = document.createElement('img');

        
        h2.textContent = towns[i].name;
        h3.textContent = towns[i].motto;
        p1.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
        p2.textContent = 'Population:' + ' ' + towns[i].currentPopulation;
        p3.textContent = 'Annual Rain Fall:' + ' ' + towns[i].averageRainfall;

        image.setAttribute('src', towns[i].imageurl); 
        image.setAttribute('alt', towns[i].name);
        
        towndata.appendChild(h2);
        towndata.appendChild(h3);
        towndata.appendChild(p1);
        towndata.appendChild(p2);
        towndata.appendChild(p3);
        towndata.appendChild(image);
        
        document.querySelector('div.towndata').appendChild(towndata);
       
      } 
      

  
});

