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
/**
 * Prints a status starting with "I'm " and ending with `status`, repeating it the number of times specified by `repeat`.
 * @param status - the status after "I'm ", by default it is "not ready"
 * @param repeat - the number of times to print, ny default 1
 * @returns N/A
 */
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
//inferring return types and explicit return types
function getRandomNumber() {
    return Math.random();
}
var myVar = getRandomNumber();
console.log(myVar);
// void return type
function printRandomNumber() {
    console.log(Math.random());
}
printRandomNumber();
// Arrays:
var bestNumbers = [7, 77, 4];
var bestLunches = ['chicken soup', 'non-chicken soup'];
var bestBreakfasts = ['scrambled eggs', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
var bestBooleans = [true, false];
// Multidimensional Arrays:
var bestMealPlan = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
var bestBooleansTwice = [bestBooleans, bestBooleans];
var numbersMulti = [[[1], [2, 3]], [[7], bestNumbers]];
//Tuples
var favoriteCoordinates = [40, 43.2, 'N', 73, 59.8, 'W'];
//Array Type Inference
var dogTup = ['dog', 'brown fur', 'curly tail', 'sad eyes'];
var myArr = dogTup.concat([]);
console.log(myArr);
myArr[50] = 'not a dog';
console.log(myArr);
//rest parameters
function addPower(p) {
    var numsToAdd = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numsToAdd[_i - 1] = arguments[_i];
    }
    var answer = 0;
    for (var i = 0; i < numsToAdd.length; i++) {
        answer += Math.pow(numsToAdd[i], p); //exponentiation operator
    }
    return answer;
}
console.log(addPower(2, 3, 4));
