localStorage.setItem("object", JSON.stringify({ name: "ali", age: "27" }));
console.log(JSON.parse(localStorage.getItem("object")));


localStorage.setItem("array", JSON.stringify(['ali','sara']));

// localStorage.setItem("array", ['ali','sara']);

console.log(JSON.parse(localStorage.getItem("array")));

// console.log(localStorage.getItem("array").split(","));


localStorage.clear()

