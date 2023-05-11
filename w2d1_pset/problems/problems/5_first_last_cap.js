/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/

function firstLastCap(sentence) {
    let arr = sentence.split(' ')
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]
        let newWord = ''
        for (let i = 0; i < word.length; i++) {
            if (i === 0 || i === word.length - 1) {
                newWord += word[i].toUpperCase()
            } else {
                newWord += word[i].toLowerCase()
            }
        }
        newArr.push(newWord)
    }
    return newArr.join(' ')
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = firstLastCap;
