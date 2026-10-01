// IC11 – COSC 2328 – Professor McCurry
// Implemented by: Jessica Dunlap

// Function Declarations
console.log("--- function declarations ---");

function greet(name){ return "hello, " + name + "!";}
console.log(greet("Jessica"));

function area(width, height) { return width * height; }
console.log("area of 4 x 5 = " + area(4, 5));

// arrow functions
console.log("--- function expressions & arrow functions ---");

const multiply = function (a, b) { return a * b; };
const devide = function (a, b){ return a / b; };
const square = n => n * n;

console.log("multiply(3, 6) = " + multiply(3, 6));
console.log("devide(20, 5) = " + devide(20, 5));
console.log("square(7) = " + square(7));

// default parameters & rest operators
console.log("--- default parameters & rest operators ---");

function greetUser( name, greeting = "hello"){return greeting + ", " + name + "!";}

console.log(greetUser("Jessica"));
console.log(greetUser("Jessica", "welcome"));

function sumAll(...numbers){
    let total = 0;
    for (const n of numbers){total += n; }
    return total;
}

console.log("sumAll (1,2,3) = " + sumAll(1,2,3));


// call back functions
console.log(" --- callback functions ---")

function processNumber(value, callback){
    console.log("processing " + value + " ... ");
    return callback(value);
}

const double = n => n * 2;
const triple = n => n * 3;

console.log("double -> " + processNumber(5, double));
console.log("triple -> " + processNumber(5, triple));

// object method with this

console.log(" --- object methods (this) ---");

const product = {
    brand: "Acme",
    price: 12.5,
    quantity: 4,
    total() { return this.price * this.quantity; },
    describe(){
        return this.quantity + " x " + this.brand + " @ $" + this.price +
         "= $"+ this.total().toFixed(2);
      
    }
};

console.log("total: $" + product.total().toFixed(2));
console.log(product.describe());

