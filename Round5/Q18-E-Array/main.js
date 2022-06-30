console.log(arrowTitle);

/* ArrayCenter */

/*  
have an array of negative/positive integers, return the element in the middle position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

//know the legnth of the array
// legnth %2 = 0 => middle
// if not know the middle of the array then

const arrayCenter = (arr) => {
  if (arr.length % 2 === 0) {
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) /2;
  } else {
    return arr[Math.floor([arr.length/2])];
  }
};

/*
Examples:
arrayCenter([2, 3, -4, 6, 1, 5]); // => 1
arrayCenter([2, 3, 4, -6, 2]); // => 4
arrayCenter([2, 3, 2, 9, 2]); // => 2
arrayCenter([2, 5, 1]); // => 5
arrayCenter([2, 3]); // => 2.5
arrayCenter([]); // => "empty Array"
*/
