console.log(arrowTitle);

/* Is Part Of */

/*  
Make an array method that can return whether or not a context array is a part of an input array.
To simplify the problem, you can assume that both arrays will contain only strings
Hint : her resource for Prototype you can check it and read more (https://www.w3schools.com/js/js_object_prototypes.asp)
*/

Array.prototype.isPartOf = function (array) {
  for (let i = 0; i < this.length; i++) {
    for (let x = 0; x < array.length; x++) {
      if (this[i] === array[x] || array.length !== 0) {
        return true;
      }
    }
    return false;
  }
};

/*
Examples:
[].isPartOf([1, 5, 2]) // => true
['car', 'dog', 'cow'].isPartOf(['dog', 'cow', 'fox', 'car']) // => true
['car', 'dog', 'cow'].isPartOf(['dog', 'cow', 'fox']) // => false
*/
