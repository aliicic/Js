
function ali(name= "default name") {
 
    
    console.log(name);
    

}
ali('ali');


const reza = function (name = "default name") {
    
    console.log(name);

}

reza('reza');


const hossein = ( name= "hossein") =>{ console.log(name);}

hossein('hossein');


(function () { console.log('annonymose function'); })();



const myf = (name = "reza") => { console.log(name+ ' is a gooood boy');  }

myf('mahdi');


// sum(10, 20);
// diff(10, 20);
// function sum(x, y) {
//     console.log( x + y)

// }
// let diff = function (x, y) {
  
//     console.log(x - y)
// }


console.log(typeof []);


// console.log(i);
// const i = 4


function ali(a, b, c, d , ...rest) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(rest);
}

ali('a', 'b', 'c', 'd', 'aaaa', 'aaaaa')



const mark = [12,20,14,15,11,17,19]
let sum = 0 
mark.map((item) => {
    
    sum += item

})
console.log(sum / mark.length >= 10 ? 'okay' : 'nokay');

//?=---------------------------------

{
  const x = () => "ali";
  y = () => "ali";
}

console.log(y());
