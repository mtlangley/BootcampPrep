/***********************************************************************
Write a function favoriteWord(favoriteLetter, sentence) that takes in a
single letter and a sentence string. The function should return the word
in the sentence that contains `favoriteLetter` the most. If there are
ties, return the word that appears first in the sentence.

Examples

favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''
***********************************************************************/

function favoriteWord(favoriteLetter, sentence) {
    let counts = []
    let arr = sentence.split(' ')

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]
        let counter = 0

        for (let j = 0; j < word.length; j++) {
            if (word[j] === favoriteLetter) {
                counter++
            }
        }
        counts.push(counter)
    }

    let maxCount = counts[0]

    for (let i = 1; i < counts.length; i++) {
        if (counts[i] > maxCount) {
            maxCount = counts[i]
        }
    }
    
    if (maxCount === 0) {
        return ''
    } else {
        return arr[counts.indexOf(maxCount)]
    }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = favoriteWord;
