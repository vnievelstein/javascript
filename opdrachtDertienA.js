//Opdracht 13. The Guess the Number Game

//Maak een welkom-prompt waar de bezoeker zijn naam in kan vullen
let naam = prompt("Welcome! What is your name?");//dit werkt

//ontvang de input en stuur een bericht met de input
alert("Welkom " + naam);//ditwerkt

//laat de bezoeker een getal invoeren tussen 0 en 25
let getal = prompt("Guess a number between 0 and 25");//dit werkt

//functie om een (semi) random nummer te kiezen met Math.random()
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(2));

//vergelijk het ingevoerde getal met het random gestal en alert geraden of niet 
const uitkomst = function(){
  if (getRandomInt(25) == getal) {
   alert("Yes! You got the number right");
  } else {
    alert("Nope, that was not good");
  //deze wil je loopen, zodat het elke keer opnieuw gevraagd wordt
  }
}
uitkomst()

//Dit script laat je 1 x raden in file opdrachtDertienB komt het volledig script
//voor oneindig aantal raden en 5 keer raden 
