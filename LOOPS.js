/*const is 2 (in *Table of 2's) (or whatever num is put into the prompt so as to always be multiplied by itself = same num)

var is 0-10 or 0???*/

//document.write("<h2> For Loops Practice");

    //ACTIVITY 1//  <<---NOT EFFICIENT --- too much small memory!!!
    //Like if you needed to write 2 * 0-100, it wouldl be obsolete & redundant.
    //Dont use EVEN IF EFFECTIVE

/*document.write(`
    <h3> Table of 2's!<h3>
    //</br> -->unneccessary
    <p>2 x 0 = 0<6/p>
    <p>2 x 1 = 2</p>
    <p>2 x 2 = 4</p>
    <p>2 x 3 = 6</p>
    <p>2 x 4 = 8</p>
    <p>2 x 5 = 10</p>
    <p>2 x 6 = 12</p>
    <p>2 x 7 = 14</p>
    <p>2 x 8 = 16</p>
    <p>2 x 9 = 18</p>
    <p>2 x 10 = 20</p>
`);*/


///THE 'FOR' LOOP\\\

/*for(starting_value; stopping_value; interval){
    //activities
} 


for(let i=0; i<11; i++){ 
    console.log("using for loops");
    
}*/

//you can declare the const or index=0 BEFORE the FOR statemnent
//for(let index=0; index<11; index++){ 
//   console.log("using for loops");
//}

//index++ = index + 1 (adding 1 each time)
//for (let index = 0; index < array.length; index++) {
//    const element = array[index];
//   for
//}



// Activity 3 JUst does 1 2 3 4 5...//

//for (let i = 0; i<=10; i++){
//    let result = 2*i; 
    //console.log(`<p>2 x {i} = {result}</p>`);
//    document.write(`<p> 2 x ${i} = ${result} </p>`);  
//}

//ACtivity 4
for(let i=2; i<101; i+=2){
    document.write(`<p>${i}</p>`) //or do a console.log(``)
}





let number = prompt("Enter the number of the table you want to display: ")

function multTable(num){
    document.write(`Multi table of ${num}`)

    for (let i = 0; i <= 10 ; i++){

        let result = num*i

        document.write(`<p> ${num} x ${i} = ${result} </p>`)

    }

}

multTable(number)
333

let image = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYJJtcDVHnbjuBDvgaycCm7mBA8gg0jk4MQ&s",

    "https://vehicle-images.dealerinspire.com/stock-images/chrome/9e3a3374c5684f8d19765b3a170a7cfe.png",

    "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&w=8667&h=8667&x=797&y=222&height=326&width=578&vehicle=8_N18&paint=B51&fabric=K&brand=nisnna&sa=1_B,2_DT,4_A,5_L,6_F,7_Z,11_E,12_U,13_B,17_C,18_A,SHADOW_ON,PI_ON,PE_ON,2024",

    "https://imgd.aeplcdn.com/1200x900/ec/4b/5E/19413/img/m/Toyota-GT86-special-Front-view-54187_ol.jpg?t=160058840&t=160058840"

]



function loopFrom1To100(){
    for (let i=1; i<=100; i++){
        if (i==50){
            console.log("i found it!");
        }else{
            console.log(i);
        }      
    }
}

loopFrom1To100();
