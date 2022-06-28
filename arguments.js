function commit(arg) {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 4 }
  console.log(...arguments); // 1 2 3 4
  console.log(arg); // [Arguments] { '0': 1, '1': 2, '2': 4 }
  console.log(arguments[0]); // 1
}

commit(1, 2, 4);



commit = (...arugmens) => {
  console.log(arugmens);
  console.log(...arugmens);
};

commit(1, 2, 4); // 



