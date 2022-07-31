/* 
--- Directions
    Check to see if two provided strings are anagrams of each other.
    One string is an anagram of another if it uses the same characters
    in the same quantity. Only consider characters, not spaces
    or punctuation.  Consider capital letters to be the same as lower case
--- Examples
    anagrams("rail safety", "fairy tales") --> true
    anagrams("RAIL! SAFETY!", "fairy tales") --> true
    anagrams("Hi there", "Bye there") --> false
*/

const anagrams = (stringA, stringB) => {

  let arr1 = stringA.toLowerCase().replaceAll(" ", "").split("")
  let arr2 = stringB.toLowerCase().replaceAll(" ", "").split("")


  let result = arr1.filter(element => {
    return arr2.includes(element) 
    
  });
  console.log(result);
  if (result) {
    return true
  }
  return false
}

console.log(anagrams("Hi there", "Bye there"));

module.exports = anagrams