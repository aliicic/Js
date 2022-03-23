
// const promise = new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//         let y = false
//         if (y) {           
//             resolve({ name: 'ali' })
//         } else {           
//             reject('error occurred')
//         }
   
//     }, 3000);

// })

// promise.then((data) => {
//     console.log(data);
// }).catch((e) => { console.log(e); })


function getData() {
  return new Promise((resolve, reject) => {
        
        setTimeout(() => {
          resolve({
            name: "ali",
            last: "aghakhani",
            age: "27",
          });
        }, 3000);

  })
}

function getmarks(name) {
  const data = [
    {
      name: "ali",
      marks: [20, 11, 12, 16, 17, 20],
    },
    {
      name: "reza",
      marks: [10, 20, 20, 20, 20, 10],
    },
    {
      name: "hamid",
      marks: [10, 20, 20, 20, 20, 10],
    },
    ];
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          data.find((item) => {
            if (item.name === name) {
              return item;
            }
          }).marks
        );
      }, 2000);
    });  
}





getData()
  .then(data => { getmarks(data.name).then(marks => {console.log(marks); });
  })




getData()
  .then((data) => getmarks(data.name))
  .then((marks) => console.log(marks));