/* 
Functions: three ways to write them: exercise
In this exercise we're going to write a single function in three styles.
The function we're going to create will do the following.
take two numbers
each number will be squared (multiplied with itself)
the squared numbers will be added together
this sum will be squared again
the resulting value is returned
Write this function in all three styles and give the functions and their arguments good names. They cannot have exactly the same name. There are multiple ways to do this.
function declaration
function expression
arrow function
After you're done, check that all three functions give the same result if you give them the same arguments.
*/
//Opdracht 9 op de moderne manier
const squareSquare1 = function (number1, number2) {
    const square1 = (number1 * number1);// kwadraad van nummer 1
    const square2 = (number2 * number2);// kwadraad van nummer 2
    const sum = (square1 + square2); // tel de twee kwadraten op
    const result = (sum * sum); // het kwadraad van de som
    return result; //geef het resultaat van de hele som
};
const actualSquare1 = squareSquare1(7, 9);
console.log(actualSquare1);
//Opdracht 9 op de klassieken manier
function squareSquare2(number1, number2) {
    const square1 = (number1 * number1);// kwadraad van nummer 1
    const square2 = (number2 * number2);// kwadraad van nummer 2
    const sum = (square1 + square2); // tel de twee kwadraten op
    const result = (sum * sum); // het kwadraad van de som
    return result; //geef het resultaat van de hele som  
}
const actualSquare2 = squareSquare2(7, 9);
console.log(actualSquare2);
//Opdracht negen met de Arrow manier
const squareSquare3 = (number1, number2) => {
    const square1 = (number1 * number1);// kwadraad van nummer 1
    const square2 = (number2 * number2);// kwadraad van nummer 2
    const sum = (square1 + square2); // tel de twee kwadraten op
    const result = (sum * sum); // het kwadraad van de som
    return result; //geef het resultaat van de hele som 
};
const actualSquare3 = squareSquare3(7, 9);
console.log(actualSquare3);
