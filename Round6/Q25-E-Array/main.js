console.log(arrowTitle);

/* isItArray */
/*  
Write a JavaScript function to check whether an `input` is an array or not.
*/

const isItArray = (input) => {
  if(input instanceof Array) {
      return !input.some((elem)=> {
          return elem instanceof Array;
      });
  }
  return false;
};

/*
Examples:
isItArray("w3resource") => false
isItArray([1, 2, 4, 0]) // => true
isItArray(3) => false
isItArray(false) => false
isItArray([true, 3, "MerakiAcademy"]) => true
*/

