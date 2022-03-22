
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
    li.style.padding = '10px'
    li.style.margin = '20px'
    li.style.background='red'
    
   
});

 ul.addEventListener("click", () => {
   console.log(event.target.innerText);
 });