console.log(arrowTitle);

/* MaximumProductOfThree */

/*  
Write a function accepts an array of integers and returns the Maximum product possible from three of those numbers.
*/

const maximumProductOfThree = (arr) => {
  let choosen = true;
  while (choosen) {
    choosen = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        choosen = true;
      }
    }
  }
  let max = arr[0] * arr[1] * arr[2];
  return max;
};

/*
Examples:
maximumProductOfThree([3, 1, 3, 7]); // => 63
maximumProductOfThree([0, 2, 3]); // => 0
maximumProductOfThree([2, 3, 5]); // => 30
maximumProductOfThree([10, 4, 5]); // => 200
maximumProductOfThree([7, 0, 5]); // => 0
*/

