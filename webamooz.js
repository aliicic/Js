
// let ali = 2;
// ali = 3


// console.log(ali );
const age = 12;
const number = [1,2,4]

const user = {

    name: 'ali',
    lastname: 'aghakhani',
    
    walk: () => {

        console.log('his name is ', user.name); // not use this for arrow function  . 
    },

    normal : function() {
       
        console.log('his name is normal ', this.name);

    },

    age ,  
    number , 

}

// user.walk();
// user.normal();
console.log(user);
user.age = 13;
user.number[2] = 6;

console.log(user.number.length);

const newnumber = number.map(function(number) {
    
    return number;

})

console.log(newnumber);

const arr = () => {
    console.log('hello arrow function');
    console.log('hello arrow function line 2');
} 

arr();


let one = 2
one = 3; 
let two = one

console.log(two);