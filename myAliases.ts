 // type alias
 /*
 in this type alias, we simply define our datatype ourselves. as in the example below.
  */

 type User = {
    name: string;
    email: string;
    isActive: boolean
 }

 function createUser(user: User){}

 createUser({name: "", email: "", isActive: true})
 /*
this type alias is important in that it reduces the line of code. we could define a variable 
with many values and just pass the alias in a function, especially if the variable has to be reused several times.
this will prevent us fro entering all the properties or members of a particular object repeatedly.
 */

// example 2

type point = {
    x: number;
    y: number
}

// creating a function that will take the x, and y as paramenters.
function printCordinates(pt: point){
    console.log("the cordinate values of x is " + pt.x);
    console.log("the cordinate value of y is "+ pt.y);
}

printCordinates({x: 100, y:100});

export{}