console.log(arrowTitle);

/* Longest Sequence */

/*  
Write a function returns the length of the longest sequence of 1s in an array of 1s and 0s.
*/
//map > elem > if elem =1 > returm sum the elem (didnt work)

//
const longestSequence = (arr) => {
  // YOUR CODE HERE
  const answer = arr.forEach(element ,index => {
    if (element === 0 ) {
      return arr.splice(0)
    }
    return  answer 
  })
   
  
}

/*
Examples:
longestSequence([0, 1, 0, 0, 1, 1, 1, 1,1, 0, 1, 1]) // => 5
longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1,1]) // => 3
longestSequence([1, 1, 0, 1, 1, 1,1, 0, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 1,1, 1, 0, 1, 0, 1, 1]) // => 5
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1,1]) // => 6
longestSequence([1, 0, 0, 1]) // => 1
longestSequence([0, 0, 0, 0]) // => "There is no one sequenced"
*/

