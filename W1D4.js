// W1D4.js

// let arr = []
// arr.push(null)
// arr.push('Johnathan')
// arr.push(3)
// arr.push(false)
// console.log(arr)

// arr = [
//     'test',
//     true,
//     false,
//     undefined
// ]

// console.log(arr)

// //binary search algorithm
// function binarySearch(arr, val) {
//     if (arr.length === 0) return -1
//     const mid = Math.floor(arr.length/2)
//     const left = arr.slice(0, mid)
//     const right = arr.slice(mid + 1)
//     if (arr[mid] === val) {
//         return mid
//     } else if (val < arr[mid]) {
//         return binarySearch(left, val)
//     } else {
//         const res = binarySearch(right, val)
//         return res === -1 ? -1 : res + mid + 1
//     }
// }
// let arr2 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41]
// console.log(binarySearch(arr2, 37))
// console.log(binarySearch(arr2, 17))

// let fruits = ['apple', 'pear']
// fruits.push('watermelon')
// console.log(fruits)
// let ele = fruits.pop()
// console.log(fruits)
// console.log(ele)
// fruits.unshift('orange')
// console.log(fruits)
// fruits.shift()
// console.log(fruits)

let names = ['diaz', 'lacap', 'rodriguez']
// console.log(names[0][3])

// console.log(names.length)

// console.log(names.includes('diaz'))
// console.log(names.includes('lin'))
console.log(names)
let names2 = names.slice(0, 2)
console.log(names2)
console.log(names)

console.log(names.join('-'))
console.log(names)

let words = names.join('-')
console.log(words)
console.log(words.split('-'))