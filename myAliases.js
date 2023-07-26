"use strict";
// type alias
/*
in this type alias, we simply define our datatype ourselves. as in the example below.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) { }
createUser({ name: "", email: "", isActive: true });
// creating a function that will take the x, and y as paramenters.
function printCordinates(pt) {
    console.log("the cordinate values of x is " + pt.x);
    console.log("the cordinate value of y is " + pt.y);
}
printCordinates({ x: 100, y: 100 });
