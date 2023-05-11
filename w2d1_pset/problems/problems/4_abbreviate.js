/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/

function abbreviate(sentence) {
    let arr = sentence.split(' ')
    let newArr = []
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 4) {
            let word = arr[i]
            let newWord = ''
            for (let i = 0; i < word.length; i++) {
                if (vowels.indexOf(word[i]) === -1) {
                    newWord += word[i]
                } else {
                    continue
                }
            }
            newArr.push(newWord)
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr.join(' ')
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = abbreviate;
