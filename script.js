let naam;
let gok;


while (naam === undefined || naam === null || naam.length === 0) { //moet altijd wat invoeren anders krijg je steeds weer wat je naam is
  naam = prompt('Welkom! Wat is je naam?');
}

alert("Welkom bij Guess the Number " + naam + "!!");


randomNum=Math.floor(Math.random() * 26); //computer genereert 0-25

gok= parseInt(prompt('Voer een nummer in van 0 tot 25?')); // uitsluitend cijfers invoer geen string zoals letter

while (isNaN(gok)) {
   gok = parseInt(
     prompt(
       "Je invoer was geen nummer. Voer alleen nummers in! Probeer het nogmaals"
     )
   );
 }

if (gok == randomNum){
   window.alert ('Gefeliciteerd je hebt gewonnen'); 
} else {
window.alert('Dat is niet correct');
};

console.log("dag " + naam + " tot de volgende keer");


