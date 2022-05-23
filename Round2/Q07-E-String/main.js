console.log(arrowTitle);

/* First Reverse */

/*  
Have the function FirstReverse(str) take the str parameter being passed and
 return the string in reversed order.> reverce()
 > We need to deal with the string to array 
 For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
*/

const firstReverse = (str) => {
  // YOUR CODE HERE

  let result = str.split("").reverse().join("")
  
return result
 
  }

/*
Examples:
firstReverse("I Love Code"); // => "edoC evoL I"
firstReverse("Hello World"); // => "dlroW olleH"
firstReverse("How are you?"); // => "?uoy era woH"
firstReverse(""); // => ""
*/

