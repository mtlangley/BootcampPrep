/***********************************************************************
Write a function `titleize(title, stopWords)` that takes in a string
`title` and an array of strings `stopWords`. Return the `title` where
every word that does not exist in the `stopWords` array is capitalized;
all others lowercase.

Hints: Decompose this problem into helper functions. Perhaps create these,
- removePunctuation(word)
- isStopWord(word, stopWords)

- Test after you write every function of this decomposition!
- First write a function removePunctuation(word) that takes in a single
word and returns that same word without any punctuation at the end. Feel
free to use the punctuation array we've given you below.
- Second, write a function isStopWord(word, stopWords) that takes in a
single word and returns true if it is a stop word. The check will vary
depending on if the word contains punctuation or not, so use your
removePunctuation function before checking.
- Use slice


var punctuation = [";", "!", ".", "?", ",", "-"];

Examples:

titleize("forest gump, the runner", ["the"])
=> "Forest Gump, the Runner"

titleize("MASTER AND COMMANDER", ["and"])
=> "Master and Commander"

titleize("i LOVE; lover of mine", ["love", "of"])
=> "I love; Lover of Mine"

titleize("shall we dance?", ["dance"])
=> "Shall We dance?"
***********************************************************************/

function removePunctuation(word) {
    let punctuation = [";", "!", ".", "?", ",", "-"]
    let newStr = ''

    for (let i = 0; i < word.length; i++) {
        if (punctuation.indexOf(word[i]) === -1) {
            newStr += word[i]
        }
    }

    return newStr
}

function isStopWord(word, stopWords) {
    let temp = removePunctuation(word).toLowerCase()
    for (let i = 0; i < stopWords.length; i++) {
        if (stopWords.indexOf(temp) === -1) {
            return false
        } else {
            return true
        }
    }
}

function titleize(title, stopWords) {
    let words = title.split(' ')
    let newArr = []

    for (let i = 0; i < words.length; i++) {
        let ele = words[i]
        if (isStopWord(ele, stopWords)) {
            newArr.push(ele.toLowerCase())
        } else {
            newArr.push(ele[0].toUpperCase() + ele.slice(1).toLowerCase())
        }
    }

    return newArr.join(' ')
}

console.log(titleize("forest gump, the runner", ["the"]))
// => "Forest Gump, the Runner"

console.log(titleize("MASTER AND COMMANDER", ["and"]))
// => "Master and Commander"

console.log(titleize("i LOVE; lover of mine", ["love", "of"]))
// => "I love; Lover of Mine"

console.log(titleize("shall we dance?", ["dance"]))
// => "Shall We dance?"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = titleize;
