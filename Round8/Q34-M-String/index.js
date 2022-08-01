/** 
--- Directions
     - Given a string
     - Return the character that is most commonly repeated in the string.
--- Examples
     - maxChar("abcccccccdddd"); --> "c"
     - maxChar("apple 1231111"); --> "1"
*/

const maxChar = (str) => {
     let obj = {}
     let counter = 0
     let result = ""

     for (let i = 0; i < str.length; i++) {
          obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1
       
     }
   
     for (const key in obj) {
         if (obj[key] > counter){
          counter = obj[key] 
          result = key
         }
         return result
     }

     /* let result = Object.keys(obj).reduce(function(a,b){return obj[a] > obj[b] ? a : b})
     
     return result */
}
console.log(maxChar("abcccccccdddd"));

module.exports = maxChar;
