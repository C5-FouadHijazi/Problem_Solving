console.log(arrowTitle);

/* evenAppearance */

/*  
Find the first item which appear an even number of times in an array.
*/

const evenAppearance = (array) => {
  // YOUR CODE HERE
  const arr = [];

  const answer = array.filter((element, index) => {
   /*  if (element === 2) {
       arr.push(element) ;
    } */
    if ( element % 2 === 0) {
      arr.push(element);
    }
  });
  return arr.length
};

/*
Examples:
evenAppearance([1, 1, 2, 6, 6]) // => 1
evenAppearance([1, 2, 2, 9, 8, 8, 6, 6]) // => 2
evenAppearance([1, 9, 7, 3, 6, 6, 8, 9, 9]) // => 6
evenAppearance([1, 9, 7, 3, 6, 6, 8, 9]) // => 9
*/
