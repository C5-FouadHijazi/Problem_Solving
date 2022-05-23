console.log(arrowTitle);

/* find Highest Possible Sum */

/*  
Write a function calculates the Highest possible sum of any n consecutive numbers in an array arr of integers (where n ≥ 1).
*/

//sodoCode
//first we will try to find the biggest number in the array
//we will start with an initial value 0
//here we will sum the values of the length num then assign it to maxsum
//>> we will iterate the main array taking into consideration the num array and then take the max value
//>> we will start iterate the array start from num not from zero to check the next elements after the num array length
//>> will check the sum of the array after num length array
//At the end will compare between two sums to took the maximum sum

const findHighestPossibleSum = (arr, num) => {
  let maxsum = 0;
  for (let i = 0; i < num; i++) {
    maxsum = maxsum + arr[i];
  }
  let tempSum = maxsum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - num];
    maxsum = Math.max(tempSum, maxsum);
  }
  return maxsum;
};

/*
Examples:
findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 1) // => 10
findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 2) // => 14
findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 3) // => 16
findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 4) // => 20
findHighestPossibleSum([10, 2, 3, 4, 2, 6, 8], 5) // => 23

findHighestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 1) // => 10
findHighestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 2) // => 14
findHighestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 3) // => 22
findHighestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 4) // => 26
findHighestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 5) // => 29


findHighestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 1) // => 10
findHighestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 2) // => 19
findHighestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 3) // => 22
findHighestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 4) // => 32
findHighestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 5) // => 36
*/
