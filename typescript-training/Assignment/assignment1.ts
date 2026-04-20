// data types -Premitive
let temp_of_city:number=37.2
//Print Temperature of city
console.log("Temperature of city:", temp_of_city);
//boolean data type
let order_placed:boolean= true
console.log("order_placed:", order_placed);
//Amount of money in a customer's bank account: 1000.50
let totalMoney:number=1000.50;
console.log("Amount of money in a customer's bank account:", totalMoney);
//Coordinates of a location (latitude, longitude): 37.7749, -122.4194
interface coordinates {
    lattitude:number,
    longitude: number

}
let coordinatesOFlocation:coordinates={
    lattitude:37.7749,
    longitude:-122.4194
}
console.log("Lattitude of a location:", coordinatesOFlocation.lattitude);
console.log("Lattitude of a location:", coordinatesOFlocation.longitude);




//Objec datatype
interface personDetails {
    phoneNum: String,
    emailAddress: String,
    maritalStatus: String,
    occupation: String,
    eyeColor: String,
    birthPlace: String,
    favColor:String
    bloodType: String
        }
let personInfo :personDetails={
    phoneNum: "568423565",
    emailAddress: "abc@gmail.com",
    maritalStatus: "Married",
    occupation: "Software Engineer",
    eyeColor: "Brown",
    birthPlace: "Karnataka",
    favColor:"Blue",
    bloodType: "B+ve"
}
console.log("Person Details:", personInfo.emailAddress);


//Current year: 2023
const currentYear = new Date().getFullYear();
console.log("Current Year is:", currentYear);

//Number of followers on a social media platform: 1,000,000
let noOfFollowers:String="1,000,000";
console.log(`Total number of followers are ${noOfFollowers}`);

//Rating of a movie: 7.5
let ratingOfMovie:number=7.5
console.log("Movierating is", ratingOfMovie);

//Title of a book: "To Kill a Mockingbird"
let titleofBook:string="To Kill a Mockingbird";
console.log(`Title of the book is ${titleofBook}`);

//Time of an event: 2:30 PM
let timeOfEvent:String="2.30PM"
console.log(`Time of an Event is ${timeOfEvent}`);

//Name of a country: "United States"
let nameOfCountry:String="United States";
console.group(`Name of the country ${nameOfCountry}`);

//Distance between two cities: 200.5
let Distance:number= 200.5
console.log("Distance between two cities",Distance);