// let employe = [
//   { id: 1, name: 'ali', tasks: [{ name: "task1", date: 1, status: false }] },
//   { id: 2, name: 'reza', tasks: [{ name: "task2", date: 1, status: false }] },
//   { id: 3, name: 'armin', tasks: [{ name: "task3", date: 1, status: false }] },
//   { id: 4, name: 'soheil', tasks: [{ name: "task4", date: 1, status: false }] },
// ];

// console.log(JSON.stringify(employe));
// console.log(JSON.parse(JSON.stringify(employe)));

// let task = prompt("pleass enter task name");
// let date = prompt("please inter deadline");
// let employ = prompt("please enter the name who you want to do");

// employe.some((user) => {
//   if (user.name === employ) {
//     user.tasks.push({
//       name: task,
//       date: parseInt(date),
//       status: false,
//     });
//     return true;
//   } else {
//       console.log('user not found');
//   }
// });
// console.log(employe);

// let emp = {
//   ali: [{ name: "task1", date: 1, status: false }],
//   reza: [{ name: "task1", date: 1, status: false }],
//   armin: [{ name: "task1", date: 1, status: false }],
//   soheil: [{ name: "task1", date: 1, status: false }],
// };

// let emp = [
//   { name: "ali", tasks: [{ name: "task1", date: 1, status: false }] },
//   { name: "reza", tasks: [{ name: "task2", date: 1, status: false }] },
//   { name: "armin", tasks: [{ name: "task3", date: 1, status: false }] },
//   { name: "soheil", tasks: [{ name: "task4", date: 1, status: false }] },
// ];

// console.log(employe);

let li;
let ul = document.createElement("ul");
document.body.appendChild(ul);
for ( i = 0; i <= 5; i++) {
    
    li = document.createElement("li");
    li.innerHTML = 'hello'
    ul.appendChild(li)
   
}

