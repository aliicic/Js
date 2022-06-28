let products = [
  { name: "mobile", price: 2000, color: "black" },
  { name: "tablet", price: 4000, color: "grey" },
  { name: "laptop", price: 7000, color: "white" },
];
let cart = [
  { name: "mobile", price: 1500, color: "red" },
  { name: "tablet", price: 1500, color: "grey" },
];
let type = prompt("1. Add product \n 2. Remove product");

if (type==='1') {
  let order = prompt("please enter your products name");

  let u = products.some((item) => {
    if (item.name == order) {
      cart.push(item);
      return true;
    }
  });
  console.log(cart);  
} if(type==='2') {
  let removeOrder = prompt("please enter your products name");
  let status = cart.findIndex((item) => {
    return item.name == removeOrder;
  });
 console.log(status,'this is status');
  if (status>=0) {
    // cart.forEach((item, index) => {
    //   if (index === status) {
    // cart.pop(status); //?  are the same
    cart.splice(status, 1); //?   are the same
    //   }
    // });
    console.log(cart);
  } else {
    console.log("there is no item");
  }
}
