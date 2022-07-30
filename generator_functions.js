// function* numbers() {
    
//     yield 1
//     yield 2
//     yield 3
//     yield 4
//     yield 5
//     yield 6
//     yield 7

// }

// const number = numbers();
// // console.log(number.next());
// // console.log(number.next());
// // console.log(number.next());
// // console.log(number.next());
// // console.log(number.return()); //? end the function and true done
// // console.log(number.throw({ message: 'we have error' }));


// for (const iterator of number) {

//     console.log(iterator);
    
// }

//? pow 
function* pow(number, limit) {

    let pow = 0
    while (pow <= limit) {
        yield number**(pow++)
    }
    
}
//console.log([...pow(2, 6)]);

//? febo
function* febo() {
    yield 1; yield 1; let counter = 0
    let num1 = 1; let num2 = 1;
    while (counter <= 10) {
        let result = num1 + num2;
        yield result        
        num1 = num2
        num2 = result
        counter++
    }
}
const febon = febo() 
console.log(febon.next());
console.log(febon.next());
console.log(febon.next());
console.log(febon.next());
console.log(febon.next());

// ? or

console.log(...febo()); // ?  or console.log([...febo()]);

// ? or

for (const iterator of febo()) {
  console.log(iterator);
}