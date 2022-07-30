let name = "sara"
let user = {
    id: 1,
    name: 'ali',
    age: 22,
    
    walk: function () {
        console.log('user walked');
    },
    showThis: function () {
        console.log(this);
    },
    setName: function (newName) {
        this.name = newName;
    }
}

user.setName('reza');
console.log(name);