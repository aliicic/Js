const age =Symbol()

const userData = {

    name: 'ali',
    [age]: 20,
    career :  'programmer'

}

console.log(typeof Symbol.iterator);

Object.keys(userData).forEach(item => {
    
    console.log(item ,':',userData[item]);

} )