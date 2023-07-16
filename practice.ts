// Type Interfaces
let aged = true;
let realAge = 0;

if (aged) {
  realAge = 4;
}

let dogAge = realAge * 7;

console.log(`${dogAge} years`);

// Type Shapes
let firstName = 'muriel!';

console.log(firstName.toUpperCase());

console.log(firstName.length);

// Any

let guess;

guess = "green";
console.log(guess);
guess = 1;
console.log(guess);

// Variable type annotations or declarations

let phoneNumber: string;

if (Math.random() > 0.5) {
  phoneNumber = '+61770102062';
} else {
  // phoneNumber = 7167762323; //error
  phoneNumber = '7167762323';
}

// functions - parameter type annotations

function triple(value : number) {
  return value * 3;
}

function greetTripled(greeting : string, value : number) {
  console.log(`${greeting}, ${triple(value)}!`);
}

greetTripled('Hiya', 5);


export {}