/***********************************************************************
Write a function `reverb(word)` that takes in a word string and returns
the word with all characters after the last vowel repeated.

Examples:

reverb('running'); // => 'runninging'
reverb('wild'); // => 'wildild'
reverb('debugged'); // => 'debuggeded'
reverb('my'); // => 'my'
***********************************************************************/

function reverb(word) {
    let vowels = 'aeiouAEIOU'
    let index = -1

    for (let i = word.length - 1; i >= 0; i--) {
        
        if (vowels.indexOf(word[i]) !== -1) {
            index = i
            break
        }
    }

    if (index !== - 1) {
        return word + word.slice(index)
    } else {
        return word
    }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverb;
