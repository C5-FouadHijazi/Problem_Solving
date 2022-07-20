console.log(arrowTitle);

/* characterRecurrence */

/*  
 Write a function that takes as its input a string and returns an array of 
 arrays as shown below sorted in descending order by recurrence and then by 
 ascending order by character.
*/

const characterRecurrence = (str) => {
  let array = []
  let obj = {}
  let counter = 0
  /*   for (let i of str) {
      i in obj ? obj[i]++ : obj[i] = 1;
    } OR */

  for (let i = 0; i < str.length; i++) {
    obj[str[i]] ? obj[str[i]] + 1 : 1
  }

  /*   for (let found in obj) {
      array.push([found, obj[found]]);
    } */

  for (const key in obj) {
    array.push([key, obj[key]]);
  }
  return array
}

array.sort((a, b) => b[1] - a[1]);
array.sort(function (a, b) {
  if (a[1] === b[1] && a[0] > b[0]) {
    return 1;
  }
});

return array;
}

/* 
Examples:
characterRecurrence("mississippi") // =>  [ ["i", 4],["s", 4],  ["p", 2],  ["m", 1]  ]
characterRecurrence("miaaiaaippi") // =>  [ ["a", 4],  ["i", 4],  ["p", 2],  ["m", 1] ]
characterRecurrence("miaaiaiaippi") // =>  [ ["i", 5],  ["a", 4],  ["p", 2],  ["m", 1] ]
characterRecurrence("miaaiamaippi") // =>  [ ["a", 4],  ["i", 4],  ["m", 2],  ["p", 2] ]
*/
