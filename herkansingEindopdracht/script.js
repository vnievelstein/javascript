//End assignment Web Development 2.0 Winc Academy; the color toggle
//Make a toggle burger menu; by cliciking the burger menu it apears and disapears 
let burger = document.getElementById("burgerImg"); //grab the burger img
let visible = document.getElementById("visibleMenu"); //grab the nav id
//function to hide the menu 
const hideMenu = () => visible.classList.toggle("nav-hidden");

//add an eventlistener to the burger image, clicking it will toggle the menu  
burger.addEventListener("click", () => hideMenu());

//grab the buttons by id
let buttonRed = document.getElementById("redButton"); 
let buttonBlue = document.getElementById("blueButton");
let buttonGreen = document.getElementById("greenButton");
let buttonYellow = document.getElementById("yellowButton");
let buttonHome = document.getElementById("homeButton");

//function to change the text 
const replaceText = function(element, replace){
    let el = document.getElementById(element);
    el.textContent = replace;
}

//function to change the background color
const changeBackgroundColor = function(backgroundColor) {
    document.body.className = backgroundColor;
}

//Eventlistener for clicking the buttons 
 buttonRed.addEventListener("click", () => {
    changeBackgroundColor("red-background");
    let textNew = 'Dit is de rode achtergrondkleur'; 
    replaceText("color-text", textNew);
    hideMenu()
 });

 buttonBlue.addEventListener("click", () =>{
    changeBackgroundColor("blue-background")
    let textNew = 'Dit is de blauwe achtergrondkleur'; 
    replaceText("color-text", textNew);
    hideMenu() 
});

buttonGreen.addEventListener("click", () =>{
    changeBackgroundColor("green-background")
    let textNew = 'Dit is de groene achtergrondkleur'; 
    replaceText("color-text", textNew);
    hideMenu() 
});

buttonYellow.addEventListener("click", () =>{
    changeBackgroundColor("yellow-background")
    let textNew = 'Dit is de gele achtergrondkleur'; 
    replaceText("color-text", textNew);
    hideMenu() 
});

buttonHome.addEventListener("click", () =>{
    changeBackgroundColor("lblue-background")
    let textNew = 'Dit is de lichtblauwe achtergrondkleur'; 
    replaceText("color-text", textNew);
    hideMenu() 
});
