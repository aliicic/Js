let word = prompt('please enter your word')

let string = word.split('')
let rstring = string.slice().reverse(); //? or [...string].reverse
flag = false
string.map((item , index) => {

  if (item !== rstring[index]) {
      flag = true
      
  }

 
})
if (!flag) {
    console.log('yes');
} else {
   console.log("no");
}
// console.log(true);


