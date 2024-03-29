//! TASK 1
//! a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
/* class Movie {
    constructor (tittle,studio,rating){
        this.tittle = tittle;
        this.studio = studio;
        this.rating = rating;
        
    }
}
const obj2 = new Movie ("leo","seven screen studio","7");
console.log(obj2.tittle,obj2.studio,obj2.rating);
*/

//! b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
/* class Movie1 {
    constructor (tittle,studio,rating = "PG"){
        this.tittle = tittle;
        this.studio = studio;
        this.rating = rating;
        
    }
}
const obj3 = new Movie1 ("vikram","raaj kamal films international");
console.log(obj3.tittle,obj3.studio,obj3.rating);
*/

//!c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
/* class Movie1 {
    constructor (tittle,studio,rating = "PG"){
        this.tittle = tittle;
        this.studio = studio;
        this.rating = rating;
        
    }
}
const movie = [
    new Movie1 ("leo","seven screen studio","7"),
    new Movie1 ("vikram","raaj kamal films international"),
    new Movie1 ("kaithi","dream warrior","8.4"),
    new Movie1 ("love today","ags entertainment")

]
console.log(movie.filter(Movie1=>Movie1.rating ==="PG"));
*/

//!d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
/* class Movies {
    constructor (tittle,studio,rating){
        this.tittle = tittle;
        this.studio = studio;
        this.rating = rating;
        
    }
}
const obj1 = new Movies ("Casino Royale","Eon Productions","PG13");
console.log(obj1.tittle,obj1.studio,obj1.rating);
*/

//!TASK 2
//! Convert the UML diagram to Typescript class. - use number for double
/* class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color = color;
    }
    get Radius(){
        return this.radius
    }
    set Radius(n){
        this.radius = n;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color = c
    }
    get toString(){
        return `"Circle[radius= ${this.radius} ,color = ${this.color}]"`
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2)
    }
    get circumference(){
        return 2*Math.PI*this.radius
    }
}
let obj = new Circle(1.0,"red") 
console.log(obj.Color);
console.log(obj.Radius);
console.log(obj.toString);
console.log(obj.area);
console.log(obj.circumference);
obj.Radius=3.5
console.log(obj.Radius);
obj.Color="green"
console.log(obj.Color);
*/

//!TASK 3
//! Write a “person” class to hold all the details.
/* class Person {
    constructor (name,age,gender,martialstatus,contact,email){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.martialstatus = martialstatus;
        this.contact = contact;
        this.email = email;

    }
}
const obj = new Person ("vivin","22","male","single","9789689603","vivin292001@gmail.com");
console.log(obj.name,obj.age,obj.gender,obj.martialstatus,obj.contact,obj.email);
*/

//! TASK 4
//! write a class to calculate the Uber price.
/* class UberPriceCalculator {
    constructor() {
      this.baseFare = 60;
      this.costPerKilometer = 15;
      this.costPerMinute = 2.5;
      this.bookingFee = 30;
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
    
      const distanceCost = this.costPerKilometer * distanceInKilometers;
      const timeCost = this.costPerMinute * timeInMinutes;
  
      const totalPrice = this.baseFare + distanceCost + timeCost + this.bookingFee;
  
      return totalPrice;
    }
  }
  
  const calculator = new UberPriceCalculator();
  const distanceInKilometers = 6.0; 
  const timeInMinutes = 10; 
  
  const estimatedPriceINR = calculator.calculatePrice(distanceInKilometers, timeInMinutes);
  console.log(`Estimated Uber price in INR: ₹${estimatedPriceINR}`);
  */

