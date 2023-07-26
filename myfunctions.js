//in functions, we must always indiccate the type to avoid or prevent errors.
function addTwo(num) {
    return num + 2;
}
// function to return a string value
function getUpper(val) {
    return val.toUpperCase();
}
function getLower(val2) {
    return val2.toLocaleLowerCase();
}
//function to signup user
function signUpUser(name, email, isPaid) {
}
var logInUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("gabe");
signUpUser("Gabe", "gabe@gmail.com", false);
logInUser("gabby", "gabby@gmail.com");
