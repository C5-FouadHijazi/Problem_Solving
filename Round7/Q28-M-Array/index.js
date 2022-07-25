/** 
--- Directions
     - Given an array and chunk size, divide the array into subarray
     - Each subarray length is equal to the passed size 
--- Examples
     - chunk([1, 2, 3, 4], 2)     --> [[ 1, 2], [3, 4]]
     - chunk([1, 2, 3, 4, 5], 2)  --> [[ 1, 2], [3, 4], [5]]
     - chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
     - chunk([1, 2, 3, 4, 5], 4)  --> [[ 1, 2, 3, 4], [5]]
     - chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/


const chunk = (array, size) => {
     /*    const arr_result = []
        let new_arr = [...array]
        const inResult = Math.ceil(new_arr.length / size)
        
        for (let i = 0; i < inResult; i++) {
             arr_result.push(new_arr.splice(0, size))
        }
        return arr_result */

     const result = []
     while (array.length) {
          let tepArray = array.splice(0, size)
          result.push(tepArray)
     }
     return result
};
console.log(chunk([1, 2, 3, 4, 5], 10));
/* console.log(chunk([1, 2, 3, 4, 5], 10));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); */



module.exports = chunk;
