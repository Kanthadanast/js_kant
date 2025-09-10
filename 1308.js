//object1308.js

const day = {
    1 : 'sunday',
    2 : 2,
    '3' : false,
    4 : null,
    5 : [11,12,'13','14'],
    6 : 1.1,
    cat : {
        name : 'japan',
        hello () {return "meow"}
    }
}


console.log(day.cat.name);
console.log(day.cat.hello);
console.log(day.cat);
console.log(day[6]);
console.log(day['3']);
console.log(day[5]);




//object1308.js
//หลังบ้าน SIT
//062
const std1 = { id: 1, name: "kik", address: {no:123, city: "Bangkok"}}
let { address:{city: myAddress} , id} = std1
console.log(myAddress);
console.log(id);


//create compareStudent function to compare two students
const std1 = { id: 1, name: "kik" }
const std2 = { id: 1, name: "KIK" }
function compareStudent(std1,std2) {
    if (std1.id === std2.id && std1.name.toLowerCase() === std2.name.toLowerCase()) {
        return true
    }
    return false
}
console.log(compareStudent(std1,std2))



function dosomething (obj) {
    obj = { id : 1, name : 'yoyo'}
    obj.name = 'xxx'
}
const pet = { id : 1, name : 'yoyo'}
console.log(pet.name);
dosomething(pet)
console.log(pet.name);


const stu1 = { id: 1, name: 'kookkik'}
const stu2 = { id: 1, name: 'kookkik'}
console.log(stu1 == stu2);
console.log(stu1 === stu2);
console.log(Object.is(stu1, stu2));


//หลังบ้าน SIT
//062
print object{key:value}
const per1 = {firstname: 'Kanthadanast', lastname: 'Rojrachchayanont', age: 19}
console.log(per1.firstname); //object.property
console.log(per1["lastname"]); //object["property"]
for (const key in per1) {
    console.log(key);
    console.log(per1[key]);
}


// using object.create()
//หลังบ้าน SIT
//062
const Person = {
    name : 'kanthadanast',
    lastname : 'Rojrachchayanont'
}
const one = Object.create(Person)
one.name = 'kookkik';
console.log(one.name);


//Class
//หลังบ้าน SIT
//062
class Birthday {
    constructor (day,month,year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
const me = new Birthday(11,'dec',2005)
const pp = new Birthday(24,'Mar',2006)
console.log(me);
console.log(pp);


//Constructor function
//หลังบ้าน SIT
//062
function Day(number,month,year) {
    this.number = number;
    this.month = month;
    this.year = year;
}
const me = new Day(11,'dec',2005)
console.log(me);


const day = {
    1 : 'sunday',
    2 : 2,
    '3' : false,
    4 : null,
    5 : [11,12,'13','14'],
    6 : 1.1,
    pets : {
        name : 'japan',
        hello () {return "meow"}
    }
}
console.log(day.pats.name);
console.log(day.pets.hello);
console.log(day.pets);
console.log(day[6]);
console.log(day['3']);
console.log(day[5]);


let nestobj = {
    hello: 'world',
    siravij: {
        firstname: 'le',
        lastname: 'le',
        age:{
            day: 15,
            month: 12,
            year: 12
        }
    }
}
 

 