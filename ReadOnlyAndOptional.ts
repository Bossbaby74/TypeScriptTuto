
type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number //the question mark makes this property optional
}

//creating a variable that will access the type we created above
let myUser: User = {
    _id: "1234",
    name: "Gabe",
    email: "gabe@gmail.com",
    isActive: false,

}
type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string    
}

type cvv = {
    cvv: number
}

type cardDetails = cardNumber & cardDate & cvv //combining 2 different types to form another type.

export{}


