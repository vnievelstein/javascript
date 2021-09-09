/* 
Opdracht 8 deel 1: Checking if a number is big
create a function that has one parameter (argument)
inside the function check the number
if the number is bigger than 100 use the return keyword tot return true
if the number is 100 or smaller use the return keywordt to return false
calle the function with different numbers 
This function is a function that produces something.
*/
const bigNumber = function (getal){
    if (getal > 100) {
        return true;
    } else {
        return false;
    }
};
const result1 = bigNumber(200);
console.log(result1);
const result2 = bigNumber(100);
console.log(result2);
const result3 = bigNumber(20);
console.log(result3);
const result4 = bigNumber(400);
console.log(result4);
/*
Opdracht 8 deel 2: Brenda the Bouncer Bot
Three sentences:
"come in", "it's too busy now, come back later" and
"this is a club for adults"
*/
/* deze even uitgezet, zodat ik de andere kan testen 
const entree = function(maximum, current, age){
    if (age < 18){
        return "This is a club for adults";
    } else if (current >= maximum){
        return "It's too busy now, come back later";
    } else {
        return "Come in!";
    }
};
const marie = entree(100,85,27);
console.log(marie);
const dirk = entree(100, 86, 17);
console.log(dirk);
const piet = entree(100, 101, 19);
console.log(piet);
const vera = entree(100, 100, 19);
console.log(vera);
*/
// Hetzelfde resultaat met een andere functie 
const entree = function(maximum, current, age){
    if (current >= maximum){
        return "It's too busy now, come back later";
    } else if (age<18){
        return "This is an adult club";
    } else {
        return "Come in!";
    }
};
const marie = entree(100,85,27);
console.log(marie);
const dirk = entree(100, 86, 17);
console.log(dirk);
const piet = entree(100, 101, 19);
console.log(piet);
const vera = entree(100, 100, 19);
console.log(vera);
//Deze functie produceert iets 
//Opdracht 8 deel drie: Calculating the average
const average = function(number1, number2, number3, number4, number5){
    let sum = (number1 + number2 + number3 + number4 + number5);
    let devision = (sum / 5);
    return Math.round(devision); // Afronden tot een geheel getal:
}
const averageOne = average(3,3,5,6,7);
console.log(averageOne);
const averageTwo = average(12,55,87,33,45);
console.log(averageTwo);
//dit is ook een functie die wat produceert. 
