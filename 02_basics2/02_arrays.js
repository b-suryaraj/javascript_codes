const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc)

//marvel will become 2-d array with arr dc as one of it's elements
// console.log(marvel);  //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] 

const allHeroes = marvel.concat(dc)
// console.log(allHeroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//combines both arr into a new arr and then print the new arr (old arr doesn't get changed)


// (...) this is spread operator
const allNewHeroes = [...marvel, ...dc]
// console.log(allNewHeroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//combines both into new arr just like concat

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArr = anotherArr.flat(Infinity);
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(realAnotherArr);

// console.log(Array.isArray("Hitesh"));      //false
// console.log(Array.from("Hitesh"));         //[ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name:"Hitesh"}));  //[]  (interesting case)

let sc1=100
let sc2=200
let sc3=300

console.log(Array.of(sc1,sc2,sc3));

