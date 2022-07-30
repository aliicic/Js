
const object = {
    name: 'ali',
    'family' : 'shadi ',
    age : 23,
    fun: function () { return 'hello object' },
    getData : function ali () { console.log('hello it works');  }
    
}


// console.log(Object.keys(object));
// console.log(Object.values(object));

// console.log(typeof +true); //? =))))))

// object.address = 'arak'

// console.log(object);


//? object constructors 

// const emp = {
//     id: 1,
//     name: 'ali',
//     age: '27',   
// }

function emp(id, name, age) {
   
    this.id = id
    this.name = name
    this.age = age
}

const ali = new emp(2, 'reza', 12)
console.log(ali);



const ob = {
    name: 'ali',
    other: {
        family:'khani'
    }
}

const { other:{ family }} = ob
console.log(family);

