let message1;

var day = new Date();
if(day.getDay() == 0 || day.getDay() == 5) {
   message1= "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park.";
}

if (day.getDay() == 0 || day.getDay() == 5) {
   message1 = 'Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park.';
} else {
   document.getElementById('pancakes').style.display="none";
}

document.querySelector('#pancakes').innerHTML= message1;