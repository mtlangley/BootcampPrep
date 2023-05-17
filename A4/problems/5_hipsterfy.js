/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/

function hipsterfy(sentence) {
  let words = sentence.split(' ')
  let vowels = 'aeiouAEIOU'
  let arr = []

  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    let index = -1
    let newWord = ''

    for (let i = word.length - 1; i >= 0; i--) {
      if (vowels.indexOf(word[i]) !== -1) {
        index = i
        break
      }
    }

    for (let i = 0; i <word.length; i++) {
      if (i !== index) {
        newWord += word[i]
      }
    }

    arr.push(newWord)
  }
  return arr.join(' ')

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
