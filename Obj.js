// Object is the collection of any type of data
const person = {
    name : 'testing',
    age : 24,
    hobbies: ['cricket', 'listen music'],
    greet : function (){
        console.log("hello")
    }
}

// access values from object

console.log(person.name)
console.log(person['name'])

// added od modifying the data of obj
person.job = "react developer"
person.salary = 1000000
console.log(person)

delete person.salary
console.log(person)

//nested object
const person1 = {
    name: 'John',
    age: 30,
    address: {
        city: "Keshod",
        zipcode: '302220',
        street: "123 main st."
    }
}
console.log(person1)
console.log(person1?.address?.city)
console.log(Object.keys(person1))
console.log(Object.values(person1))
console.log(Object.entries(person1))

