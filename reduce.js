var arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];


var flatten = arrays.reduce((acc, arr,index , array) => {
    console.log(arr, 'arr');
    console.log(index, 'index');
    console.log(acc.concat(),'concat'); //? merge two arrays
  //  console.log(array , 'array');
   return acc.concat(arr);
  // or
  // return [...acc, ...arr] not recommended
}, []);

console.log(flatten); // [ 1, 2, 3, 4, 5, 6 ]

//!/---------------------------------------------------------------------------------


var chars = ['a', 'a', 'a', 'b', 'b', 'c', 'a']

var repeats = chars.reduce((acc, item) => {

    if (!(item in acc)) {
    acc[item] = 0
    }
   
    acc[item]++
  
  return acc
}, {})

console.log(repeats) // { a: 4, b: 2, c: 1 }


//!/---------------------------------------------------------------------------------

var numbers = [1, 2, 3, 4, 4, 1.5]

var doubled = numbers.reduce((output, item, index) => {
  output[index] = item * 2

  return output
}, [])

console.log(doubled) // [ 2, 4, 6, 8, 8, 3 ]


//!/---------------------------------------------------------------------------------

var users = ['Ali', 'John', 'Sarah', 'Napleon']

var len = users.reduce((total, current) => {
  return total + current.length
}, 0)

console.log(len) // 19


//!/---------------------------------------------------------------------------------


var numbers = [1, 2, 3, 4]

var sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
})

console.log(sum) // 10