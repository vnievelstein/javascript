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


const uitkomst = function () {
  if (getRandomInt(25) != getal) {
       prompt("Nope, that was the wrong number. " + "You have four more times to guess again!");
  }   if (getRandomInt(25) != getal) {
          prompt("Nope, that was the wrong number. " + "You have three more times to guess again!");
       } if (getRandomInt(25) != getal) {
          prompt("Nope, that was the wrong number. " + "You have two more times to guess again!");
       } if (getRandomInt(25) != getal) {
          prompt("Nope, that was the wrong number. " + "You have one more time to guess again!");
       } if (getRandomInt(25) != getal) {
          alert("Nope, that was the wrong number. " + "We're done, thank you and good bye "+ naam);
       }
   else {
      alert("Yes! You guessed the right number, thank you and good bye! " + naam);
  }
}
uitkomst()




