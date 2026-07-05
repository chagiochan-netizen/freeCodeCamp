
// let firstBatch = 7
// let secondBatch = 5
// let count = firstBatch + secondBatch
// console.log(count)

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// function myLogger() {
//     console.log(42)
// }

// myLogger()

// let lap1 = 12
// let lap2 = 23
// let lap3 = 67

// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// logLapTime()

// 
// let username = "per"
// let message = "You have three new notifications"
// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)


// let countEl = document.getElementById("count-el")

// console.log(countEl)

// let count = 0;

// function increment() {
//     count += 1
//     countEl.innerText = count
// }

// function save() {
//     console.log(count)
// }
// save()

// let name = "Kubo"
// let greeting = "My name is"
// let myGreeting = greeting + ": " + name + "."
// console.log(4 + 5)
// console.log("4" + "5")
// console.log("4" + 5)
// console.log(4 + "5")

// let welcomeEl = document.getElementById("welcome-el")
// let name = "Kubo"
// let greeting = "Welcome back "

// welcomeEl.innerText = greeting + name
// welcomeEl.innerText += "👋"


// let count = 0
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContenttStr
//     countEl.textContent = 0
//     count = 0
// }

// console.log("Let's count people on the subway!")

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
}

// stack overflow
// Mdn
// w3 school

