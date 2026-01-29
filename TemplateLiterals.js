// string methods()
// length()
// trim()
// toUpperCase()
// tolowerCase()
// includes()
// indexOf()
// slice()
// substring()
// replace()
// concat()
// split()

let str = "Hello JavaScript "
console.log(str)
console.log(str.length)

let trimText = str.trim();
console.log("trim() :", trimText)

console.log("toUpperCase() :", str.toUpperCase())

console.log("toUpperCase() :", str.toLowerCase())

console.log("includes() :", str.includes("world"))

console.log("indexOf() :", str.indexOf("JavaScript"))

console.log("indexOf() :", str.indexOf("JavaScript"))

console.log("slice() :", str.slice(2,7))

console.log("Substring() :", str.substring(2,7))

console.log("replace() :", str.replace("JavaScript","React"))

let extraRext = " - HELLO JS";
console.log("concat() :", str.concat(extraRext))

console.log("split() :", str.split(" "));

