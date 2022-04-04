

const ob = { name: 'ali' }

const ou = {
    name: 'reza',
    f() {
       alert(this.name)
    }
}

//ou.f()
const app = ou.f
// ou.f.call(ou)
// const bin = ou.f.bind(ob);


app();
// console.log(typeof bin);