// Function to convert temperature range



function convertTemperatureRange(startValue, endValue, scale) {

    

    // Loop through the range of temperatures from startValue to endValue
    
        
    
for (let temp = startValue; temp <= endValue; temp++) {
    let convertedTemp;
    
            
    
    // Check the scale parameter
    
            
    
if (scale === "C") {
    
                
    // Convert from Celsius to Fahrenheit


    
convertedTemp = (temp * 9/5) + 32;
    console.log(`${temp}°C is equal to ${convertedTemp.toFixed(2)}°F`);
    } else if (scale === "F") {
    
                // Convert from Fahrenheit to Celsius
convertedTemp = (temp - 32) * 5/9;
    console.log(`${temp}°F is equal to ${convertedTemp.toFixed(2)}°C`);
    } else {
    console.log("Invalid scale provided. Use 'C' for Celsius or 'F' for Fahrenheit.");
    return;
        }
    }
}

    // Prompt user for input values
    
const startValue = parseFloat(prompt("Enter the starting temperature:"));
const endValue = parseFloat(prompt("Enter the ending temperature:"));
const scale = prompt("Enter the scale ('C' for Celsius, 'F' for Fahrenheit:");
    
    // Call the function with the user's inputs
    
convertTemperatureRange(startValue, endValue, scale);
    
    