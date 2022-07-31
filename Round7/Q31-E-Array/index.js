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
  for (let i = 1; i <= n; i++) {

    (i % 3 === 0 && i % 5 == 0 ? console.log("fizzbuzz") : i % 3 === 0 ? console.log("fizz") : i % 5 === 0 ? console.log("buzz") : console.log(i))

  }
}

console.log(fizzBuzz(15));;


module.exports = fizzBuzz;
