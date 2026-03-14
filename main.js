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

function opposite(number) {
    return number === 0 ? 0 : -number
}

console.log(opposite(1))
console.log(opposite(14))
console.log(opposite(-34))
console.log(opposite(0))


