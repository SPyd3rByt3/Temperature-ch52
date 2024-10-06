console.log("function");

//define a function with the name sayHello
function sayHello(){
    console.log("hello");
}

sayHello();//trigger/runs the fn

//function with parameters
function greet(name){
    console.log("Welcome to the system " + name);
}

greet("Seth");
greet("Andrew");

//functions that return values
function addNumbers(a,b){
    return a+b;
}

let result = addNumbers(3,5);//8
result = addNumbers(6,8);//14
console.log(result);//14

//function with default parameters
function greetings(name="Samantha"){
    console.log("Hello to " + name);
}

greetings("Ava");

function doubleNumber(a){
    return a*2;
}

let total = doubleNumber(7);
total = doubleNumber(3);
console.log(total);


//challenge 2

function combineNames(firstName = "unknown", lastName = "unknown"){
    return firstName + " " + lastName;
}

//let studentName = combineNames("Alice", "Wonderland");
//console.log(studentName);


/*total = combineNames(firstName + lastName);
firstName = (seth);
lastName = (patterson);+
console.log(studentName);
//return total;*/

function convertMinutesToSeconds(){
    const seconds = 5 * 60;
    console.log(convertMinutesToSeconds);
}
//total = minutes * convertToSeconds 

function sayHello2(){
    let name = prompt("Enter your name: ");
    //document.getElementById("result").innerHTML="<p> Welcome to the system " + name +
    document.getElementById("result").innerHTML = `<p> Welcome to the system ${name} </p>`;
    document.write("welcome to the system " + name +"</p>");
}


//document.getElementById("result").innerHTML="<p> Welcome to the system " + name + "</p>";
//document.getElementById("result").innerHTML = `<p> Welcome to the system ${name} </p>`;

console.log("Welcome to the system" + name);
//-------------------------------------------------------\\



function multiplicationTable(){
    
    document.write(`<h2> Multiplication table for 5</h2>`);
    
    for(let i=1;i<=10;i++){
        
        console.log(i);
        
        
    }
}


[let i;
for(i=0;i<5;i=i+1){
console.log(i);
}


let myArray = ["A","B","C"];
for(let i=0; i < myArray.length; i++){
console.log("The member of myArray in index " + i + "is" + myArray[i]);
}


/*The while statement is a more simple version of the for statement which checks if an expression
evaluates to true and runs as long as it says true.*/
let i=99;
while (i > 0){
console.log(i + "bottles of beet on the wall");
i -=1;
}

//The break statements allows to stop the execution of a loop.

let i=99;
while (i > 0){
console.log(i + "bottles of beet on the wall");
i -=1;
if(i==0){
break;
}
}

//ARRAYSssssssssssssssssssssssss\\

//JavaScript can hold an array of variables in an Array object. To define an array, either use the brackets
no//tation [ ] or the Array object notation:
let myArray = [1, 2, 3];
let theSameArray = new Array(1, 2, 3);
//We can use the brackets [ ] operator to address a specific cell in our array. Addressing uses zero-
//based indices, so for example, in myArray the 2nd member can be addressed with index 1.
console.log(myArray[1]);// prints out 2
//Because JavaScript Arrays are just special kinds of objects, you can have elements of different types
//stored together in the same array. The example below is an array with a string, a number, and an
//empty object.
let myArray = ["string", 10, {}]
//Exercise
//You must define an array with the following //THREE// variables:
//A string which has the value of //"What is the meaning of life?"
//A number which has a value of //42
//A boolean which has a value of //true


//In-Class Exercise
//Operations with arrays.
const numbers=[10,20,30,40,50];
console.table(numbers);
const months=["Jan","Feb","Mar","Apr", "May"];
console.table(months);
//access to the values in the array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
// Array dimension
console.log(numbers.length);
//Methods for arrays.
numbers.push(60,70,80);
numbers.unshift(-10,-20,-30);
console.table(numbers);
months.pop();
months.shift();
months.splice(2,1);
console.table(months);]


