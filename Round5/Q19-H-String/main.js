console.log(arrowTitle);

/* findFirstNonIterativedCharacter */

/*  
Given an arbitrary input string, return the first Non Iteratived character. For strings with all repeats, return 'sorry'
*/
const findFirstNonIterativedCharacter = (str) => {
  for (let i = 0; i < str.length; i++) {
    let find = str.charAt(i);
    if (str.indexOf(find) == str.lastIndexOf(find)) {
      return find;
    } else {
      return "sorry";
    }
  }
};

/*
Examples:
findFirstNonIterativedCharacter("ABCDBIRDUP"); // => "A"
findFirstNonIterativedCharacter("ALABAMA"); // => "L"
findFirstNonIterativedCharacter("Uber for horses"); // => "U"
findFirstNonIterativedCharacter("Hey Heba baby "); // => "sorry"
findFirstNonIterativedCharacter("good dog"); // => "sorry"
*/
