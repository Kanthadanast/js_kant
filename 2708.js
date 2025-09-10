// 2708.js

// หลังบ้าน SIT
// 062

// const words = ['apple', 'Mango', "orange", "Banana"]

// words.reverse()
// console.log(words);  // output : [ 'Banana', 'orange', 'Mango', 'apple' ]

//1. annonymous arrow function
// const startAWords = words.filter(   word => word.startsWith('a')   )
// console.log(startAWords); // output : [ 'apple' ]

// use forEach()
// const startAWord = []
// const startAWords = words.forEach( word => {
//     if (word.startsWith('a')) {
//         startAWord.push(word)
//     }
// });
// console.log(startAWord); // output : [ 'apple' ]

//2. annonymouse function declaration
// const startAWords1 = words.filter(function (word) {
//     return word.startsWith("a")
// })
// console.log(startAWords1); // output : [ 'apple' ]

//3. named arrow function
// const checkStartA = (word) => word.startsWith("a")
// const startAWords2 = words.filter(checkStartA)
// console.log(startAWords2); // output : [ 'apple' ]


//4. named function declaration
// function checkStartA2(word) {
//     return word.startsWith("a")
// }
// const startAWords3 = words.filter(checkStartA2)
// console.log(startAWords3); // output : [ 'apple' ]


// const employees1 = [
//     {
//         id: "k1001",
//         firstname: "kanthadanast",
//         lastname: "rojrachchayanont"
//     },
//     {
//         id: "k1002",
//         firstname: "kanthada",
//         lastname: "rojrachchaya" 
//     },
//     {
//         id: "k1003",
//         firstname: "kant",
//         lastname: "rojrach" 
//     }
// ]
// const fullname = employees1.map( employee => employee.firstname.toUpperCase() + " " + employee.lastname.toUpperCase())
// console.log(fullname); 
                        // output : [
                        //   'KANTHADANAST ROJRACHCHAYANONT',
                        //   'KANTHADA ROJRACHCHAYA',
                        //   'KANT ROJRACH'
                        // ]

// const employees = [
//   {
//     id: "e1001",
//     firstname: "Somchai",
//     lastname: "Jaidee",
//   },
//   {
//     id: "e1002",
//     firstname: "Pornchai",
//     lastname: "Deejai",
//   },
//   {
//     id: "e1005",
//     firstname: "Suda",
//     lastname: "Rakdee",
//   },
// ]
// const fullname = employees
//     .map(
//      employee => employee.firstname.toUpperCase() + " " + employee.lastname.toUpperCase()
//     )
// const namename = employees
//     .map(e => (  e.firstname + ' ' + e.lastname).toUpperCase())
//     .filter(employee => employee.includes('JAI'))
// const employeesName = employees
//     .map(employeesFull => employeesFull.firstname + " " + employeesFull.lastname)
//     .filter((employee) => employee.toLowerCase().includes("jai"))
// console.log(employeesName)
// console.log(fullname);
// console.log(namename);
                            // output : [ 'Somchai Jaidee', 'Pornchai Deejai' ]
                            // [ 'SOMCHAI JAIDEE', 'PORNCHAI DEEJAI', 'SUDA RAKDEE' ]
                            // [ 'SOMCHAI JAIDEE', 'PORNCHAI DEEJAI' ]


// const array1 = [1,2,3,4]
// const reducer = (total, currentValue) => total + currentValue
// console.log(`array1.reduce(reducer) : ${array1.reduce(reducer)}`); // output : array1.reduce(reducer) : 10

// const nums = [5,4,100,-1,0,2,19]
// const maxNum = nums.reduce( (max, num) => Math.max(max, num) )
// console.log(maxNum); //output : 100

//use reduce
// const carts = [ 
//     {productId: 1002, price: 10, amount: 5}, 
//     {productId: 2005, price: 100, amount: 2}, 
//     {productId: 5001, price: 5, amount: 4}
// ]
// const netprice = carts.reduce( (total, cart) => total + (cart.price * cart.amount ),0 )  * 1.07
// console.log(netprice.toFixed(2)); //output : 288.90


// const nums = [2, 4, 6]
// nums[nums.length] = 8 // output : [ 2, 4, 6, 8 ]
// nums.push(8) // output : [ 2, 4, 6, 8 ]
// console.log(nums);

// // add in the beginning of array
// nums.unshift(10) // output : [ 10, 2, 4, 6, 8, 8 ]
// console.log(nums);

// // remove in the end of array
// nums.pop() // output : [ 10, 2, 4, 6, 8 ]
// console.log(nums);

// // remove in the beginning of array
// nums.shift() // output : [ 2, 4, 6, 8 ]
// console.log(nums);

// use splice()
// const words = ['apple', "orange", "Banana"] 
// // add 'cherry' after 'orange'
// words.splice(2, 0, "cherry", "berry")
// console.log(words); // output : [ 'apple', 'orange', 'cherry', 'berry', 'Banana' ]

// // delete 'cherry'
// words.splice(2, 1) // 2 is ตำแหน่งที่จะลบ and 1 is จำนวนตัวที่จะลบ
// console.log(words); // output : [ 'apple', 'orange', 'berry', 'Banana' ]

// // replace 'berry'
// words.splice(2, 1, "mango")
// console.log(words); // output : [ 'apple', 'orange', 'mango', 'Banana' ]

//use slice()
// const words = ['apple', "orange", "Banana", "mango", "cherry"] 
// console.log(words.slice(1)); // output : [ 'orange', 'Banana', 'mango', 'cherry' ]
// console.log(words.slice(0, 3)); // output : [ 'apple', 'orange', 'Banana' ]
// console.log(words.slice(2)); // output : [ 'Banana', 'mango', 'cherry' ]
// console.log(words.slice(2, 5)); // output : [ 'Banana', 'mango', 'cherry' ]
// console.log(words.slice(-3)); // output : [ 'Banana', 'mango', 'cherry' ]

// use fill()
const words = ['apple', "orange", "Banana", "mango", "cherry"] 
words.fill(null)
console.log(words); // output : [ null, null, null, null, null ]

words.fill(undefined, 1, 3)
console.log(words); // output : [ null, undefined, undefined, null, null ]
words.fill(null, 1)
console.log(words); // output : [ null, null, null, null, null ]




// หลังบ้าน SIT
// 062
 