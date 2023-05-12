/***********************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string
containing several words as input. Remove the last vowel from each word.
`'y'` is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
***********************************************************************/

function hipsterfy(sentence) {
    let vowels = 'aeiouAEIOU'
    let words = sentence.split(' ')
    let arr = []
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        let index = -1
        for (let j = word.length - 1; j >= 0; j--) {
                if (vowels.indexOf(word[j]) !== -1) {
                    index = j
                    break
                }
        }
        let newWord = ''
        for (let j = 0; j < word.length; j++) {
            if (j !== index) {
                newWord += word[j]
            }
        }
        arr.push(newWord)
    }
    return arr.join(' ')
}
console.log(hipsterfy("proper")); // => "propr"
console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hipsterfy;
