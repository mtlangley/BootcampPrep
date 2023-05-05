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

// let names = ['diaz', 'lacap', 'rodriguez']
// console.log(names[0][3])

// console.log(names.length)

// console.log(names.includes('diaz'))
// console.log(names.includes('lin'))
// console.log(names)
// let names2 = names.slice(0, 2)
// console.log(names2)
// console.log(names)

// console.log(names.join('-'))
// console.log(names)

// let words = names.join('-')
// console.log(words)
// console.log(words.split('-'))

// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.

// function range(start, end) {
//     let arr = []
//     for (let i = start; i <= end; i++) {
//         arr.push(i)
//     }
//     return arr
// }
// console.log(range(1,4))
// console.log(range(4,2))

// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.

// function capWords(words) {
//     let arr = []
//     let caps = words.toUpperCase(words)
//     arr.push(caps)
//     return arr    
// }

// console.log(capWords(['hello', 'boOtCaMp', 'PREP!']))

// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.

// function wordPeriods(sentence) {
//     return sentence.split(' ').join('. ')
// }

// console.log(wordPeriods('hello world'))
// console.log(wordPeriods('what is the weather today'))

// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.

function maxValue(array) {
    if (array.length === 0) {
        return null
    }
    let max = array[0]
    for (i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}
// maxValue([12, 6, 43, 2]); // => 43
// maxValue([]); // => null
// maxValue([-4, -10, 0.43]); // => 0.43

// console.log(maxValue([12, 6, 43, 2]))
// console.log(maxValue([]))
// console.log(maxValue([-4, -10, 0.43]))

// Write a function `myIndexOf(array, target)` that takes in an array of
// numbers and a target number as arguments. It should return the index value
// of the target if it is present in the array or -1 if it is not present.
//
// CONSTRAINT: Do not use the indexOf method.
//
// Examples:

// function myIndexOf(array, target) {
//     for (let i = 0; i < array.length; i++) {
//         if (target === array[i]) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(myIndexOf([1,2,3,4], 4))
// console.log(myIndexOf([5,6,7,8], 2))


// Write a function `factorArray(array, number)` that takes in an array of
// numbers and a number and returns an array of all the factors.
//
// Examples:

// function factorArray(array, number) {
//     let arr = []
//     for (let i = 0; i < array.length; i++) {
//         if (number % array[i] === 0) {
//             arr.push(array[i])
//         }
//     }
//     return arr
// }

// console.log(factorArray([2,3,4,5,6],20))
// console.log(factorArray([2,3,4,5,6],35))
// console.log(factorArray([10,15,20,25],5))


// function printForwards(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let ele = arr[i]
//         console.log(ele)
//     }
// }
// let alphabet = ['a', 'b', 'c', 'd', 'e',]
// printForwards(alphabet)

// function printForwards(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let ele = arr[i]
//         console.log(ele)
//     }
// }
// let alphabet = ['a', 'b', 'c', 'd', 'e']
// printForwards(alphabet)

// function printForwards(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let ele = arr[i]
//         console.log(ele)
//     }
// }
// let alphabet = ['a', 'b', 'c', 'd', 'e']
// printForwards(alphabet)

// function printForwards(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let ele = arr[i]
//         console.log(ele) 
//     }
// }
// let alphabet = ['a', 'b', 'c', 'd', 'e']
// printForwards(alphabet)

// function printForwards(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let ele = arr[i]
//         console.log(ele)
//     }
// }
// let alphabet = ['a', 'b', 'c', 'd', 'e']
// printForwards(alphabet)

// function printBackwards(array) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         let ele = array[i]
//         console.log(ele)
//     }
// }
// let names = ['kurstie', 'mike', 'alex', 'meagan']
// printBackwards(names)

// function printBackwards(array) {
//     for (let i = array.length -1; i >= 0; i--) {
//         let ele = array[i]
//         console.log(ele)
//     }
// }
// let names = ['kurstie', 'mike', 'alex', 'meagan']
// printBackwards(names)

// function printBackwards(array) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         let ele = array[i]
//         console.log(ele)
//     }
// }
// let names = ['kurstie', 'mike', 'alex', 'meagan']
// printBackwards(names)

// function printBackwards(array) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         let ele = array[i]
//         console.log(ele)
//     }
// }
// let names = ['kurstie', 'mike', 'alex', 'meagan']
// printBackwards(names)

// function printBackwards(array) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         let ele = array[i]
//         console.log(ele)
//     }
// }
// let names = ['kurstie', 'mike', 'alex', 'meagan']
// printBackwards(names)