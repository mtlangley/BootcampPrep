/*******************************************************************************
Write a function hipsterfyWord(word) that takes takes in a string and returns
the string with the last vowel removed. 'y' is not a vowel.

Examples:

hipsterfyWord('proper') => 'propr'
hipsterfyWord('tonic') => 'tonc'
hipsterfyWord('PANTHER') => 'PANTHR'
hipsterfyWord('BACKWARDS') => 'BACKWRDS'
*******************************************************************************/

function hipsterfyWord(word) {
  let str = ''
  let vowels = 'aeiouAEIOU'
  let index = -1
  for (let i = word.length -1; i >= 0; i--) {
    if (vowels.indexOf(word[i]) !== -1) {
      index = i
      break
    }
  }
  for (let i = 0; i < word.length; i++) {
    if (i !== index) {
      str += word[i]
    }
  }
  return str
}
console.log(hipsterfyWord('proper'))
console.log(hipsterfyWord('tonic'))
console.log(hipsterfyWord('PANTHER'))
console.log(hipsterfyWord('BACKWARDS'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfyWord;
