/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
  let words = sentence.split(' ')
  let max = words[0]

  for (let i = 1; i < words.length; i++) {
    
    if (words[i].length >= max.length) {
      max = words[i]
    }
  }

  return max
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
