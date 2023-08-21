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
// Array of Tuples
var danceMoves = [
    ["chicken beak", 4, false],
    ["wing flap", 4, false],
    ["tail feather shake", 4, false],
    ["clap", 4, false],
    ["chicken beak", 4, true],
    ["wing flap", 4, true],
    ["tail feather shake", 4, true],
    ["clap", 4, true],
];
//Spread syntax with Tuples
function performDanceMove(moveName, moveReps, hasFlair) {
    console.log("I do the ".concat(moveName, " ").concat(moveReps, " times !"));
    if (hasFlair) {
        console.log("I do it with flair!");
    }
}
danceMoves.forEach(function (element) {
    performDanceMove.apply(void 0, element);
});
// Enums
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
;
var whichWayToArcticOcean;
whichWayToArcticOcean = Direction.North; // No type error.
// whichWayToArcticOcean = Direction.Southeast; // Type error: Southeast is not a valid value for the Direction enum.
// whichWayToArcticOcean = West; // Wrong syntax, we must use Direction.West instead. 
// With and without Enums
var petOnSale = 'chinchilla';
var ordersArray = [
    ['rat', 2],
    ['chinchilla', 1],
    ['hamster', 2],
    ['chinchilla', 50]
];
// Write your code below:
var Pet;
(function (Pet) {
    Pet[Pet["Hamster"] = 0] = "Hamster";
    Pet[Pet["Rat"] = 1] = "Rat";
    Pet[Pet["Chinchilla"] = 2] = "Chinchilla";
    Pet[Pet["Tarantula"] = 3] = "Tarantula";
})(Pet || (Pet = {}));
var petOnSaleTS = Pet.Chinchilla;
var ordersArrayTS = [
    [Pet.Rat, 2],
    [Pet.Chinchilla, 1],
    [Pet.Hamster, 2],
    [Pet.Chinchilla, 50]
];
console.log("Pet", Pet);
console.log("petOnSaleTS", petOnSaleTS);
console.log("ordersArrayTS", ordersArrayTS);
// String Enums
petOnSale = 'chinchilla';
ordersArray = [
    ['rat', 2],
    ['chinchilla', 1],
    ['hamster', 2],
    ['chinchilla', 50]
];
// Write your code below:
var Pet2;
(function (Pet2) {
    Pet2["Hamster"] = "HAMSTER";
    Pet2["Rat"] = "RAT";
    Pet2["Chinchilla"] = "CHINCHILLA";
    Pet2["Tarantula"] = "TARANTULA";
})(Pet2 || (Pet2 = {}));
;
var petOnSaleTS2 = Pet2.Chinchilla;
var ordersArrayTS2 = [
    [Pet2.Rat, 2],
    [Pet2.Chinchilla, 1],
    [Pet2.Hamster, 2],
    [Pet2.Chinchilla, 50]
];
