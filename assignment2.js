let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}


/* celsius to fahrenheit to kelvin */
celsiusInput.addEventListener('input', function(){
    // if (document.activeElement === celsiusInput){
    //     if (celsiusInput.value === "") {
    //         fahrenheitInput.value = ""; 
    //         return;
    //     }
        let cTemp = parseFloat(celsiusInput.value)
        let fTemp = (cTemp*(9/5)) + 32;
        let kTemp = cTemp + 273.15;
    
        fahrenheitInput.value = roundNumber(fTemp)
        kelvinInput.value = roundNumber(kTemp)
    // }
    
})

/*fahrenheit to celsius to kelvin */
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15

    /* When the input field receives input, convert the value from fahrenheit to celsius//
function temperatureConverter(valNum){
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}*/

    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})

/*kelvin to celsius and fahrenheit */
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp -273.15) * (9/5) + 32

    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
})

btn.addEventListener('click', ()=> {
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})







/*// Store a temperature in Celsius 
//let
function coldTemperature(){

// Change this value to any Celsius temperature 
// Convert Celsius to Fahrenheit using the formula 
let fahrenheit = (coldTemperature * 9/5) + 32; 

// Display the result in the console 
console.log(`${coldTemperature}°C is equal to ${fahrenheit}°F.`); 

// Display the result in the HTML 
document.getElementById("result").innerText = `${coldTemperature}°C is equal to ${fahrenheit}°F.`;
}*/

/*function coldTemperature(){
    let fahrenheit = (coldTemperature * 9/5) + 32; 
    console.log(`${coldTemperature}C = ${fahrenheit}F `);
    document.getElementById("result").innerText = `${coldTemperature}C = ${fahrenheit}F.`;
}*/

//console.log( "coldTemperature " + "= " "fahrenheit " );
/*function coldTemperature(){
    let fahrenheit = (coldTemperature * 9/5) + 32;
    console.log(`${coldTemperature}`)
}*/