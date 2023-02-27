

// Skriv en switch-statement, der ændrer Inner-HTML'en på "todayText" 
// efter hvilken dag det er i dag.

const todayText = document.getElementById('today');
// Denne variabel angiver dagen det er i dag. Hvis det er mandag, er
// variablen "0" som værdi, hvis det er tirsdag er den "1" osv.
let todayDate = new Date().getDay();





// Skriv en switch-statement, der ændrer Inner-HTML'en på "todayType" 
// efter om det i dag er en hverdag eller weekend

const todayType = document.getElementById('type');