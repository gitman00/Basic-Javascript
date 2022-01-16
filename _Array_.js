// In this lesson we are going to learn about Array in javascript, 
// where will we learn; how we declare Array and use it
// in this lesson we are going to store the list of fruits and access them
// using their index no.
// Now , Get Started ,
// In array we can store all types of data types like string,number and boolean
const fruitLists = ["apple","banana","mango","pineapple","carrot"]
// index No ========== 0 ===== 1 ====== 2 ======= 3 ======== 4 ========

// in array each stored value or data types has its unique identity which is shown by its 
// index No.

// displaying all the fruits with the help of for loop
for (let i = 0; i < fruitLists.length; i++) {
    const fruit = fruitLists[i];
    console.log(" --" + fruit);
}
//output will be 
//               --apple
//               --banana
//               --mango
//               --pineapple
//               --carrot 


// we can also see the length of the array by ,
console.log("Length of the array is " + fruitLists.length);
//output will be ' Length of the array is 5 '

// we can see the type of the array by ,
console.log("Type: " + typeof(fruitLists));
// output will be ' Type: object '