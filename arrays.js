const arr = ['ali', 5, true];
console.log(arr[arr.length - 1]);

const str1 = "hello ali how's it going"

console.log(`your name is ${str1.split(' ')[1]}`);


const string ="hello world"

console.log(...string.split( ' ' ).reverse());


arr.push('ali')
arr.unshift('reza')
arr.pop()
arr.shift()
arr.splice(1,2)
arr.push('ali')

console.log(arr,'result');


const arr1 = [ 1,2,3,4]
const arr2 = [ 5,4,2,1]
const arr3 = [ 4,3,2,2]
const arr4 = [3, 1, 2, 5]

console.log([...arr1, ...arr2, ...arr4].sort());
console.log(arr2.concat(arr2));


console.log(arr[arr.indexOf('ali')]);


const objOfArray = [{ name: 'ali' }, { name: 'reza' }]

const [ , x] = objOfArray

console.log(x);


var a = ['1', '2', '3']
a[100] = '2'
console.log(a.length);