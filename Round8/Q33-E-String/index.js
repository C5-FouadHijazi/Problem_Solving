/** 
--- Directions
     - Write a function that accepts a positive number n
     - The function should console log a step shape
     - With N levels using the # character
     - Make sure the step has spaces on the right side that equals n - level
--- Examples
      steps(2)
          "# "
          "##""
      steps(3)
          "#  "
          "## "
          "###"
      steps(4)
          "#   "
          "##  "
          "### "
          "####"
*/

const steps = (n) => {
    let totalNumberofsteps = n;
    let output = '';
    for (let i = 1; i <= totalNumberofsteps; i++) {
        for (let j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
} 

console.log(steps(3));
module.exports = steps;
