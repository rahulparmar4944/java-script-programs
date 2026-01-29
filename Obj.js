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

//

const user = {
    name : "user",
    role : "Admin",
    designation : "developer",
    age : 20,
    address: {
        city: "keshod",
        zipcode: '362220',
        street: "123 main st."
    }
} 

// const {name, age, role} = user
// console.log(name,age,role)

// const {name : profileName, age: profileAge} = user
// console.log(profileName,profileAge)

const {name, age, role, state = "Gujarat"} = user
console.log(name,age,role,state)

const array = [1,2,3]
const moreElements = [...array,4,5,6]
console.log(moreElements)

const originalArray = [1,2,3]
const copiedArray = [...originalArray]
console.log(copiedArray)

const arr1 =[1,2,3]
const arr2 = [4,5,6]
const mergedArray = [...arr1,...arr2]
console.log(mergedArray)

//spread opt. in obj

const user1 = {
    name: "user1",
    city: "Keshod"
}
console.log(user1)

const newObj = {
    ...user1,
    role: "React Developer"
}
console.log(newObj)

//copy obj

const user2 = {
    name: "user2",
    city: "Junagadh"
}

const user3 = {...user2}
console.log(user3)

//merge obj
const obj1 = {
    name: "name",
    age:20
}
const obj2 = {
    city: "Junagadh",
    state: "Gujarat",
}
const obj3 = {...obj1,...obj2}
console.log(obj3)

