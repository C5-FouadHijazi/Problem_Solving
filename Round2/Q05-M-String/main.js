console.log(arrowTitle);

/*  jointCharacters*/

/*  
Write a function accepts two strings , and returns only the characters that are joint on both strings.
Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/

//We need to check each srting > turn them to array .split()
// for each on each one
const jointCharacters = (str1, str2) => {
  // YOUR CODE HERE
  let str1Arry = str1.toLowerCase().replaceAll(" ", "").split("");

  let str2Arry = str2.toLowerCase().replaceAll(" ", "").split("");
 

  let resultArray = [];

   str1Arry.forEach((element) => {
    
    if (str2Arry.includes(element) && resultArray.includes(element) === false)
      resultArray.push(element);
  });
  if (resultArray.length !== 0) {
    return resultArray.join("")
  }
  return "Opps!!! No Match";
};

/* 
Examples:
jointCharacters("abcd", "abcd") // => "abcd"
jointCharacters("What is love lol?", "Baby don't hurt me lol") // => "hatloe"
jointCharacters("Riding on a buffalo makes me more approachable","so what") // => "oash"
jointCharacters("abcd", "efgh") // => "Opps!!! No Match"

*/
