
//  const person = {
//     name: 'ali',
//     family : 'khani',
//     age : 23,
//     fun : function() { return 'hello object'}  
    
// }


class person {  // or const name = class { }

    constructor(
        name,
        family,
        age,
        fun
    ) {
        
       
            
    }

}



const personal_info = new person('ali',"khani", 26, function () { return this.name + "    "+ this.family });  // be in kar migan = instantiate

// console.log(personal_info);
// console.log('name=',personal_info.name);
// console.log('fullname=', personal_info.fun());



class Vehicle {

    constructor(type, color) {
        
        this.type = type;
        this.color = color;

    }

    move() {
        console.log('move from parent');
    }
}

class Car extends Vehicle  {

    constructor(name, type, color) {
       
            super(type, color);
            this.name = name;
            
    }

    show() {
        console.log(this);
    }
}

const car1 = new Car('bmw', 'car', 'red')
car1.show()
car1.move()