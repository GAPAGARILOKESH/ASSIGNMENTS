const user2 = {details: {n: 'Alice',ag: 25,address: {city: 'New York',country: 'USA'}}}
const {details:{n,ag,address:{city}}}=user2
console.log(n)
console.log(ag)
console.log(city)


const users = [
    { name1: 'John', age: 30 },
    { name2: 'Alice', age: 25 },
    { name3: 'Bob', age: 35 }
    ]
const [{name1},{name2},{name3}]=users
console.log(name1)
console.log(name2)
console.log(name3)


const person6 = { name9: 'John', age9: 30, city9: 'New York', country9: 'USA' }
const {name9,age9,...details}=person6
console.log(name)
console.log(age9)
console.log(details)


//Destructure the following object dynamically using a variable `prop` to extract `name` and `age`.
const prop = 'user';
const data = { user: { name8: 'Alice', age8: 25 } }
const {[prop]:{name8,age8}}=data
console.log(name8)
console.log(age8)

const person10 = { name10: 'Alice', age10: 30 }
const { name10: fullName, age10: yearsOld } = person10
console.log(fullName)
console.log(yearsOld)

