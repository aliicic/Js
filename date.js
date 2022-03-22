const div = document.createElement('div')

const body = document.querySelector('body')

body.appendChild(div)

body.style.display = "flex"
body.style.background = "black"
body.style.alignItems = "center"
body.style.justifyContent= "center"
body.style.height = "100vh"
// body.style.width ="100vh"
div.style.width = "300px"
div.style.padding = "50px"
div.style.height = "100px"
div.style.background = "red"

var date;

setInterval(() => {
    
    date = new Date()  
    div.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} `;
    
}, 1000)