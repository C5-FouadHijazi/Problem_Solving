console.log(arrowTitle);

/*getQueryString   */

/*  
have a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.
If the url does not contain a query string, return undefined
*/

const getQueryString = (url) => {
 const u = url.split("?"); 

  const Params = new URLSearchParams(url)

for (const [key, value] of Params.entries()) {
 console.log([key, value]);
}

  
};

/* 
Examples:
getQueryString("http://example.com?a=lol"); //=> [ [ "a", "lol" ] ]
getQueryString("http://example.com?a=lol&b=88"); //=> [ [ "a", "lol" ], [ "b", "88" ] ]
getQueryString("http://example.com?msg=lol%20world"); //=> [ [ "msg", "lol world" ] ]
getQueryString("http://example.com"); //=> undefined
*/

