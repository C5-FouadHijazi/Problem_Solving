console.log(arrowTitle);

/* removeNotUnique */

/*  
have a string, delete any characters that are not unique from the string.
*/

const removeNotUnique = (str) => {
  // YOUR CODE HERE
  const removeNotUnique = (str) => {
    if (!str.length) {
      return "it's empty";
    }
    let strArr = str.split("");
    for (let i = 0; i < strArr.length; i++) {
      for (let j = 0; j < strArr.length; j++) {
        if (strArr[i] === " ") {
          strArr.splice(i, 1);
          i--;
          continue;
        }
        if (strArr[i] === strArr[j] && i !== j) {
          strArr.splice(i, 1);
          j--;
          strArr.splice(j, 1);
          i--;
          j--;
        }
      }
    }
    return strArr.join("");
  };
};

/* 
Examples:
removeNotUnique("memory") // => "eory"
removeNotUnique("hello lol") // => "he"
removeNotUnique("xyzj") // => "xyzj"
removeNotUnique("iiii") // => ""
removeNotUnique("") // => "it's empty"
*/

