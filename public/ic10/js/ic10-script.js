// IC10 – COSC 2328 – Professor McCurry
// Implemented by: Jessica Dunlap

// Variables & concatenation
const city = "Austin";
const country = "USA";

let population = 980000;

console.log("Location: " + city + ", " + country);
console.log("Population: " + population);

// decision statement
if (population > 1000000) {
    console.log(city + " is a metropolis");
} else {
    console.log(city + " is a growing city");
}

// boolean
let isLoggedIn = false;
if (isLoggedIn){
    console.log("welcome back!");
} else {
    console.log("please log in");
}

// truthy/falsy

let username = 123;
if (username){
    console.log("username is accepted: " + username);
}else{
    console.log("username is required");
}


// combined logic

const hasAccount = true; 
const isEmailVerified = false;
const agreedToTerms = true;

if ((hasAccount && agreedToTerms) || isEmailVerified){
    console.log("Registration allowed");
}else{
    console.log("registration blocked");
}

// extra credit
// for both null and undefined the value is considered falsy, and prints cart is empty 


const itemCount = 5;
let hasItems = true;

if ((itemCount > 0 && hasItems)) {
    console.log("Cart has " + itemCount + " items");
} else {
    console.log("Cart is empty");
}