
const btn = document.createElement('button')
btn.innerText = "click"

const body = document.querySelector('body').appendChild(btn)

btn.addEventListener('click', event => {
    console.log(event.target);
})