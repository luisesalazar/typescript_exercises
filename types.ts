let isDone: boolean = false;

// As in JavaScript, all numbers in TypeScript are floating point values
let decimal: number = 6;

let color: string = "blue";

// template strings
let sentence: string = `Hello, my name is ${ color }.
I'll be ${ decimal + 1 } years old next month.`;

// array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// tuples
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// x[0] and x[1]

// enums
enum Color {Red, Green, Blue}
let c: Color.Green;
// enum Color {Red = 1, Green, Blue}
// num Color {Red = 1, Green = 2, Blue = 4}
let colorName: string = Color[2];

// console.log(colorName); // Displays 'Green' as its value is 2 above

// any - dynamic content
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// a mix of different types
let oneList: any[] = [1, true, "free"];
oneList[1] = 100;

// void - s a little like the opposite of any, unctions that do not return a value:
function warnUser(): void {
    // console.log("This is my warning message");
}
