
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
        
        this.name = name,
        this.family = family, 
        this.age    = age,
        this.fun    = fun
            
    }

}



const personal_info = new person('ali',"khani", 26, function () { return this.name + "    "+ this.family });  // be in kar migan = instantiate

console.log(personal_info);
console.log('name=',personal_info.name);
console.log('fullname=' , personal_info.fun());