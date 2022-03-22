
 const pack = ['سنگ', 'کاغذ', 'قیچی'];

 let x = Math.random() 

console.log(x );
 
console.log(x * pack.length);

let y = Math.floor(x * pack.length);

console.log(y);

const computerChoice =pack[y]

console.log(computerChoice);

const userChoice = prompt('please enter your choice')

if (userChoice == 'قیچی' && computerChoice == 'کاغذ') {
    
    console.log('you win');
}
else if (userChoice == 'کاغذ' && computerChoice == 'سنگ') {    
    console.log('you win');

}
else if (userChoice == 'سنگ' && computerChoice == 'قیچی') {
    
    console.log('you win');
}
else if (userChoice  == computerChoice ) {
    
    console.log('مساوی');
}
else {
   
    console.log('you lose');
}
