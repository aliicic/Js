let products = [
  { name: "mobile", price: 2000, color: "black" },
  { name: "tablet", price: 4000, color: "grey" },
  { name: "laptop", price: 7000, color: "white" },
];
let cart = [{ name: "mobile", price: 1500, color: "red" }];
var totalPrice = 0;
cart.map((i) => {
  totalPrice += i.price;
});

let order = prompt("please enter your products name");
console.log("first totalprice", totalPrice);
let u = products.some((item) => {
  console.log(item);
  if (item.name == order) {
    cart.push(item);
    totalPrice += item.price;
    return true;
  }
});
console.log(u, "this is resualt some");
console.log(cart, "this is cart");
console.log(totalPrice, "total price");
