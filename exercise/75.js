let cart = [
  { name: "mobile", price: 2000, color: "black" },
  { name: "tablet", price: 4000, color: "grey" },
  { name: "laptop", price: 7000, color: "white" },
  { name: "charger", price: 90, color: "black" },
  { name: "keyboard", price: 90, color: "white" },
];

let priceShip = 0;
let priceProduct = 0;
cart.forEach((item) => {
  if (item.price < 100) {
    priceShip += 1000;
  }

  priceProduct += item.price;
});

console.log(priceProduct, "totalpriceProduct");
console.log(priceShip, "priceShip");
console.log(priceProduct + priceShip, "totalPrice");

// cart.forEach((item) => {
//    item.price+=1
// })
// console.log(cart);

// let res = cart.map((item) => {
//    return item.price += 1

// })
// console.log(res);

// let res1 = cart.filter((item) => {
//     if (item.price > 100) {
//       return item.price;
//   }
// })
// console.log(res1);
