let num="33"

console.log(typeof(num)) //string
console.log(typeof num)  //string

let valueIntNum= Number(num) //gets converted to number

console.log(typeof valueIntNum); //o/p number
console.log(valueIntNum);  // output : 33

// let variable = "33abc"
// let valueIntNum2 = Number(variable) //gets converted to number

// console.log(typeof valueIntNum2);  //o/p number
// console.log(valueIntNum2);  // output : NaN (Not A Number)


let variable = null
let valueIntNum2 = Number(variable) //gets converted to number

console.log(typeof valueIntNum2);  //o/p number
console.log(valueIntNum2);  // output : 0 (null values gets converted to 0 int value)


// "33" => 33
// "33abc" => NaN
// null => 0
// true => 1 ; false => 0


let isLoggedIn = 1 //number
let booleanIsLoggedIn = Boolean(isLoggedIn) //gets converted to Boolean datatype

console.log(typeof booleanIsLoggedIn);  //o/p boolean
console.log(booleanIsLoggedIn); //true

/*  1 gets converted to true
    0 gets converted to false
    "" gets converted to false (empty string)
    "surya" gets converted to true (valued string)

*/



