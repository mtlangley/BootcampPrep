/***********************************************************************
Write a function `valueCounter(obj, val)` that takes in an object and a 
value, the function should return the number of times 'val' repeats as a
value in 'obj'.

//Example:
// obj1 = {1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne'}
// valueCounter(obj1, 'Anne') // => 3

// obj2 = {Anne: 50, Alvin: 1, JJ: 100, Roman: 100}
// valueCounter(obj2, 88) // => 0

// pairs = {Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne'}
// valueCounter(pairs, 'Roman') // => 2
***********************************************************************/

function valueCounter(obj, val){
  let count = 0
  for (let key in obj) {
    if (obj[key] === val) {
        count +=1
    }
  }
  return count
}
obj1 = {1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne'}
console.log(valueCounter(obj1, 'Anne')) // => 3

obj2 = {Anne: 50, Alvin: 1, JJ: 100, Roman: 100}
console.log(valueCounter(obj2, 88)) // => 0

pairs = {Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne'}
console.log(valueCounter(pairs, 'Roman')) // => 2
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valueCounter;