/* console.log(arrowTitle); */

/* Even or Not */

/*  
Write a function that returns true if a number is even, and false otherwise.
*/

//Algurethim & Sodo Code
//we need to write a function with one parameters number to return true or false
//If the will be even retun to us true || if the number not even return false

const evenOrNot = (num) => {
return num % 2 == 0 ? true : false
};

/*
Examples:
evenOrNot(1) // => false
evenOrNot(2) // => true
evenOrNot(5) // => false
evenOrNot(99) // => false
evenOrNot(0) // => true
evenOrNot(-8) // => true
evenOrNot(-17) // => false

module.exports = {evenOrNot} ;