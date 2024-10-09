const constCharacter = "Constant the Dragon"; 
const varCharacter = "Const the Monkey"; 

 // Defining a function for the journey 
function journeyToHollywood(moneyLeft) { console.log(`${varCharacter} and ${constCharacter} set off on their journey to Hollywood.`);

console.log(`They start with $${moneyLeft} left in their pockets.`);

// As the journey continues, the money decreases 

let moneySpent = Math.floor(Math.random() * 50); 

 // Randomly spend between 0 and 50 dollars 

moneyLeft -= moneySpent; 

if (moneyLeft <= 0) { console.log(`Uh-oh! ${varCharacter} and ${constCharacter} are broke. 
They spent $${moneySpent}, leaving them with $${moneyLeft}.`);  

console.log(`"${constCharacter}: We need to do something fast!"`); 

console.log(`"${varCharacter}: How about becoming coders?"`);
}else{
console.log(`${varCharacter} and ${constCharacter} still have $${moneyLeft} left. They’re closer to Hollywood!`); } 
return moneyLeft; } 

 // A function for coding arguments between the characters 
function codingArguments() { const codingStyle = "rigid"; let variableStyle = "flexible";  

console.log(`"${constCharacter}: Let's use const everywhere! It’s ${codingStyle} and reliable."`);  

console.log(`"${varCharacter}: No way! We need let for flexibility. We need to change things on the fly!"`); 

 // Randomly decide who wins the argument 

if (Math.random() > 0.5) { console.log(`${constCharacter} wins the argument and they use const!`); 
}else{
console.log(`${varCharacter} wins and they use let!`); } }
 // A function for writing code together 
function writeCode(moneyLeft) { 
if (moneyLeft <= 0) { console.log(`"${varCharacter}: Alright, time to code for real to make a living!"`); codingArguments(); console.log(`Together, they write a program that tracks bananas and fire-breathing fuel.`); 
}else{  
console.log(`"${constCharacter}: We still have some money, let's just enjoy the journey for now."`); } } 
 // Initialize their starting money let 

moneyLeft = 100; 

 // They start with $100  
// Begin their journey and check if they run out of money 

moneyLeft = journeyToHollywood(moneyLeft); 

 // If they're out of money, they start coding 

writeCode(moneyLeft); 

