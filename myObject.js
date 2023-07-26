// onjects in ts
/*
 how do objects work and when do we need to use them ?

how objects work: co llecting values from db and using objects
to parse it to the db

the use case of objects is through the fxns. creating a fxn and parsing the objects through a fxn and returning the objects through the function
*/
var user = {
    name: "Gabe",
    email: "gabe@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Gabby", isPaid: false, email: "gabe@gmail.com" };
//this newUser method handles the case of adding a member that was not initially there, like the email.
createUser({ name: "Gabe", isPaid: false });
createUser(newUser);
//what happens when a fxn returns an object?
/*
when we declare objects, we cannot add elements that were not previously defined
when creating them. rather, ino order to handle that, we could simply create another method that
could handle such an exception
*/
function createCourse() {
    return { name: "TypeScript", price: 400 };
}
