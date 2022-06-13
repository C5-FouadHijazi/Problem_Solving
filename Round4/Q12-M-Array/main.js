console.log(arrowTitle);

/* Unique Item */

/*  
Write a function that returns the number of unique items in an array.
*/
//We need to check the index of the arry if this index of repeted in that arry will return that 1 for every repeted numbers no matter how many times its replied 
//
const uniqueItems = (arr) => {
  let number = 0;
  let count = {};
  for (let index = 0; index < arr.length; index++) {
    if (!count[arr[index]]) {
      count[arr[index]] = "found";
    }
    continue;
  }
  number = Object.keys(count).length;
  return number;
};

/*
Examples:
uniqueItems([1, 1, 1, 1, 1]) // => 1
uniqueItems([3, 3, 5, 3]) // => 2
uniqueItems([5, 1, 1, 5, 1]) // => 2
uniqueItems([1, 6, 7]) // => 3
uniqueItems([1, 2, 3, 1, 2, 3]) // => 3
uniqueItems([5, 1, 2, 2, 1, 5]) // => 3
uniqueItems([5, 77, 1, 3]) // => 4
*/

