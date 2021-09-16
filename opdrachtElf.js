// while voorbeeld
//let w = 0;
//while (w < 5) {
//  console.log(`This is while iteration number ${w}`);
//  w++;
//}

// for voorbeeld 
//for (let i = 0; i < 5; i++) {
//  console.log(`This is for iteration number ${i}`);
//}

//Opdracht 11 deel 1. Even Odd Reporter
//Write a loop that iterates from 0 to 20 and check
//whether the current number is even or odd.
for (let i = 0; i <= 20; i++) {
    console.log(`Is ${i} even or odd?`);
    // TODO: determine if i is odd or even
    if (i % 2 == 0) {
        console.log(i + " is even");// TODO: use console.log
    } else {
        console.log(i + " is odd");// TODO: use console.log
    }
  }
  //Opdracht 11 deel 2. Multiplication tables
// De tafel van 9
  for(let i = 1; i <= 10; i++) {
      console.log(" 9 x " + i +" = " + 9 * i);
  }

  //Opdracht 11 deel 2. Bonus
  //Use a nested loop to write the tables from 1 till 10
  for(let i = 1; i <= 10; i++){
      //console.log(" 1 x " + i +" = " + 1 * i)
      for(let k = 1; k <= 10; k++){
          console.log(k + " x " + i + " = " + k * i);
      }
  }
  
  //Opdracht 11 deel 3. The grade assigner
  //Deze functie berekend een score van 0-100
  function assignGrade(score) {
    if (score > 90) {
      return " an A";
    } else if (score > 80) {
      return " a B";
    } else if (score > 70) {
      return " a C";
    } else if (score > 65) {
      return " a D";
    } else {
      return " an E";
    }
  }
  //Schrijf een for loop die itterates van 60 tot 100. Deze waarde
  // geeft de score aan van een student. Gedurende elke itteratie roep
  // je de assingGrade functie aan met de huidige en log het statement
  // for scoring 80 points, you get a C. 

  for (let score = 60; score <= 100; score++){
      console.log("For scoring" + score + " points, you get" + assignGrade(score));
  }
