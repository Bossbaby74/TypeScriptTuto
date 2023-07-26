// having a function with return type 
var getHello = function (s) {
    return ""; // if this return keyword is absent, then the second string will appear as an error.
};
var heros = ["Thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    // console.log(errmsg);
    throw new Error(errmsg);
}
