console.log(arrowTitle);

/* Find Intersection */

/*  
Have the function FindIntersection(strArr) //*read the array of strings stored in strArr
 which will contain 2 elements:
 //* the first element will represent a list of comma-separated numbers sorted in ascending order,
 سيمثل العنصر الأول قائمة بأرقام مفصولة بفواصل مرتبة بترتيب تصاعدي
//* the second element will represent a second list of comma-separated numbers (also sorted).
سيمثل العنصر الثاني القائمة الثانية من الأرقام المفصولة بفواصل (مرتبة أيضًا)
//* Your goal is to return a comma-separated(مفصولة بفواصل) string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/

//SodoCode
//we need to compare betwen the to strings elements >> will need to split the index to let us check them one by one
// after checking if we find any 2 nmber twice will retun it in string contain all the intersection number
//Steps : Split() >> filter >> indexOf() >> Join()

const findIntersection = (strArr) => {
  // YOUR CODE HERE

  let firstpart = strArr[0].split(",");

  let secoundpart = strArr[1].split(",");

  const result = firstpart.filter((element, index) => {
    return secoundpart.indexOf(element) !== -1
  });

  if (result.length !== 0) {
    return result.join(",")
  }
  return false
};
/*  const obj = {}
  array = []
  for (let i = 0; i < strArr[0].length; i++) {

    obj[strArr[0][i]] = obj[strArr[0][i]] ? obj[strArr[0][i]] + 1 : 1
  }
  for (const key in obj)
    if (obj.key === 1) {
      return array.push(key)
    } */
/*
Examples:
findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']); // => '1,4,13'
findIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']); // => '1,9,10'
findIntersection(['2, 5, 7, 14', '1, 25, 4, 13, 15']); // => false
findIntersection(['', '1, 2, 4, 13, 15']); // => false
*/
/* module.exports = { findIntersection }; */
