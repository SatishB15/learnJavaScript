let str="a brown quick fox jumps over the lazy dog";
let str1="hello world";

// 1=>checks string starts with given value or not
console.log("is string starts with a?",str.startsWith("a"));

// 2=>checks string ends with given value or not
console.log("is string ends with dog?",str.endsWith("dog"));

// 3=>checks includes given value or not
console.log("is string includes brown??",str.includes("brown"));

// 4=>divide string into diffrent chunks
let sliceString=str1.slice(6);
console.log(sliceString);

// 5=>convert string to upperCase
console.log(str.toUpperCase());

// 6=>convert string to lowerCase
console.log(str.toLowerCase());

// 7=>return charecter at specified position
console.log(str.charAt(3));

// 8=>Splitt string by exluding separator and return array of splitted string
let splittedString=str1.split("w");
console.log(splittedString);

// 9=>Replace string
console.log(str1.replace("world","Satish"));

// 10=>repeat string by specified no of time
console.log(str1.repeat(2));