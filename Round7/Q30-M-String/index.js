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

const vowels = (str) => {
const reg = str.match(/[a,e,i,o,u]/gi)

return reg === false ? 0 : reg.length 
}
console.log(vowels("Hi There!"));
console.log(vowels("Why do you ask?"));

module.exports = vowels;
