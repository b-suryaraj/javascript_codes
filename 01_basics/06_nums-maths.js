const sc=400
// console.log(sc);

const balance= new Number(100)
// console.log(balance);

// console.log(balance.toString().length); //converting num to string
// console.log(balance.toFixed(2));  //number of digits after decimal

const otherNum = 23.456213
//Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
// console.log(otherNum.toPrecision(3)); //priority given to digits before decimal

const hundreds = 1000000
//Converts a number to a string by using the current or specified locale.
// console.log(hundreds.toLocaleString()); //international number system (1,000,000)
// console.log(hundreds.toLocaleString('en-IN')); //indian number system (10,00,000)

// ************MATHS************

// console.log(Math);
// //Returns the absolute value of a number (the value without regard to whether it is positive or negative).
// console.log(Math.abs(-4)); //4
// //Returns a supplied numeric expression rounded to the nearest integer
// console.log(Math.round(4.6)); //5
// //Returns the smallest integer greater than or equal to its numeric argument.
// console.log(Math.ceil(4.2)); //5
// //Returns the greatest integer less than or equal to its numeric argument.
// console.log(Math.floor(4.9)); //4
// //Returns the smaller of a set of supplied numeric expressions.
// console.log(Math.min(4,9,5,1,2)); //4
// //Returns the larger of a set of supplied numeric expressions.
// console.log(Math.max(4,3,6,1,9)); //4

//Returns a pseudorandom number between 0 and 1.
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

//Generating random number between a range min-max
const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min + 1))+min);

