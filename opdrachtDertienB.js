//Opdracht 13. The Guess the Number Game

//1. en 2. Maak een welkom-prompt waar de bezoeker zijn naam in kan vullen
let naam = prompt("Welcome! What is your name?");//dit werkt

//3. ontvang de input en stuur een bericht met de input en hallo
alert("Welkom " + naam);//ditwerkt

//4. en 6.laat de bezoeker een getal invoeren tussen 0 en 25
let getal = prompt("Guess a number between 0 and 25");//dit werkt

//5. en 7. functie om een (semi) random nummer te kiezen met Math.random()
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//console.log(getRandomInt(3)); // test of er een random getal wordt returned

// 8. en 9. vergelijk het ingevoerde getal met het random gestal 
//en alert geraden of niet en raad opnieuw bij fout raden en 
// zeg tot de volgende keer bij goed raden. 
const uitkomst = function () {
    if (getRandomInt(25) != getal) {
         prompt("Nope, that was the wrong number " + "Guess again!");
    }   if (getRandomInt(25) != getal) {
            prompt("Nope, that was the wrong number " + "Guess again!");
         } if (getRandomInt(25) != getal) {
            prompt("Nope, that was the wrong number " + "Guess again!");
         } if (getRandomInt(25) != getal) {
            prompt("Nope, that was the wrong number " + "Guess again!");
         } if (getRandomInt(25) != getal) {
            alert("Nope, that was the wrong number " + "We're done, thank you and good bye "+ naam);
         }
     else {
        alert("Yes! You guessed the right number, thank you and good bye! " + naam);
    }
}
uitkomst()
// nu wordt iedere keer een nieuw random getal gekozen, dat maakt de kans van de rader wel erg klein

