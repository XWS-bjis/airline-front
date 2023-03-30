export interface User{
    name:String,
    surname:String,
    userName:String,
    email:String,
    password:String,
    address: Address
}

export interface Address{
    streetNumber:String,
    streetName:String,
    postalCode:String,
    town:String,
    country:String
}