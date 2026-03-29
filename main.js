// Even or Odd 8kyu

// function evenOrOdd(number) {
//     return number % 2  ? "Odd" : "Even"
// }
//
// console.log(evenOrOdd(0))
// console.log(evenOrOdd(7))
// console.log(evenOrOdd(8))

// Multiply 8kyu

// function multiply(a, b) {
//     return a * b
// }

// Return Negative 8kyu

// function makeNegative(num) {
//     return num === 0 ? 0 : -Math.abs(num)
// }
//
// console.log(makeNegative(1))
// console.log(makeNegative(-5))
// console.log(makeNegative(0))
// console.log(makeNegative(0.12))

// Sum of positive 8kyu

// function positiveSum(arr) {
//     return arr.reduce((acc, el) => el > 0 ? acc + el : acc, 0)
// }
//
// console.log(positiveSum([1, -4, 7, 12]))

// Reversed Strings 8kyu

// function solution(str) {
//     return str.split('').reverse().join('')
// }
//
// console.log(solution('world'))
// console.log(solution('word'))


// Convert a Number to a String! 8kyu

// function numberToString(num) {
//     return num.toString()
// }
//
// console.log(numberToString(123))
// console.log(numberToString(-100))

// Convert boolean values to strings 'Yes' or 'No'. 8kyu
// function boolToWord(bool) {
//     return bool ? "Yes" : "No"
// }
//
// console.log(boolToWord(true))
// console.log(boolToWord(false))


// Square(n) Sum 8kyu

// function squareSum(numbers) {
//     return numbers.reduce((acc, num) => acc + num ** 2, 0)
// }
//
// console.log(squareSum([1, 2, 2]))


// Remove First and Last Character 8kyu

// function removeChar(str) {
//     return str.slice(1, -1)
// }
//
// console.log(removeChar('eloquent'))
// console.log(removeChar('country'))

// Opposite number 8kyu

// function opposite(number) {
//     return number === 0 ? 0 : -number
// }
//
// console.log(opposite(1))
// console.log(opposite(14))
// console.log(opposite(-34))
// console.log(opposite(0))

// String repeat 8kyu

// function repeatStr(n, s) {
//     return s.repeat(n)
// }
//
// console.log(repeatStr(3, "*"))
// console.log(repeatStr(4, "Hello"))

// Grasshopper - Summation 8kyu

// var summation = function (num) {
//     let sum = 0
//     for (let i = 1; i <= num; i++) {
//         sum += i
//     }
//     return sum
// }
//
// console.log(summation(2))
// console.log(summation(8))

// var summation = function (num) {
//     return num/2 * (1 + num)
// }
//
// console.log(summation(2))
// console.log(summation(8))


// Find the smallest integer in the array 8kyu

// function findSmallestInt(arr) {
//     let small = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (small > arr[i]) {
//             small = arr[i]
//         }
//     }
//     return small
// }
//
//
// console.log(findSmallestInt([34, 15, 88, 2]))
// console.log(findSmallestInt([34, -345, -1, 100]))


// function findSmallestInt(arr) {
//     return arr.reduce((acc, el) => acc < el ? acc : el)
// }
//
// console.log(findSmallestInt([34, 15, 88, 2]))
// console.log(findSmallestInt([34, -345, -1, 100]))

// function findSmallestInt(arr) {
//     return Math.min(...arr)
// }
//
// console.log(findSmallestInt([34, 15, 88, 2]))
// console.log(findSmallestInt([34, -345, -1, 100]))

// Remove String Spaces 8kyu

// function noSpace(x){
// return x.split(" ").join('')
// }
//
// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"))

// function noSpace(x) {
//     return x.replaceAll(" ", "")
// }
//
// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"))
//
// // Counting sheep 8kyu
//
// function countSheeps(sheep) {
//     return sheep.reduce((acc, el) => el === true ? acc + 1 : acc, 0)
// }
//
//
// console.log(countSheeps([]))
// console.log(countSheeps([undefined]))
// console.log(countSheeps([undefined, null, false, true]))

// Convert a String to a Number! 8kyu

// const stringToNumber = function(str){
//     // put your code here
//     return parseInt(str);
// }


// Basic Mathematical Operations 8kyu

// function basicOp(operation, value1, value2) {
//     //Code
//     switch (operation) {
//         case "+":
//             return value1 + value2
//         case "-":
//             return value1 - value2
//         case "*":
//             return value1 * value2
//         case "/":
//             return value1 / value2
//     }
// }
//
// console.log(basicOp("+", 4, 7))

// Abbreviate a Two Word Name 8kyu

// function abbrevName(name){
//
//     return name.split(" ").map(el=>el[0].toUpperCase()).join(".")
//
// }
//
// console.log(abbrevName("Sam Harris"))

// Keep Hydrated! 8kyu


// function litres(time) {
//     return Math.floor(time / 2);
// }
//
//
// console.log(litres(0))
// console.log(litres(1))
// console.log(litres(2))
// console.log(litres(12.3))

// Century From Year 8kyu

// function century(year) {
//     return Math.ceil(year / 100)
// }
//
// console.log(century(1705))
// console.log(century(1900))
// console.log(century(2000))

// Opposites Attract 8kyu

// function lovefunc(flower1, flower2) {
//     return ((flower1 % 2) === 0 && (flower2 % 2) !== 0) || ((flower1 % 2) !== 0 && (flower2 % 2) === 0)
// }

// function lovefunc(flower1, flower2) {
//     return flower1 % 2 !== flower2 % 2
// }

// Convert number to reversed array of digits 8kyu

// function digitize(n) {
//     return n.toString().split('').reverse().map(Number)
// }
//
//
// console.log(digitize(35231))


// Returning Strings 8kyu

// function greet(name) {
//     return `Hello, ${name} how are you doing today?`
// }

// Function 1 - hello world 8kyu

// const greet = () => 'hello world!'

// A Needle in the Haystack 8kyu

// function findNeedle(haystack) {
//     return `found the needle at position ${haystack.indexOf('needle')}`
// }
//
// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))

// Sum Arrays 8kyu

function sum(numbers) {
    return numbers.reduce((el, acc) => acc + el, 0)
}

console.log(sum([1, 5.2, 4, 0, -1]))
console.log(sum([-2.398]))
console.log(sum([]))
