/*******************************************************************************
Write a function shortestWord(sentence) that returns the shortest word of a sentence.
You can assume that the words of the sentence all have different lengths.

Examples:

shortestWord('app academy is cool') => 'is'
shortestWord('bootcamp prep') => 'prep'
*******************************************************************************/

function shortestWord(sentence) {
  let shortest = ''
  let words = sentence.split(' ')
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      shortest = words[i]
    } else {
      if (words[i].length < words[i - 1].length) {
        shortest = words[i]
      }
    }
  }
  return shortest
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = shortestWord;
