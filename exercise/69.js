users = [
  { name: "ali", age: 20 },
  { name: "reza", age: 15 },
  { name: "hoseein", age: 20 },
  { name: "hassan", age: 14 },
];

let status = users.every((item) => {
  //? every is analogue to logical and
  return item.age >= 18;
})

if (status) {
    console.log('ok you are logged in');
} else {
    console.log('there are some problems');

}

let status1 = users.some((item) => {
  //? some is analogue to logical or
  return item.age >= 18;
})

if (status1) {
    console.log('ok you are logged in');
} else {
    console.log('there are some problems');

}