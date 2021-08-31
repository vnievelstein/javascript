/* Opdracht drie deel 1
alleen als je 18 jaar of ouder bent mag je naar binnen. */
const age = 17;
if (age < 18) {
    console.log("Sorry, je mag niet naar binnen.");
} else {
    console.log("Welkom!");
}
/* Opdracht drie deel 2
Alleen vrouwen zijn welkom op de ladiesnight*/
const isFemale = false;
if (isFemale) {
    console.log("Welkom op de ladiesnight.");
} else {
    console.log("Dit is alleen voor dames!");
}
/* Opdracht 3 deel 3 
Wie is de Bob?*/
const driverStatus = "Piet";
if (driverStatus === "Bob") {
    console.log("Je kan veilig naar huis rijden.");
} else {
    console.log("We zoeken een Bob, zodat je veilig naar huis kan.");
}
//Opdracht vier, deel één: leeftijd tussen 18 en 25jaar.
if (age <= 18 || age >= 25) {
    console.log("Sorry, geen korting.")
} else {
    console.log("Speciaal voor jou, 50% korting op bier!")
}
//Opdracht vier, deel twee: 50 jarig bestaan.
const firstName = "Piet";
if (firstName === "Sarah") {
    console.log("Sarah, je krijgt een gratis biertje!");
} else if (firstName === "Bram") {
    console.log("Bram, je krijgt een gratis bierje");
} else {
    console.log("Sorry geen gratis bier voor jou.")
}
//Opdracht vier, deel 3: Jubileum korting.
const totalAmount = 12;
if (totalAmount >= 25 && totalAmount < 50){
    console.log("Je krijgt gratis (vega)bitterballen!")
} else if (totalAmount >= 50 && totalAmount < 100){
    console.log("Je krijgt gratis een portie nachos");
} else if (totalAmount >= 100){
    console.log("Je krijgt gratis Champagne!");
} else{
    console.log("Helaas, geen cadeautje.");
} 
