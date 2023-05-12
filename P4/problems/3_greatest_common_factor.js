/*******************************************************************************
Write a function greatestCommonFactor(num1, num2) that returns the largest number
that is divides both `num1` and `num2`.

Examples:

greatestCommonFactor(15, 25) => 5
greatestCommonFactor(16, 24) => 8
greatestCommonFactor(7, 11) => 1
*******************************************************************************/

function factorFinder(num) {
  factors = []
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      factors.push(i)
    }
  }
  return factors
}

function greatestCommonFactor(num1, num2) {
  let factors1 = factorFinder(num1)
  let factors2 = factorFinder(num2)
  let commonFactors = []

  for (let i = 0; i < factors1.length; i++) {
    if (factors2.includes(factors1[i])) {
      commonFactors.push(factors1[i])
    }
  }

  let max = commonFactors[0]

  for (let i = 0; i < commonFactors.length; i++) {
    if (commonFactors[i] > commonFactors[i - 1]) {
      max = commonFactors[i]
    }
  }
  return max
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = greatestCommonFactor;
