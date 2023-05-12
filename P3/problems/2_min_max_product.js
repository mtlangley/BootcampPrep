/*******************************************************************************
Write a function `minMaxProduct(array)` that return the product between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxProduct([6, 3, 7, 2]) => 14
minMaxProduct([0, 1, -5, 3, 6]) => -30
*******************************************************************************/
function findMin(array) {
  let min = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
    }
  }
  return min
}
function findMax(array) {
  let max = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max
}

function minMaxProduct(array){
  let min = findMin(array)
  let max = findMax(array)
  return min * max
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxProduct;
