/***********************************************************************
Write a function vowelShift(sentence) that takes in a sentence string.
The function should return a new sentence, where every vowel is replaced
with the next vowel in the alphabet.

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

vowelShift('bootcamp'); // => 'buutcemp'
vowelShift('hello world'); // => 'hillu wurld'
vowelShift('on the hunt'); // => 'un thi hant'
***********************************************************************/

function vowelShift(sentence) {
    let shiftObj = {
        a: 'e',
        e: 'i',
        i: 'o',
        o: 'u',
        u: 'a'
    }
    
    let newStr = ''

    for (let i = 0; i < sentence.length; i++) {
        if (Object.values(shiftObj).includes(sentence[i])) {
            newStr += shiftObj[sentence[i]]
        } else {
            newStr += sentence[i]
        }
    }
    return newStr

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = vowelShift;
