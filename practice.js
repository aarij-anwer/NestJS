"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// functions - parameter type annotations
function triple(value) {
    return value * 3;
}
function greetTripled(greeting, value) {
    console.log("".concat(greeting, ", ").concat(triple(value), "!"));
}
greetTripled('Hiya', 5);
// function proclaim(status?: string) {
//   console.log(`I'm ${status || 'not ready...'}`);
// }
// proclaim();
// proclaim('ready?');
// proclaim('ready!');
// default parameters
function proclaim(status, repeat) {
    if (status === void 0) { status = "not ready..."; }
    if (repeat === void 0) { repeat = 1; }
    for (var i = 0; i < repeat; i += 1) {
        console.log("I'm ".concat(status));
    }
}
proclaim();
proclaim('ready?');
proclaim('ready!', 3);
