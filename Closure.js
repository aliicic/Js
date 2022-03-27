
// function one() {
    
//     var a = 2

//     function two() {
        

//         function three() {
//             console.log(a);
//         }

//         three()
//     }

//     two()

// }

// one()

// function makeFunc() {
//   var counter = 0;
//     function displayCount() {
//       counter++;
//       console.log(counter);
//     }
//   return displayCount;
// }



// var myFunc = makeFunc();
// var myFunc2 = makeFunc();
// myFunc();
// myFunc2();
// myFunc2();
// myFunc2();
// myFunc();
// myFunc();
// myFunc();



var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  }
};

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1);
console.log(counter1.value());  // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.