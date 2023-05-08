// W1D5.js - notes for day 5
// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['chase', 'phi', 'eliot'], 'eliot'); // => true
// isInside(['chase', 'phi', 'eliot'], 'fred'); // => false

// function isInside(array, ele) {
//    return array.includes(ele)
// }

// console.log(isInside(['chase', 'phi', 'eliot'], 'eliot'))
// console.log(isInside(['chase', 'phi', 'eliot'], 'fred'))

// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('App Academy'); //=> 'ymedacA ppA'

// function reverseStr(str) {
//     let reversed = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i]
//     }
//     return reversed
// }

// console.log(reverseStr('bootcamp'))
// console.log(reverseStr('App Academy'))

// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

// function luckySevens(max) {
//     let sevens = []
//     for (let i = 0; i <= max; i++) {
//         if (i % 7 === 0) {
//             sevens.push(i)
//         }
//     }
//     return sevens
// }
// console.log(luckySevens(25))
// console.log(luckySevens(42))

// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]

// function copyMachine(element, num) {
//     let elements = []
//     for (i = 0; i < num; i++) {
//         elements.push(element)
//     }
//     return elements
// }

// console.log(copyMachine('candy', 0))
// console.log(copyMachine('candy', 2))
// console.log(copyMachine('bread', 4))
// console.log(copyMachine(11, 6))

// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]

// function everyOtherWord(sentence) {
//     arr = sentence.split(' ')
//     newArr = []
//     for (let i = 0; i < arr.length; i += 2) {
//         newArr.push(arr[i])
//     } 
//     return newArr
// }

// console.log(everyOtherWord('hello how are you doing on this lovely day?'))
// console.log(everyOtherWord('the weather is wonderful'))

// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// var sent = "Stop it now! Please, wont you stop?";
// var yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// var words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true

// function wordYeller(sentence) {
//     arr = sentence.split(' ')
//     newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].includes('.') || arr[i].includes(',') || arr[i].includes('!') || arr[i].includes('?') || arr[i].includes(';') || arr[i].includes(':')) {
//             newArr.push(arr[i])
//         } else {
//             newArr.push(`${arr[i]}!`)
//         }
//     }
//     return newArr
// }
// console.log(wordYeller("Stop it now! Please, wont you stop?"))
// console.log(wordYeller("Go to the store and grab the following: milk, bread, run, and cake"))

// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//
// Examples:
//
// arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// => [true, false, true, true]
// arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// => [true, false, false, true]

// function arraySubstring(words, str) {
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].includes(str)) {
//             words[i] = true
//         } else {
//             words[i] = false
//         }
//     }
//     return words
// }
// console.log(arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// console.log(arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")

// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
//
// Examples:
//
// evenCaps("Tom got a small piece of pie")
// => "ToM GoT A SmAlL PiEcE Of pIe"
// evenCaps("the book is in front of the table")
// => "ThE BoOk iS In fRoNt oF ThE TaBlE"

function evenCaps(sentence) {
    let sent = ''
    for (let i = 0; i < sentence.length; i++) {
        if (i % 2 === 0) {
           sent += sentence[i].toUpperCase()
        } else {
            sent += sentence[i]
        }
    }
    return sent
}

console.log(evenCaps("Tom got a small piece of pie"))
console.log(evenCaps("the book is in front of the table"))