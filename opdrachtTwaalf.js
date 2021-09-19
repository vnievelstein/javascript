//Itterators oude stijl - loops - While loop
//Opdracht 12 deel 1. Maak een array colors met yellow, blue,
//red, orange en schrijf een while loop die de kleuren logt en dan stopt

//for loop 
let colors = ["yellow", "blue", "red", "orange"];
for (i = 0; i < colors.length; i++) {

    console.log("This is color " + colors[i]);
}
console.log("There ar no more colors");

//while loop
const colors2 = ["grey", "purple", "pink", "green"];
let m = 0;
while (colors2[m]) {
    console.log("This is color " + colors2[m]);
    m++;
}
console.log("There ar no more colors");

//Opdracht 12 deel 2. Nieuwe stijl: array methods
//voor nu kijken we naar de method: array.prototype.forEach()
//Gebruik dezelfde kleuren als startpunt en gebruik forEach
colors2.forEach(element => console.log("This is color " + element));

//vragen
//1. Hoeveel regels neemt mijn for loop en mijn while loop in beslag? => 2 regels
//2. Hoeveel regels neemt mijn forEach method in beslag? => 1 regel
//3. Welke voordelen heeft het gebruiken van een array method nog meer 
//   t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld 
//   makkelijker leesbaar? Waarom? => forEach is makkelijk leesbaar; eerst 
//   beschrijf je de array en dan zeg je; voor elk elelement van de array
//   doe je dit en dat. 
// 4.Kun je een array method gebruiken op een object? Het antwoord is nee.
//   Stel je hebt een object met 45 properties. Probeer eens uit te zoeken 
//   (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met 
//   een loop: Looping through the properties of an object.
//   Probeer dit stukje code uit en gebruik hier een object met 5 properties 
//   voor. Ben je nu aan het itereren?  => met de object.entries() method
//   moet je objecten kunnen consol loggen, het is geen itteren, want je geeft
//   het aantal propperties in:
const person = {
   name: "Vera",
   Gender: "f",
   age: 55,
    street: "Camerlingstraat",
    town: "Delft"
};
console.log(person); //test
//console.log(person.name);//test
//console.log(person.name, person.age);//test

//Met for...in en object.entries() kun je properties van een object itereren 
//for (const item in items){consol.log(item)}
//object.entries(items).map(item =>{consol.log(item)}) Ik ken map niet.
//for (const item of Object.entries(items)) {console.log(item)}
//for (const item in person){
//    console.log(item);
//}
//bovenstaand logt de properties, maar niet de inhoud van de properties
for (const item of Object.entries(person)){
    console.log(item)
}
//wat is het verschil met consol.log(person en de manier met 
//object.entries(person)? 
//wat is het verschil tussen for...in en for...of?
