const string = 'hello world'

console.log(string.length, 'length of string');
console.log(string[10], 'show special index char');
console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log(string.indexOf("o"), "show char from special index");
console.log(string.includes("hello world"), "includes");
console.log(string.charAt(4),'char at');
console.log(string.substring(0, 2));
console.log(string.split(' '));
console.log(string.split('').join(""));
console.log(string.replace('hello', 'word'));
console.log(Array.isArray(string),'is array ?');

const array = ['ali', 'reza', 'hasan']
console.log(array.includes("ali reza"), "includes"); //! false

// const st = null
// console.log(st.length);
// let x = 1
// console.log(typeof (x + ''));
// x = x + ''
// console.log(x.length);
// console.log(typeof( ''+ 1 ));