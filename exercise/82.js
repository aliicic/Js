let source = prompt('please enter province name')

// proviencs = [
//     {
//         name: 'markazi',
//         cities: ['arak', 'tafresh', 'shazand','khondab']
//    },
//     {
//         name: 'tehran',
//         cities: ['karaj', 'rey', 'damavand','khondab']
//    },

// ]

// proviencs.some((i) => {
//     console.log('hey');
//     if (i.name === source) {
//         console.log(i.cities);
//         return true
//     }
// })


proviencs = {
  markazi: ["arak", "tafresh", "shazand", "khondab"],
  tehran: ["karaj", "rey", "damavand", "khondab"],
};


console.log(proviencs[source]);