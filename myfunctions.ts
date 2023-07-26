//in functions, we must always indiccate the type to avoid or prevent errors.

function addTwo(num: number){//funtion to add 2 to any number
    return num + 2
}

// function to return a string value
function getUpper(val: string){
    return val.toUpperCase()
}
function getLower(val2: string){
    return val2.toLowerCase()
}

//function to signup user
function signUpUser(name: string, email: string, isPaid: boolean){

}

let logInUser = (name:String, email: string, isPaid: boolean = false) =>{}
addTwo(5)
getUpper("gabe")
signUpUser("Gabe", "gabe@gmail.com", false)
logInUser("gabby", "gabby@gmail.com")