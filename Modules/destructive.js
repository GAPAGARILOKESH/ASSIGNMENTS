const person = { name: 'John', age: 30 }
const {name,age}=person
console.log(name)
console.log(age)



let a=10;
let b=20;
[a,b]=[b,a];
console.log(a,b)

const user = {details: {n: 'Alice',ag: 25,address: {city: 'New York',country: 'USA'}}}
const {details:{n,ag,address:{city}}}=user
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



const user = {
    name4: 'John',
    age1: 30,
    address1: {
    city1: 'New York',
    country1: 'USA'
    }
    }

