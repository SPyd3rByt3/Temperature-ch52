console.log("script");

// Creating string variables
//Keyword nameVariable = value;
let myName = "Thomas";
let lastName = "Anderson";

console.log(myName);
console.log(lastName);
console.log(myName + " " +lastName); //concatenation

//Creating numerical variation
let myAge = 99;
console.log("Age: " + myAge);

let myGrade = 9.5;
console.log(myGrade);

//Creating boolean variables (true/false)
let isAdmin =true;
let isStudent =false;
let isProfessor =true;
console.log(isProfessor);

/* many lines of comments
xxxx
xxxxx
xxxx
xxxxx
*/

myName="Seth";
lastName="Patterson";
//my name is Seth Patterson, and I am 99 years old.
console.log(" my name is " + myName + " " + lastName + ", and I am " + myAge + " years old. ");

let number1 =10;
let number2 =5;

//addition
let addition = number1 + number2;
console.log(number1 + " + " + number2 + " = " + addition)
//subtraction
let subtraction = number1 - number2;
console.log(number1 + " - " + number2 + " = " + subtraction)
//multiplication
let multiplication = number1 * number2;
console.log(number1 + " * " + number2 + " = " + multiplication)
//division
let division = number1 / number2;
console.log(number1 + " / " + number2 + " = " + division)

//CONSTANTS
//keyword consName = value;

const pi = 3.1416;
//pi=4.5 // we can't modify a constant
console.log(pi);

let text = 'sheesh finally got it'
console.log (text)
//calculate the area of a circle   

//let circumference = 

//radius FIRST
let radius = 5

//Now, the Area of CIRCLE
//let area = pi * (radius * radius);
let area = Math.PI * Math.pow(radius, 2);
console.log(pi + " * " + radius, 2 + " = " + area)



//console.log(pi + " * " + {radius * radius} " = " + area)


//pet Name Prompt
let pet =prompt("insert your pet name:");
console.log(" your pet is: " + pet);




/*let firstName = 'Seth';
let lastName = 'Patterson';
let role = 'developer';
let msg = `${firstName} ${lastName}: ${role}`;
let msg = `${firstName} ${lastName}: ${role.toUpperCase()}`;*/