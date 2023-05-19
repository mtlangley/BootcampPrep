/*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) => 'maxValue'
*******************************************************************************/

function variableNameify(words) {
  let newVariable = [words[0].toLowerCase()]

  for (let i = 1; i < words.length; i++) {
    let word = words[i]
    let newWord = ''

    for (let j = 0; j < word.length; j++) {
      if (j === 0) {
        newWord += word[j].toUpperCase()
      } else {
        newWord += word[j].toLowerCase()
      }
    }
    newVariable += newWord
  }

  return newVariable
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = variableNameify;
