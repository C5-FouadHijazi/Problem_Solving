console.log(arrowTitle);

/* Reverse Each Word */

/*  
Write a function reverses the characters of every word of a sentence. sentences contain only English letter and space characters.
*/

//we need to deal with string to turn it to array > split
//we need to check evry part and then reverse the result same array with another way > map HOF
// the resut need to be revers() then we need to join it to give us the string > join()
//another case if main string are empty will return > "Wrong!! it's empty string"

const reverseEachWord = (str) => {
  // YOUR CODE HERE
  let array = str.split(" ");
  const result = array.map((elem) => {
    return elem.split("").reverse().join("");
  });

  if (result.length -1 == 0) {
    return "Wrong!! it's empty string";
  } else {
    return result.join(" ");
  }
};
/* 
Examples:
reverseEachWord("Hello world") // => "olleH dlrow"
reverseEachWord("Hello guys") // => "olleH syug"
reverseEachWord("Jouza admire Fried Chicken") // => "azuoJ erimda deirF nekcihC"
reverseEachWord(" ") // => "Wrong!! it's empty string"

*/
/* module.exports = { reverseEachWord }; */
