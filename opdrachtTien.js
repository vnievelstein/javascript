//Opdracht 10 deel 1. Hey Kiddo (Opdracht 10 vind ik wat lastig beschreven)
//create a function that has one parameter: the age and let it return
//true if age >= 18 
const checkAge = function(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const check = checkAge(23);
console.log(check);
//function die checked of iemand 18 jaar of ouder is en op basis 
//daarvan een welkomstboodschap laat zien
const welkom = function() {
    const checkAgain = checkAge(13);
    //console.log(checkAgain);
    if (checkAgain == true) {
      console.log("Hello there!");
    } else {
        console.log("Hey Kiddo!");
    }
};
 welkom();
//bovenstaand geeft ook 'Hey Kiddo' als je iets anders dan een getal invult
console.log("-------------------------------");
//Opdracht 10 deel 2. VAT calculations
//schrijf een functie die de basis prijs en het vat percentage neemt
//en de prijs inclusief vat returns. het moet uit twee functies bestaan
// een die de vat berekend en een die de functie aanroept.

//const vatCalculation = function(basePrice,vat){

const vatCalculation = function(basePrice, vatPercentage){
    const vat = basePrice * vatPercentage/100;
    console.log(vat);

};
//vatCalculation(1000,21);
//console.log("Het totaalbedrag inclusief VAT is ")
const priceInclVat = function() {
    console.log("Het totaalbedrag inclusief VAT is ");
vatCalculation(150,21);
}
priceInclVat();
console.log("-------------------------------");
//Opdracht 10 deel 3, VAT exercise 2
//Neem de prijs inclusief VAT en maak een functie die de twee
//opsplitst in een array met twee getallen; de basisprijs en de VAT prijs
//gebruik twee functies waarbij de ene funcie de andere aanroept om een
//deel van de berekening uit te voeren. 

//bereken het btw-bedrag en return de prijs inclusief btw en het btw -bedrag
const berekenBtw = function(prijsInclBtw, btwPercentage){
const btwBedrag = prijsInclBtw * btwPercentage/(100 + btwPercentage);
//console.log("Het bedrag aan btw is " ); 
return [prijsInclBtw,btwBedrag];
}
//roep de vorige functie aan om het bedrag incl. btw en de btw op te vragen.
// haal deze van elkaar af om het basisbedrag te krijgen en print het resultaat.

const berekenBasisPrijs = function(){
    const resultaat = berekenBtw(125,25);
    //console.log(resultaat);
    const resultaat2 = resultaat[0] - resultaat[1];
    console.log("Het basisbedrag is " + resultaat2);
};

berekenBasisPrijs(); // roep de functie aan om het resultaat te krijgen. 

