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
function proclaim(status = "not ready...", repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}

proclaim();
proclaim('ready?');
proclaim('ready!', 3);


//inferring return types and explicit return types
function getRandomNumber() : number{
  return Math.random();
}

const myVar = getRandomNumber();
console.log(myVar);

// void return type
function printRandomNumber() : void{
  console.log(Math.random());
}

printRandomNumber();

// Arrays:
let bestNumbers: number[] = [7,77,4];
let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts: string[] = ['scrambled eggs', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans: boolean[] = [true, false];


// Multidimensional Arrays:
let bestMealPlan: string[][] = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
let bestBooleansTwice: boolean[][] = [bestBooleans, bestBooleans];
let numbersMulti: number[][][] = [ [[1],[2,3]], [[7],bestNumbers] ];

//Tuples

let favoriteCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];

//Array Type Inference
let dogTup: [string, string, string, string] = ['dog', 'brown fur', 'curly tail', 'sad eyes'];

let myArr = dogTup.concat([]);
console.log(myArr);

myArr[50] = 'not a dog';
console.log(myArr);



export {}