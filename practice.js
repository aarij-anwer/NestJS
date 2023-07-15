// Type Interfaces
var aged = true;
var realAge = 0;
if (aged) {
    realAge = 4;
}
var dogAge = realAge * 7;
console.log("".concat(dogAge, " years"));
// Type Shapes
var firstName = 'muriel!';
console.log(firstName.toUpperCase());
console.log(firstName.length);
// Any
var guess;
guess = "green";
console.log(guess);
guess = 1;
console.log(guess);
// Variable type annotations or declarations
var phoneNumber;
if (Math.random() > 0.5) {
    phoneNumber = '+61770102062';
}
else {
    // phoneNumber = 7167762323; //error
    phoneNumber = '7167762323';
}
