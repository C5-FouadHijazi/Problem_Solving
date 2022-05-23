console.log(arrowTitle);

/* Is Power Of Two */

/*  
Write a function  returns true if a number is a power of 2, and false if not.
*/

//We need a function return flase if the result is not power of 2 & True if right >> if (){}
//case 1:  nubmer  =  0  direct  > false
// the we need a way to check the if
// case 2 >using loop to check wich case we will face
//A: %2 = even > 1 > true
//B: %2 = odd > 1.25 >false

const isPowerOfTwo = (num) => {
  if (num == 0) return false;

  while (num != 1) {
    if (num % 2 != 0) return false;
    num = num / 2;
  }
  return true;
};
/*
Examples:
isPowerOfTwo(0) // => false
isPowerOfTwo(1) // => true
isPowerOfTwo(2) // => true
isPowerOfTwo(4) // => true
isPowerOfTwo(6) // => false
isPowerOfTwo(11) // => false
isPowerOfTwo(16) // => true
isPowerOfTwo(18) // => false
isPowerOfTwo(24) // => false
isPowerOfTwo(25) // => false
isPowerOfTwo(28) // => false
isPowerOfTwo(32) // => true
isPowerOfTwo(63) // => false
isPowerOfTwo(64) // => true
isPowerOfTwo(1023) // => false
isPowerOfTwo(1024) // => true
*/
