/** 
--- Directions
     - Write a program that console logs the numbers from 1 to n
     - For multiples of three print “fizz” instead of the number
     - For the multiples of five print “buzz”
     - For numbers which are multiples of both 3 and 5 print “fizzbuzz”
--- Example
      fizzBuzz(5);
      |  1    |
      |  2    |
      |  fizz |   
      |  4    |
      |  buzz |   
*/

const fizzBuzz = (n) => {
  for (let n = 1; true; n++) {
    if (n === 3) {
      console.log("fizz");
      continue
    }
    if (n === 5) {
      console.log("buzz");
      break
    }
    console.log(n);
  }
}
fizzBuzz(5);


module.exports = fizzBuzz;
