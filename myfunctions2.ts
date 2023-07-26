// having a function with return type 

const getHello = (s: string):string =>{// the 2nd string is the return type of the function getHello()
    return ""// if this return keyword is absent, then the second string will appear as an error.
}

const heros = ["Thor", "spiderman", "ironman"]

heros.map((hero): string => {//the string keywrd at this level will determine definitely the rerutn value. if we do not specify, then we can actually return any.
    return `hero is ${hero}`
})

function consoleError(errmsg: string): never{
   // console.log(errmsg);
   throw new Error(errmsg);
}

 