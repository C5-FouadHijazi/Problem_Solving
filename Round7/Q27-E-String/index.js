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
  /*   let result =  str.split("").reverse().join("")
    return result */

  //================= loop
  /*  const temp = ""
   for (let i = 0; i < str.length - 1; i >= 0, i++) {
     temp += str[i];
 
   }
   return temp */

  //================= recuergion 
  if (!str) {
    return ""
  }
  return reverse(str.subsrt(1) + str(0))

};

console.log(reverse("apple"));
console.log(reverse("hello"));
console.log(reverse("Greetings!"));


module.exports = reverse;
