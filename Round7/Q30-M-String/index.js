/*
--- Directions
    Write a function that returns the number of vowels
    used in a string.  Vowels are the characters "a", "e"
    "i", "o", and "u".
--- Examples
    vowels("Hi There!") --> 3
    vowels("Why do you ask?") --> 4
    vowels("Why?") --> 0
*/
/* sodo
way 1
- use regualr expression
- declare counter
- loop => condition => if letter exist increase counter
- return counter
---------------------------
way 2
- regular with match 
- return array length 
- if value equal null return zero 
--------------------------
way 3
- create object
- create counter
- loop
--------------------------
way 4
- create array
- loop
- condition a || i || u || e || o
 */

const vowels = (str) => {
const reg = str.match(/[a,e,i,o,u]/gi)

return reg === false ? 0 : reg.length 
}
console.log(vowels("Hi There!"));
console.log(vowels("Why do you ask?"));

module.exports = vowels;
