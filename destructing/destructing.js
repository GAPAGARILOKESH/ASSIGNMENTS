const person = { name: 'John', age: 30 }
const {name,age}=person
console.log(name)
console.log(age)

const user1 = {
    name4: 'Alice',
    address: {
    city1: 'New York',
    country: 'USA'
    }
    }
const {name4,address:{city1}}=user1
console.log(name4)
console.log(city1)

const numbers = [10, 20, 30, 40];
const [first,second]=numbers
console.log(first)
console.log(second)

const person4 = { name7: 'John' }
const {name7,age7=30}=person4
console.log(name7)
console.log(age7)



let a=10;
let b=20;
[a,b]=[b,a];
console.log(a,b)
