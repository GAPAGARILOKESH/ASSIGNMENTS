const user = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  }
  
  const { name: firstName, age1, address: { city: cityLocation } } = user
  
  console.log(firstName)
  console.log(age)
  console.log(cityLocation)



function printEmployee({ name, position, salary, ...rest }) {
    console.log("name:",name)
    console.log("position:",position)
    console.log("salary:",salary)
    for (let [key, value] of Object.entries(rest)) {
        console.log(`${key}: ${value}`);
    }
}
const employee1 = { name: 'John', position: 'Manager', salary: '$70,000', department: 'Sales' }
printEmployee(employee1)



//Destructure the following nested object to extract `name`, `age`, and `city`, where `city` is a
//property of the `address` object inside the `details` object.
const data1 = {
details: {
name12: 'Alice',
age12: 25,
address: {
city12: 'Los Angeles',
country: 'USA'
}
}
};
const {details:{name12,age12,address:{city12}}}=data1
console.log(name12)
console.log(age12)
console.log(city12)



const userInfo = { firstName: 'John', lastName: 'Doe' }
const {firstName:first12,lastName:last}=userInfo
console.log(first12)
console.log(last)



function getUserInfo({ name, address: { city = 'Unknown City' } = {} }) {
    return { name, city }
  }
  
  const user14 = {
    name: 'John',
    address: {
      country: 'USA'
    }
  }
  
  const result = getUserInfo(user14)
  console.log(result)
