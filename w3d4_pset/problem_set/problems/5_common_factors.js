/***********************************************************************
Write a function commonFactors(num1, num2) that returns an array that
contains the common factors between both numbers. A factor is a number
that divides another number with no remainder.

Examples:

commonFactors(12, 50); // => [ 1, 2 ]
commonFactors(6, 24); // => [ 1, 2, 3, 6 ]
commonFactors(11, 22); // => [ 1, 11 ]
commonFactors(45, 60); // => [ 1, 3, 5, 15 ]
***********************************************************************/

function factorFinder(num) {
    let factors = []

    for(let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i)
        }
    }

    return factors
}

function commonFactors(num1, num2) {
    let num1Factors = factorFinder(num1)
    let num2Factors = factorFinder(num2)
    let commonFactors = []

    for (let i = 0; i < num1Factors.length; i++) {

        if (num2Factors.includes(num1Factors[i])) {
            commonFactors.push(num1Factors[i])
        }
    }

    return commonFactors
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = commonFactors;
