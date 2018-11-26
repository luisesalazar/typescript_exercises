"use strict";
var isDone = false;
// As in JavaScript, all numbers in TypeScript are floating point values
var decimal = 6;
var color = "blue";
// template strings
var sentence = "Hello, my name is " + color + ".\nI'll be " + (decimal + 1) + " years old next month.";
// array
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// tuples
var x;
// Initialize it
x = ["hello", 10]; // OK
// x[0] and x[1]
// enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c;
// enum Color {Red = 1, Green, Blue}
// num Color {Red = 1, Green = 2, Blue = 4}
var colorName = Color[2];
// console.log(colorName); // Displays 'Green' as its value is 2 above
// any - dynamic content
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// a mix of different types
var onelist = [1, true, "free"];
onelist[1] = 100;
// void - s a little like the opposite of any, unctions that do not return a value:
function warnUser() {
    // console.log("This is my warning message");
}
