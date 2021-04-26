let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [3, 2, 1];
let truths: boolean[] = [true, true, false];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// When to use annotations
// 1) Function that return 'Any'
const json = '{"x": 4, "y": 30}';
// const coordinates = JSON.parse(json); // hover over coordinates to see TS return 'Any' type
// ANY TIME YOU SEE RETURN TYPE AS 'Any', ADD TYPE ANNOTATION
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initialize it on another line
let words = ['red', 'green', 'blue'];
// let foundWord; // hover over to see 'Any'
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]; // Shows squiggly TS error because it expects only boolean if '| number' not given
  }
}