console.log(arrowTitle);

/* array_Copy */

/*  
Write a JavaScript function to copy an array.
*/

const array_Copy = (arr) => {
  const newArr =[]
  const result = arr.filter((element ,index)=>{
    return newArr.push(element)
  })
  return result
};

/*
Examples:
array_Copy(["Jouza", true, 3]); // => ["Jouza", true, 3]
array_Copy([1, 2, 3]); // => [1, 2, 3]
array_Copy([1, 9, 8]); // => [1, 9, 8]
array_Copy([]); // => []
*/

