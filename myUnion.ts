//union can be used to combine many different types. it is good to be used when you don't know the type you need

let score: number | string = 33  //this allows you to use either number type or string or any other type you declared

type User = {
    name: string;
    id: number
}

type admin = {
    username: string;
    id: number
}

let gabby: User | admin = {name: "Gabe", id: 2}
 gabby = {username: "g", id: 3}

 //functions with multipple values

 function getDBId(id: number | string){
    // making API calls
    console.log(`DB ID is: ${id}`)
 }
 getDBId(3);
 getDBId("5");

// certain manipulations may not follow the first rule. so we use conditions to verify
 function getDBId2(id: number | string){
   if (typeof id === "string"){
    id.toLocaleLowerCase()
   }
   if (typeof id === "number"){
    id + 2
   }
 }

 //arrays

 const data: number[] = [1, 2, 3]
 const data2: string[] = ["1", "2", "3"]
 const data3: (string | number) [] = [1, 2, 3, "4"]
 /*
the 3 methods above are different ways to create arrays. the 3rd method permits 
us to create arrays that can be used to store either strings or numbers.
 */
 
// another example.
let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
/*if we try to assign a value that isn't part of the 3 values we assigned 
during creation, then it will show an error.

seatAllotment = "crew". this will show an error.

*/
export{}