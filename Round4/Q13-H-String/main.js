console.log(arrowTitle);

/* Times Of Most Freq Char */

/*  
Write a function returns the number of occurrences of the most frequent character in a sentence.
*/

const timesOfMostFreqChar = (str) => {
  let obj = {};
  let max = 0;
  for (let index = 0; index < str.length; index++) {
    obj[str[index]] ? obj[str[index]]++ : (obj[str[index]] = 1);
  }
  for (const key in obj) {
    if (obj[key]>max) {
     max=obj[key]
    }
  }

  if (max === 1) {
    return " no occurrences all return once ";
  }
  return max;
};

/* 
Examples:
timesOfMostFreqChar('hello all') // => 4
timesOfMostFreqChar('hello all lol') // => 6
timesOfMostFreqChar('hello all lool woooow') // => 7
timesOfMostFreqChar('hello all lol wow www.com') // => 6
timesOfMostFreqChar('Hi Toqa') // => " no occurrences all return once "


*/
