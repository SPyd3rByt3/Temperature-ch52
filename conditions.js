console.log("if-statement file");

// ---if statement --- //
// if(condition) {
// code to be executed if condition is true
//}

if(1<2){
    console.log(" I am inside the if statement")
}

let studentAge=45;
let  studentAge2=35;

if(studentAge == studentAge2){
    console.log("Both are the same");
}

// ----- if-else statement -----
//if(condition){
   // code to be executed if conditon is true
//}
  //  else{
    //    code to be executed if condition is false
  //  }

/*  if("Sam" == "Jesus"){
        console.log("Sam is equal to Jesus")
    }
        else{
            console.log("Sam is different than Jesus")
        }


        if(age>=21){
            console.log("you are an adult");
        }else{
            console.log("You are underage");
        }*/

        let age=21;

        if(age>=21){
            console.log("you are an adult")
        }else{
            console.log("you are underage")
        }

        //if-else if-else statements ----
        //if(condition1){
        // code to be executed if conditon1 is true
        //}else if(condition2){
        // code to be if condition2 is true
        //}else{
        //code to be executed if conditions are false
        //}
        
        age =12;

        if(age<13){
            console.log("child");
        }else if(age<20){
            console.log("teenager");
        }else if(age<64){
            console.log("adult");
        }else{
            console.log("senior")
        }



        let viewersAge = prompt("Enter Your Age:")
        
        if(viewersAge<12){
            console.log("$5");
        }else if(viewersAge<18){
            console.log("$8");
        }else{/*(viewersAge>18)*/ //not needed, condition met.
            console.log("$10");
        }
        // EACH condition is met line by line. computer reads 1st and then when it meets condition, it then discars the rest bc: 6yrs old is = to all 3 conditions

        let temp = prompt("enter your weather:")

        if(temp<15){
            console.log("wear jacket! Its cold!")
        }else if(temp<=25){
            console.log("wear sweater!")
        }else{
            console.log("T-Shirt Time Dude! Nice out!")
        }34

        const name = prompt('What is your name?');



//HOW CAN WE INCORPORATE Template.literals TO MAKE CODING/TYPING EASIER??
//wHAT ARE PROFESSORS THOUGHTS ON THIS??
const message = `Hello, ${name}. Welcome to my music site. 
I'm happy that you came by to visit, ${name}. Please come again and listen to more music!`;
console.log(message);


//using logival AND operator &&
age = 73

if(age<13){
    console.log("child");
}else if(age>=13 && age<=19){
    console.log("teenager");
}else if(age>=20 && age<=64){
    console.log("adult");
}else{
    console.log("senior: older than 64 AARP-lvl lol")
}





