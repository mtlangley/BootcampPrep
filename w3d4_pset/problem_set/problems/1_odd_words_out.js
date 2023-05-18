/***********************************************************************
Write a function oddWordsOut(sentence) that takes in a sentence string
and returns the sentence where words with an odd number of characters
are removed.

Examples:

oddWordsOut('go to the store and buy milk'); // => 'go to milk'
oddWordsOut('what is the answer'); // => 'what is answer'
***********************************************************************/

function isEven(str) {
    if (str.length % 2 === 0) {
        return true
    } else {
        return false
    }
}

function oddWordsOut(sentence) {
    let arr = sentence.split(' ')
    let results = arr.filter(isEven)
    return results.join(' ')
}

console.log(oddWordsOut('go to the store and buy milk')); // => 'go to milk'
console.log(oddWordsOut('what is the answer')); // => 'what is answer'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = oddWordsOut;
