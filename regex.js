const email = "aliaghakhani911@gmail.com"
const regex  = /^[a-zA-Z0-9._]{3,25}@\w[a-z]{3,6}\.[a-z]{2,3}$/

console.log(regex.test(email));

const old = "my name is ali"
const lnew = old.replace(/\w{3}/g, 'reza')
console.log(lnew);


const matchtest = 'hi my name is ali and i am 27 years  old'
console.log(matchtest.match(/\w{4,5}/g));


const key = 'Bearer Authorization_token'
const pattern = /Bearer (?<token_group_name>[^ $]*)/
const result = pattern.exec(key)
console.log(result);
console.log(result.groups.token_group_name);