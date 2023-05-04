//W1D3 doc for practice

// for (let i = 0; i < 10; i++) {
//     console.log(`I love to eat spaghetti ${i} times.`)
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// let i = 1
// while (i < 11) {
//     console.log(i)
//     i ++
// }

// function loop() {
//     let str = 'abcd'
//     for (let i = 0; i < str.length; i++) {
//         if (i === 1) {
//             return 'Hello World'
//         }
//         console.log(str[i])
//     }

//     console.log('after for loop')}

// console.log(loop())

// Problem Set

// Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// it does not need to return.

// function logBetween(lowNum, highNum) {
//     for (let i = lowNum; i <= highNum; i++) {
//         console.log(i)
//     }
// }
// logBetween(-1, 2)
// logBetween(14, 6)
// logBetween(4, 6)

// Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// parameters. The function should print out numbers between `min` and `max` at `step`
// intervals. See the following examples.

// function logBetweenStepper(min, max, step) {
//     for (i = min; i <= max; i += step) {
//         console.log(i)
//     }
// }
// logBetweenStepper(5, 9, 1)
// logBetweenStepper(-10, 15, 5)

// Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
//
// Try to solve this in two ways, using a conditional (if) and without using a
// conditional

// function printFives(max) {
//     let i = 0
//     while (i < max) {
//         console.log(i)
//         i += 5
//     }
// }

// function printFives(max) {
//     for (let i = 0; i < max; i++) {
//         if (i % 5 === 0) {
//             console.log(i)
//         }
//     }
// }
// printFives(20)

// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.

// function printReverse(min, max) {
//     for (let i = max - 1; i > min; i--) {
//         console.log(i)
//     }
// }
// printReverse(13, 18)
// printReverse(90, 94)

// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.

// function sumNums(max) {
//     let total = 0
//     for (i = 0; i <= max; i++) {
//         total += i
//     }
//     return total
// }

// console.log(sumNums(4))
// console.log(sumNums(55))
// console.log(sumNums(365))


// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.

// function isFactorOf(number, factor) {
//     if (number % factor === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isFactorOf(6, 2))
// console.log(isFactorOf(-6, 2))
// console.log(isFactorOf(5, 0))
// console.log(isFactorOf(22, 7))

// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.

// function fizzBuzz(max) {
//     for (let i = 0; i < max; i++) {
//         if (i % 15 === 0) {
//             continue
//         } else if (i % 3 === 0 || i % 5 === 0) {
//             console.log(i)
//         }
//     }
// }

// fizzBuzz(20)

// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.

// function helper(number) {
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false
//         } else {
//             continue
//         }
//     }
// }
// function isPrime(number) {
//     if (helper(number) === false) {
//         return false
//     } else {
//         return true
//     }
// }
function isPrime(number) {
    if (number < 2) {
        return false
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(2))
console.log(isPrime(10))
console.log(isPrime(11))
console.log(isPrime(9))
console.log(isPrime(2017))
console.log(isPrime(1))