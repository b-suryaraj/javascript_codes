let myDate=new Date()
console.log(myDate.toString()); //Thu Sep 12 2024 02:04:04 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Thu Sep 12 2024
console.log(myDate.toLocaleString()); //9/12/2024, 2:04:04 AM
console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toDateString()); //Sat Jan 14 2023

//Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
let myTimeStamp = Date.now(); 
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


