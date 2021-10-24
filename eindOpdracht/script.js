//Eindopdracht de kleuren-toggle
//Make the toggle menu; by cliciking the burger menu it apears and disapears 
let burger = document.getElementById("burgerImg"); //grab the burger img
let visible = document.getElementById("visibleMenu"); //grab the nav id
//Make a function which makes the class nav-visible  togglen with nav-hidden
function makeMenuHidden() {
    visible.classList.add("nav-visible");
    visible.classList.toggle("nav-hidden");
}
//add an eventlistener to the burger image with click it will toggle the class liVisible to liHidden
burger.addEventListener("click", makeMenuHidden);

//First grab the buttons by id
let buttonRed = document.getElementById("redButton"); //grab the red button
let buttonBlue = document.getElementById("blueButton");//grab the blue button
let buttonGreen = document.getElementById("greenButton");//grab the green button
let buttonYellow = document.getElementById("yellowButton");//grab the yellow button
let buttonHome = document.getElementById("homeButton");//grab the home button
//let bodyTag = document.getElementById("body-tag"); // grab the body element

//maak een functie om de tekst te vervangen
let textColor = document.getElementById("color-text"); //grab the original text by id
//functie vervangende tekst, roep deze functie ook aan in het click event
function tekstVervangen(element,vervangendeTekst) {
    let el = document.getElementById(element);
    el.textContent = vervangendeTekst;
} 

 buttonRed.addEventListener("click", function(){
    document.body.className = "red-background"
    let nieuweTekst = 'Dit is de rode achtergrondkleur'; 
    tekstVervangen("color-text", nieuweTekst);
}); //bij aanklikken functie aanroepen

//Nu de blauwe button togglen met lblue-background
buttonBlue.addEventListener("click", function(){
    document.body.className = "blue-background"
    let nieuweTekst = 'Dit is de blauwe achtergrondkleur'
    tekstVervangen("color-text", nieuweTekst);
});

//En de groene button
buttonGreen.addEventListener("click", function(){
    document.body.className = "green-background"
    let nieuweTekst = 'Dit is de groene achtergrondkleur'
    tekstVervangen("color-text", nieuweTekst);
});

//En de gele button
buttonYellow.addEventListener("click", function(){
    document.body.className = "yellow-background"
    let nieuweTekst = 'Dit is de gele achtergrondkleur'
    tekstVervangen("color-text", nieuweTekst);
});

//En de home button?
buttonHome.addEventListener("click", function(){
    document.body.className = "lblue-background"
    let nieuweTekst = 'Dit is de lichtblauwe achtergrondkleur'
    tekstVervangen("color-text", nieuweTekst);
});



