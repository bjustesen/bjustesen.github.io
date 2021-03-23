let temp = document.getElementById("temp").innerText;
let wind = document.getElementById("windSpeed").innerText;

if (temp <= 50 && wind > 3) {
    let windPower = Math.pow(wind, .16);
    let windChill = 35.74 + .6215 * temp - 35.75 * windPower + .4275 * temp * windPower;
    document.getElementById("windChill").innerText = Math.round(windChill);
} else {
    document.getElementById("windChill").innerText = "N/A";
}
    



