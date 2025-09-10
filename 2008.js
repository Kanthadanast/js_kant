// function2008.js

//หลังบ้าน SIT
//062


// ในประโยคมีคำซ้ำกี่คำ
function getFreqOfWords(sentence) {
    if(sentence === null || sentence === undefined || sentence == '') {
        return undefined;
    }
    const arrayOfwords = sentence.toLowerCase().split(' ');
    const keypairfreqword = {}
    for(let i = 0; i < arrayOfwords.length; i++) {
        const word = arrayOfwords[i];
        if (keypairfreqword[word]) {
            keypairfreqword[word]++;
        } else {
            keypairfreqword[word] = 1;
        }
    }
    return keypairfreqword
}
console.log(getFreqOfWords('Today is present and present is your gift'));
console.log(getFreqOfWords('Do you best just do it'));
console.log(getFreqOfWords(null));
console.log(getFreqOfWords(undefined));


// 1
function Test(a,b){
    return a+b;
}
console.log(Test(1,2));
console.log(Test(2,2));
const test_2 = (a,b) =>{
    return a+b;
}
console.log(test_2(1,2))

console.log("=========");

function sumnumber(num1,num2) {
    return num1 + num2
}

var sum = sumnumber(28,11);
console.log(sum);

console.log(sumnumber(8,1));

console.log("=========");


// 1.function declaration
function sum(a, b) {
    return a + b
}
sum(1,2)
const x = sum;
console.log(x(1,2))
// 2.function expression (arrow syntax)
const sum2 = () => a + b
// 3.function expression (annoymousfunction declartion)
const sum3 = function () {
    return a + b
}


// หลังบ้าน SIT
const makeThaiSentence = function (sentence,func) {
    return func(sentence);
}
console.log(makeThaiSentence("I will go run", (sentence) => sentence + " nakub"))


function greet(name, call) {
    return call(name)
}
function greetHello(n) {
    return "Hello, " + n
}
console.log(greet("Parinda", greetHello)); 
console.log(greet("Parinda", greetHello('boy')));  //call กลายเป็นสตริงไปแล้ว


function Test(x) {
    // return x(20)
    return x
}
function Test2(x) {
    return x + 50
}
console.log(Test(Test2)(20));
console.log(Test(Test2));


// simple
function sum (a,b) {
    return a + b
}
function echo (str) {
    return str
}
function getLowerCase (str) {
    const tmp = str.toLowerCase()
    return tmp
}

// arrow
const sum = (a,b) => a + b
const echo = str => str
const getLowerCase = str => {
    const tmp = str.toLowerCase()
    return tmp
}

 
// หลังบ้าน SIT
// 062
function sum() {
   let result = 0
   for(i = 0; i < arguments.length;  i++){
    result += arguments[i]
   }return result
}
console.log(sum());
console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));


function dosomething(greet = 'Hi', someone = 'Guest', firstsent) {
    return `${greet}, ${someone}, ${firstsent}`
}
console.log(dosomething()); // Hi, Guest, undefined
console.log(dosomething("abc")); //abc, Guest, undefined
console.log(dosomething("xyz", "aaa")); //xyz, aaa, undefined
console.log(dosomething("xyz", "aaa", "bbb")); //xyz, aaa, bbb
console.log(dosomething(undefined, undefined, undefined)); //Hi, Guest, undefined
console.log(dosomething(null, null, null)); //null, null, null
console.log(dosomething("a", "b", "c", "d")); //a, b, c

 