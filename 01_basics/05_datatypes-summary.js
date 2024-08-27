//Primitive

// 7 categories :
/* String
    Number
    Boolean
    null
    undefined
    Symbol
    BigInt
*/

const score = 100 //number
const scrVAl = 100.3 //number
const logIn = false //boolean
const out = null //object(special case)
let userEmail; //undefined

const id = Symbol('123')
const id2 = Sysmbol('123') //values are same but symbol datatype makes then unique to each other 
console.log(id === id2); // o/p : false



//Reference Type (Non-Primitive Datatype)
/* Array
    Objects
    Functions
*/

const arr= ["Harry","Ron","Hermoine"]
let myObj ={
    name: "surya",
    age: "20",
}

const myFunc = function(){
    console.log("Hey Guyz");
}