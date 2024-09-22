//array 


/*********keypoints about arrays
    1. JavaScript arrays are resizable and can contain a mix of different data types.
    2. JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers
    3. JavaScript arrays are zero-indexed
    4. JavaScript array-copy operations create shallow copies.
*/


const arr = [0,1,2,3,4]
const arr2  = new Array(1,2,3,4)

// console.log(arr[0]) //element at 0 index(1st pos)
// console.log(arr2[0]) //element at 0 index(1st pos)

//arr methods
// arr.push(6);
// arr.push(7);
// arr.pop();

//adding elements in front
// arr.unshift(9)
//removing elements from front
// arr.shift()

// console.log(arr.includes(9));
// console.log(arr.indexOf(3));

// const newArr = arr.join()

// console.log(typeof arr);
// console.log(arr);
// console.log(typeof newArr);
// console.log(newArr);

//slice , splice method

console.log("A ",arr);          //A  [ 0, 1, 2, 3, 4 ]

const myn1=arr.slice(1,3)       // [ 1, 2 ]
console.log(myn1);              // B  [ 0, 1, 2, 3, 4 ]
console.log("B ",arr);

const myn2=arr.splice(1,3)      
console.log(myn2);              //[ 1, 2, 3 ]
console.log("C ",arr);          // C [0, 4 ]


/* slice is different from splice in two ways:
    -> slice range is exclusive in nature whereas splice is inclusive
    -> slice just extracts the given range of elements whereas splice also remove the range of elements from the arr
*/
