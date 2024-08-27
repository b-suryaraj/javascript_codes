console.log("2" > 1);
console.log("02" > 1);

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true

/*The reason is that an quality check == and comparisons <><=>= work differently.
  Comparisons convert null to a number, treating it as 0.
  That's why (3) null>=0 is true and (1) null>0 is false
*/

console.log(undefined==0); //false
console.log(undefined<0);
console.log(undefined<=0);          // all of them are false
console.log(undefined>0);
console.log(undefined>=0); //false

// ===
console.log("2" === 2); //this will compare considering datatype
//==
console.log("2" == 2); //here data gets coverted to same datatype and then comparison happens


