// 0309.js

//หลังบ้าน SIT
//062

// Write a function getPassingNames that takes an array of student objects and returns an 
// array of uppercase names of students who passed the exam.
const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 }
];
console.log(Object.entries(studentScores[2])); // output : [ [ 'name', 'Charlie' ], [ 'score', 68 ] ]
function getPassingName(obj) {
    return obj.filter((e) => e.score >= 70).map((e) => e.name.toUpperCase());
}
const passingNames = getPassingName(studentScores);
console.log(passingNames); // output : [ 'ALICE', 'BOB', 'EVE' ]

// use isArray()
console.log(Array.isArray([])); // true
console.log(Array.isArray(["a", 12, false])); // true
console.log(Array.isArray(new Array(2))); // true
console.log(Array.isArray("[]")); // false
console.log(Array.isArray(123)); // false
console.log(Array.isArray(false)); // false
console.log(Array.isArray("1")); // false
console.log(Array.isArray({})); // false


const num1 = [1, 2, 3]
const num2 = [3, 5, 7]
console.log([...num1, ...num2]); // use spread
console.log(num1.concat(num2)); // use concat
// output : [ 1, 2, 3, 3, 5, 7 ] -> num1, num2
console.log(num1.toString()) //convert array to string data type | output : 1,2,3
console.log(num1.join(".")) //array to string with separator | output : 1.2.3
console.log(num1.join(",")) // output : 1,2,3
console.log(num1.join(":")) // output : 1:2:3
console.log(num1.join(" ")) // output : 1 2 3


// use includes
console.log("mangoteen".includes("go")); // true เช็คส่วนใดส่วนหนึ่ง
console.log(["mangoteen", "mango"].includes("go")); // false ไอเทมต้องมีค่า includes ตามที่ระบุ



//หลังบ้าน SIT
//062
const array = [2, 40, 28, 90, 11, 22, 19, 82]
const arr = [...array].sort((a1,a2) => a2 - a1) // ทำให้ array เดิมยังอยู่
console.log(arr)


// 
const students = [
    { id: 6713050102, name: "Suda", gpa: 2.5 },
    { id: 6713050555, name: "ada", gpa: 2.8 },
    { id: 6713050425, name: "pornchai", gpa: 3.25 },
    { id: 6713050999, name: "Pornsak", gpa: 3.8 },
]
students.sort((a,b) => a.name.localeCompare(b.name))
console.log(students)
// output : [
//   { id: 6713050555, name: 'ada', gpa: 2.8 },
//   { id: 6713050425, name: 'pornchai', gpa: 3.25 },
//   { id: 6713050999, name: 'Pornsak', gpa: 3.8 },
//   { id: 6713050102, name: 'Suda', gpa: 2.5 }
// ]

 