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

//rest parameters
function addPower(p:number, ...numsToAdd:number[]):number{
  let answer = 0; 
  for(let i = 0; i < numsToAdd.length; i++){
    answer += numsToAdd[i] ** p; //exponentiation operator
  }
  return answer;
}

console.log(addPower(2, 3, 4));

// Array of Tuples
let danceMoves: [string, number, boolean][] = [
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

function performDanceMove(
  moveName: string,
  moveReps: number,
  hasFlair: boolean
): void {
  console.log(`I do the ${moveName} ${moveReps} times !`);
  if (hasFlair) {
    console.log("I do it with flair!");
  }
}

danceMoves.forEach((element) => {
  performDanceMove(...element);
})

// Enums

enum Direction {
  North,
  South,
  East,
  West
};

let whichWayToArcticOcean: Direction;
whichWayToArcticOcean = Direction.North; // No type error.
// whichWayToArcticOcean = Direction.Southeast; // Type error: Southeast is not a valid value for the Direction enum.
// whichWayToArcticOcean = West; // Wrong syntax, we must use Direction.West instead. 

// With and without Enums

let petOnSale = 'chinchilla';
let ordersArray = [
  ['rat', 2], 
  ['chinchilla', 1], 
  ['hamster', 2], 
  ['chinchilla', 50]
];

// Write your code below:

enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula
}

let petOnSaleTS: Pet = Pet.Chinchilla;

let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50]
];

console.log("Pet",Pet);
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
enum Pet2 {Hamster = 'HAMSTER', Rat = 'RAT', Chinchilla = 'CHINCHILLA', Tarantula = 'TARANTULA'};

let petOnSaleTS2: Pet2 = Pet2.Chinchilla;

let ordersArrayTS2: [Pet2, number][] = [
  [Pet2.Rat, 2],
  [Pet2.Chinchilla, 1],
  [Pet2.Hamster, 2],
  [Pet2.Chinchilla, 50]
];

//objects
function sayHappyBirthdayWithObject(personObject: {name: string, age:number, giftWish:string, success:boolean}){
  let output ='';
  output += 'Happy Birthday '
         + personObject.name + '! ';
  output += 'You are now ' 
         + personObject.age + ' years old! ';
  output += 'Your birthday wish was to receive ' 
         + personObject.giftWish 
         + '. And guess what? You will ';
  if (!personObject.success){
    output += 'not ';
  }
  output += 'receive it! \n';
  console.log(output);
}

let birthdayBabies: {name: string,age:number, giftWish:string, success:boolean}[] = [
  {name: 'Liam', age: 0, giftWish: 'karate skills', success: false}, 
  {name: 'Olivia', age: 0, giftWish: 'a bright future', success:true}, 
  {name: 'Ava', age: 0, giftWish: '$0.25', success:true}
]; 

birthdayBabies.forEach(sayHappyBirthdayWithObject);


export {}