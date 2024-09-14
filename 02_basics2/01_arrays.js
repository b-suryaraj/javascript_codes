//array 


/*********keypoints about arrays
    1. JavaScript arrays are resizable and can contain a mix of different data types.
    2. JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers
    3. JavaScript arrays are zero-indexed
    4. JavaScript array-copy operations create shallow copies.
*/


const arr = [0,1,2,3,4]
const arr2  = new Array(1,2,3,4)

console.log(arr[0]) //element at 0 index(1st pos)
console.log(arr2[0]) //element at 0 index(1st pos)

//arr methods
arr.push(6);
arr.push(7);
arr.pop();