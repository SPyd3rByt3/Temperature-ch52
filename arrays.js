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

let color = ["Red","Yellow","Black","White"]
let image = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYJJtcDVHnbjuBDvgaycCm7mBA8gg0jk4MQ&s",
    "https://vehicle-images.dealerinspire.com/stock-images/chrome/9e3a3374c5684f8d19765b3a170a7cfe.png",
    "https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&w=8667&h=8667&x=797&y=222&height=326&width=578&vehicle=8_N18&paint=B51&fabric=K&brand=nisnna&sa=1_B,2_DT,4_A,5_L,6_F,7_Z,11_E,12_U,13_B,17_C,18_A,SHADOW_ON,PI_ON,PE_ON,2024",
    "https://imgd.aeplcdn.com/1200x900/ec/4b/5E/19413/img/m/Toyota-GT86-special-Front-view-54187_ol.jpg?t=160058840&t=160058840",
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
            <p>Color</p>
        </div>
    `
}
