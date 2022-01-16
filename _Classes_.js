// In this lesson we are going to learn about classes in javascript, 
// where will we learn; how we declare classes and use it
// in this lesson we are going to  execute the are of an rectangle 
// Now , Get Started ,

class Rectangle {

    constructor(Width, Height) {
       this.width = Width,
       this.height = Height
    }

    get area(){
        return this.calculation();
    }

    calculation() {
        return this.width * this.height;
    }
}

// // Executing the class
// console.log("Area of a first Rect " + " is " + new Rectangle(10,30).calculation()+ ".");

// Finding the area of a square
var Square = new Rectangle(10,10);
console.log("Area of a Square " + " is " + Square.area + ".");

// Finding the area of a rectangle
var Rect = new Rectangle(10,35);
console.log("Area of a Rect " + " is " + Rect.area + ".");

// var ran = Math.floor(Math.random() * 3);
// console.log(ran);