let student = {
    name: "    first name    ",
    email: "USER@GMAIL.COM",
    course: "JavaScript, React ,Node",
    marks: [45, 78, 60, 90, 30],
    hobbies: ["Music","Cricket","Reading"],
    address: ["India",["Gujarat", "Ahmedabad"]]
};

// STRING OPERATIONS

// console.log(student.name.trim().toUpperCase())
// console.log(student.email.toLowerCase())
// console.log(student.course.includes("React"))
// console.log(student.course.indexOf("Node"))
// console.log(student.course.replace("JavaScript","Js"))
// console.log(student.course.split(" "))
// console.log(student.name.length)

// ARRAY OPERATIONS

// student.hobbies.push("Swimming")
// console.log(student.hobbies)
// student.hobbies.pop()
// console.log(student.hobbies)
// student.hobbies.unshift("Drawing")
// console.log(student.hobbies)
// student.hobbies.shift()
// console.log(student.hobbies)

// let mixed = student.hobbies.concat(student.course);
// console.log(mixed)

// if(student.course.includes("React")){
//     console.log("true");
// }else{
//     console.log("false");
// }

// let find = student.course.indexOf("JS")
// console.log(find)

// console.log(student.marks.slice(0,2))

// console.log(student.marks.splice(0,4))

// console.log(student.hobbies.join(", "))

// ARRAY ITERATION METHODS

// console.log(student.marks.map(marks => marks + 5))
// console.log(student.marks.filter(marks => marks > 40))
// console.log(student.marks.find(marks => marks > 80))
// console.log(student.hobbies.forEach(hobbies => console.log(hobbies)))
// console.log(student.marks.sort())
// console.log(student.marks.reverse())
// console.log(student.address.flat())

//OBJECT HANDLING

let mark = student.marks.find(marks => marks < 40)
console.log(mark)

if(mark.filter(num => num > 40)){
    console.log("pass")
}else{
    console.log("fail")
}

