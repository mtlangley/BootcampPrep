/***********************************************************************
Write a function called capVowels(string) that takes in a string and
returns the string where every vowel is capitalized. All other letters
should be lowercased.

Hint: Don't forget that strings are immutable!

Examples:

capVowels('hello world'); // => 'hEllO wOrld'
capVowels('HELLO WORLD'); // => 'hEllO wOrld'
capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'
***********************************************************************/

function capVowels(string) {
    let newStr = ''
    let vowels = 'aeiouAEIOU'
    for (let i = 0; i < string.length; i++) {
        if (vowels.indexOf(string[i]) !== -1) {
            newStr += string[i].toUpperCase()
        } else {
            newStr += string[i].toLowerCase()
        }
    }
    return newStr
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = capVowels;
