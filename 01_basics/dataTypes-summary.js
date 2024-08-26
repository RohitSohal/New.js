// # Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')
    
console.log(id === anotherid);

const bigNumber = 12345678912345678n



// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Captain Marvel", "Shaktiman"]
let myObj = {
    Name: "Rohit Sohal",
    age: 27,
}

const myFunction = function() {
    console.log("Hello World")
}