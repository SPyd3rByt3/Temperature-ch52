//Arrays
let car1 = "BMW"
let car2 = "Mercedes"
let car3 = "Nissan"
let car4 = "Maclaren"

//Creating Arrays

/*let cars = [
    "BMW"
    "Mercedes"
    "Nissan"
    "Maclaren"
]*/

//let cars = [bmw, mercedes, Nissan, Maclaren]  
let cars = ["bmw", 'mercedes', "Nissan", "Maclaren"]  

let cars2 = new Array("Tesla","Nissan","Rivian");
//cREATE EMPTY ARRAY and then pass some VALUES
let carsThree = []
carsThree[0] = "Kia"
carsThree[1] = "Volvo"

console.log(cars[1])
console.log(cars2[2])
console.log(cars[3])

cars.push("Lambo")
console.log(cars)

cars[2] = "Hyundai"
console.log(cars)

console.log(cars.length)

cars.push("Bugatti")
console.log(cars)

//cars.fill(end?) --just me messN about. Oi!

cars.pop()
console.log(cars)

alert("Your Mom callD. She wants another RIDE...")

//ARRAYS and zee LOOPS bc... meh.\\

// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])
// console.log(cars[3])

for (let i = 0; i < 6; i++) {
    console.log(cars[i])
}

cars.push("Bugatti")
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

cars.push("Bugatti")
cars.push("Ferrari")
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

console.log(cars2)
console.log(cars)

let color = ["Red","Black","Blue","Yellow","White","Green","Purple","Brown"]
let image = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYJJtcDVHnbjuBDvgaycCm7mBA8gg0jk4MQ&s",
    "https://vehicle-images.dealerinspire.com/stock-images/chrome/9e3a3374c5684f8d19765b3a170a7cfe.png",
    "https://i.ytimg.com/vi/F5a2tLWfDHM/maxresdefault.jpg",
    "https://hdqwalls.com/wallpapers/yellow-mclaren-p1.jpg",
    "http://www.thesupercars.org/wp-content/uploads/2011/04/2010-IMSA-Lamborghini-Gallardo-LP-560-GTV-white.jpg",
    "http://cdn.wallpapersafari.com/10/70/QlkpIs.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.qgWw3RkiJvAV_r9XDJqtGAHaEK&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.kuF1fqprlOQXJzOxjVKj2QAAAA&pid=Api&P=0&h=180"
]

for (let i = 0; i < cars.length; i++) {
    document.getElementById("result").innerHTML+=`
        <div class="cars">
            <h6>Car ID: ${i}</h6>
            <img src="${image[i]}"/>
            <p>Car: ${cars[i]}</p>
            <p>Color: ${color[i]}</p>
        </div>
    `
}
