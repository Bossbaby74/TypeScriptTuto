//Variable declaration and the different types used in declaring
//string
let greetings: string = "Hello Gabe";

console.log(greetings);

// number

let userID = 321.2 // this can simply be done this way in JS
let userID2: number =  125.5 // specifying the type of the variable

// boolean

let isLoggedIn: boolean = false // this is good but not compulsory in this code. but further in the lesson we will see where it is compulsory.

// example : any 
/*
It is not a particular type assigned. it just doesnt do any type checking. so it is advisable not to use any in your code.
*/

let superHero; // in case we do not know the datatype, we can just declare without assigning nor specifying the type

function getSuperHero(){
    return "Thor"
}

superHero = getSuperHero()

//example 2: specifying type
/*
In this case, even if another programmer joins you to work on your project, if he uses another type,
typescript will show an error indicating that it isn't the type used in that function
*/

let hero: string;

function getHero(){
    return "thor"

}

hero = getHero()



