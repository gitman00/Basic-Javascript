// In this lesson we are going to learn about functions
// in javascript, where will we learn; how we declare function and use it, 
// Now , Get Started ,

// ============================= Simple function =============================
// we declare function by using function syntax and then name of the function ,

function nameOftheFunction () {
    console.log("First function is created !");
}

// After writing a function, we have to execute the function,
// we can execute the function by writing the name of the function with open and close
// brackets at the end ,
nameOftheFunction();

// we can also declare function using variable,
var myFunc = function () {
    console.log("Second function is created !")
}

// Executing the second function\
// we can execute the function by writing the name of the variable with open and close 
// brackets at the end ,
myFunc();

// ============================= Arrow function =============================
// we declare arrow function by using function syntax ,
var arrowFunc = () => { 
    console.log("Arrow function is created !") ;
}

// Executing the arrow function
arrowFunc();