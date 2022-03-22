
// console.log(document);



// //? single selectors

// let elm = document.getElementById('header');

// console.log(elm.innerText);

// elm = document.querySelector('.class3')

// console.log(elm);


// //? multi selectors 

// let elms = document.getElementsByClassName('elemenet')
// console.log(elms);

// elms = document.getElementsByTagName('h1')

// console.log(elms);

// elms = document.querySelectorAll('.elemenet')


// console.log(elms);


// elms[0].style['font-size'] = '60px '
// elms[2].style.fontSize = '10px '

// console.log(elms[0].style.fontFamily);

// const bdy = (document.querySelector('body').children[0].children[0])
// console.log(bdy);


//?  practice///////////////////////////////////
const user = [

    {name : 'ali' , age : "27"},
    {name : 'reza' , age : "22"},
    {name : 'sara' , age : "23"},
    {name : 'payam' , age : "25"},
    { name: 'mamad', age: "24" },
    
]

const list = document.createElement('ul')
let con = document.querySelector('body')
con.appendChild(list)

for (item of user) {
    
    let listitem = document.createElement('li')
    listitem.innerHTML = `<span> name is : ${item.name} and age is : ${item.age} </span>`
    list.appendChild(listitem)

    
}

