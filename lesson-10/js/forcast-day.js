let day= new Date();

let dayNames=[
    "Sun", 
    "Mon", 
    "Tues", 
    "Wed", 
    "Thu", 
    "Fri", 
    "Sat"
];
  
var nextDay= new Date();
nextDay.setDate(day.getDate()+1);
var plusOne=dayNames[nextDay.getDay()];
document.getElementById("dayPlusOne").innerHTML=plusOne;
    
nextDay.setDate(day.getDate()+2);
var plusTwo=dayNames[nextDay.getDay()];
document.getElementById("dayPlusTwo").innerHTML=plusTwo;

nextDay.setDate(day.getDate()+3);
var plusThree=dayNames[nextDay.getDay()];
document.getElementById("dayPlusThree").innerHTML=plusThree;

nextDay.setDate(day.getDate()+4);
var plusFour=dayNames[nextDay.getDay()];
document.getElementById("dayPlusFour").innerHTML=plusFour;

nextDay.setDate(day.getDate()+5);
var plusFive=dayNames[nextDay.getDay()];
document.getElementById("dayPlusFive").innerHTML=plusFive;