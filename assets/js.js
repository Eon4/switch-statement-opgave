

// Skriv en switch-statement, der ændrer Inner-HTML'en på "todayText" 
// efter hvilken dag det er i dag.

const todayText = document.getElementById('today');
console.log(new Date);

const text = "Mandag";
document.getElementById("today").innerHTML = text;
// Denne variabel angiver dagen det er i dag. Hvis det er mandag, er
// variablen "0" som værdi, hvis det er tirsdag er den "1" osv.
let todayDate = new Date().getDay();

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }



// Skriv en switch-statement, der ændrer Inner-HTML'en på "todayType" 
// efter om det i dag er en hverdag eller weekend

const todayType = document.getElementById('type');