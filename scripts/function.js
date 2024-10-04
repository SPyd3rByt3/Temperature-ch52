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