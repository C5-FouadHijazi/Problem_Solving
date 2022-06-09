console.log(arrowTitle);

/* Sum Array Odd */

/*  
Write a function that returns the sum of odd numbers in an array.
*/
//Need to check on each number if its %2 !=== 0 > add it to array , them sum all the index
const SumOddNumber = (arr) => {
  let i = 0;
  arr.forEach((element) => {
    if (element % 2 === 1) {
      i = i + element;
    }
  });
  return i;
};

/*
Examples:
SumOddNumber([1, 2, 3, 4, 5]) // => 9
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
SumOddNumber([2, 4, 6,0 ]) // => 0
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([-2, 0, 4, -3, 5]) // => 2
SumOddNumber([]) // => 0
*/
