//Opdracht 15.1 zorg ervoor dat als je op de eerste knop klikt
//er een alert venster vershijnt met de tekst 'button clicked'
let button1 = document.getElementById("mybutton");
button1.addEventListener("click", function(){
    console.log(alert("button clicked"));
})

//Opdracht 15.2 zorg er voor dat de tweede knop bij aanklikken de achtergrondkleur veranderd 
//naar rood, door een class toe te voegen aan de body tag
//let button2 = document.getElementById("mybuttontoo");
//let bodyColor = document.getElementById("bodytag")
//button2.addEventListener("click", function(){
//    bodyColor.classList.add("red-background")
//});

//Opdracht 15.3 toggel de background collor van blue naar red door de classes te toggelen
let button2 = document.getElementById("mybuttontoo");
let bodyColorToggle = document.getElementById("bodytag")
button2.addEventListener("click", function(){
    bodyColorToggle.classList.toggle("red-background")
});
