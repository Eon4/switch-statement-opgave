

// Skriv en switch-statement, der ændrer Inner-HTML'en på "todayText" 
// efter hvilken dag det er i dag.

const todayText = document.getElementById('today');
console.log(new Date);

document.getElementById("today").innerHTML = new Date;
// Denne variabel angiver dagen det er i dag. Hvis det er mandag, er
// variablen "0" som værdi, hvis det er tirsdag er den "1" osv.
let todayDate = new Date().getDay();

switch (new Date().getDay()) {
    case 0:
      todayText.innerHTML = "Sunday";
      break;
    case 1:
        todayText.innerHTML = "Monday";
      break;
    case 2:
        todayText.innerHTML = "Tuesday";
      break;
    case 3:
        todayText.innerHTML = "Wednesday";
      break;
    case 4:
        todayText.innerHTML = "Thursday";
      break;
    case 5:
        todayText.innerHTML = "Friday";
      break;
    case 6:
        todayText.innerHTML = "Saturday";
  }



// Skriv en switch-statement, der ændrer Inner-HTML'en på "todayType" 
// efter om det i dag er en hverdag eller weekend

const todayType = document.getElementById('type');

const weekDay = null;
const dayType = "hverdag";


switch (todayType) {
    case 0:

    weekDay = "søndag";
    dayType = "weekend";
    break;

    case 1:
    weekDay = "mandag";
    dayType = "hverdag";
    break;

} 