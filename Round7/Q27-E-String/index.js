/* 
--- Directions
    Given a string, return a new string with the reversed
    order of characters
--- Examples
    reverse("apple") === "elppa"
    reverse("hello") === "olleh"
    reverse("Greetings!") === "!sgniteerG" 
*/

const reverse = (str) => {
  let result =  str.split("").reverse().join("")
  return result
};

console.log(reverse("apple"));
console.log(reverse("hello"));
console.log(reverse("Greetings!"));


module.exports = reverse;
