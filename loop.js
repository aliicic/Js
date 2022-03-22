const user = ['ali-09353274130', 'reza-09184338837', 'hossein-09125836432']

// const name1 = prompt('please enter the name ')



// for ( let i = 0; i < user.length; i++){
    
//     if (name1 === user[i].split('-')[0]) {
      
//         console.log('user number is : ',user[i].split('-')[1]);
//     }  
 
// }


// for (let j = 1; j <=30; j++){

   
//     if (Math.sqrt(j) % 1 === 0) {
//        console.log(j);
//    }

// }

// for (item of user) {
   
//     console.log((item));
    
// }

////////////////////////////////////////////////

// const userObject = {
//     name: 'ali',
//     lastname: 'khani',
//     age: '24',
    
// }

// for (item in userObject) {
  
//     console.log(item +' : '+ userObject[item]);
// }

// user.forEach((item,index) => {
    
//     console.log(index +' : '+ item)

// });


///////////////////////////////////////////////
// const number = [1,2, 3, 4, 5, 6, 7, 8, 9, 10]

// const map = number.map(item => item + 1)
// console.log(map, 'this is map');
// const filter = number.filter(item => item % 2 === 0)
// console.log(filter , 'this is filter');
// const find = number.find(item => item  === 10)
// console.log(find, 'this is find');
// const reduce = number.reduce((acc , cur) => acc+cur)
// console.log(reduce, 'this is reduce');


////////////////////////////////////////////////

const info = [
    
    { name: 'ali', marks: [1, 3, 5, 20, 10, 20] },
    { name: 'reza', marks: [20, 15, 5, 14, 10, 2] },
    { name: 'hassas', marks: [1, 13, 5, 14, 16, 20] },
    { name: 'hossein', marks: [11, 13, 15, 2, 10, 2] },
    { name: 'sara', marks: [11, 13, 16, 19, 10, 15] },
    { name: 'akbar', marks: [10, 13, 15, 0, 0, 12] },
    { name: 'sama', marks: [19, 13, 19, 12, 17, 12] },
    { name: 'maryam', marks: [20,17, 15, 14, 10, 20] },
]


console.log(info);

// const res = info.map(item => {
  
//     item.mid = item.marks.map(item1 => item1).reduce((acc, cur) => (acc + cur)) / 6
//     return item
   
// }).map(item => item.mid > 10 ? 'قبول' : 'رد')

// const res = info.map(item => {
  
//     item.mid = item.marks.map(item1 => item1).reduce((acc, cur) => (acc + cur)) / 6
//     if (item.mid >= 10) {
//         item.status = 'قبول'
//     } else {
//         item.status = 'رد'
//     }
//     return item
   
// })


const res = info.map(item => {
    
    const sum = item.marks.reduce((acc, cur) => acc + cur)
    const mid = sum / item.marks.length
    item.mid = mid
    return item  
}).filter(item => item.mid  < 10)







console.log(res);
// console.log(res1);
