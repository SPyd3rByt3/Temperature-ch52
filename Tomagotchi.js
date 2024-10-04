let hungerLevel = 37
const hungerDisplay = document.getElementById("hungerLevel");

function feedPet(){
    console.log("feed the monster");
    let foodAmount = 10;
// CREATE a variable foodAmount
hungerLevel-=foodAmount;
//hungerLevel+=foodAmount;
//hungerLevel=hungerLevel-foodAmount;
//---- discount the foodAmount to the hunger
if(hungerLevel<0){
    alert("Game Over LOL");
    hungerLevel=0;
}if(hungerLevel<50){
    alert("Your pet is starving, Feed! Feed!");
}
hungerDisplay.innerHTML=hungerLevel;
}