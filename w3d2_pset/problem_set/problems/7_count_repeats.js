/***********************************************************************
Write a function `countRepeats(string)` that takes in a string and
returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters. Count the
number of letters that repeat, not the number of times they repeat in
the string.

Examples:

countRepeats('alvin'); //=> 0
countRepeats('aaaalvin'); //=> 1
countRepeats('pops'); //=> 1
countRepeats('mississippi'); //=> 3
countRepeats('hellobootcampprep'); //=> 4
***********************************************************************/

function countRepeats(string) {
    let letters = {}
    
    for (let i = 0; i < string.length; i++) {
        if (letters[string[i]] === undefined) {
            letters[string[i]] = 1
        } else {
            letters[string[i]]++
        }
    }

    let values = Object.values(letters)
    
    let repeats = 0

    for (let i = 0; i < values.length; i++) {
        if (values[i] > 1) {
            repeats++
        }
    }

    return repeats
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countRepeats;
