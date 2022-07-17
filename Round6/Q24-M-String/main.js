console.log(arrowTitle);

/* Username Validation */

/*  
Have the function usernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

const usernameValidation = (str) => {
  let need = /[a-zA-Z0-9_.-]/g
  let result = str.match(need)
  console.log(result);
  console.log(result[0]);
  if (result.length - 1 > 4 && result.length - 1 < 25 ) {
    return true
  }
  return false
};

/* 
Examples:
usernameValidation("aa_"); // => false
usernameValidation("u__hello_world123"); // => true
usernameValidation("3MaiYousef"); // => false
usernameValidation("#MaiYousef"); // => false
usernameValidation("John_123_H"); // => true
usernameValidation("3  MaiYousef"); // => false
usernameValidation("Mai4Yousef!_"); // => false
*/

