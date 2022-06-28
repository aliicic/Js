
const ul = document.createElement('ul')
ul.setAttribute('class','parent')
const body = document.getElementsByTagName('body')[0]

body.appendChild(ul)

const info = ['item1', 'item2', 'item3', 'item4']

info.forEach(element => {
  //  console.log(element);
    const li = document.createElement("li")
    li.innerText = element
    ul.appendChild(li);
    li.style.color = 'white'
   // li.style.padding = '10px'
   li.style.margin = '20px'
  li.style.background = 'red'
  li.setAttribute("class", "child");
    
   
});

 ul.addEventListener("click", () => {
   console.log(event.target.innerText);
 });

document.body.clientWidth              /* width of <body> */
document.documentElement.clientWidth   /* width of <html> */
window.innerWidth                      /* window's width */

// console.log(document.width);
// console.log(window.innerWidth);
// console.log(document.documentElement.clientWidth);
// console.log(document.body.clientWidth);
// console.log(document.body.getBoundingClientRect());


let child = document.getElementsByClassName('child')[0]

child.style.width = '120px'
console.log(child.offsetWidth, 'el width');
console.log(child.clientWidth, "el width");
console.log(child.getBoundingClientRect().width, "el width");