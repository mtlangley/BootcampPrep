/***********************************************************************
Write a function `commonPrimeFactors` that takes in two numbers as
arguments and returns an array of all prime factors that are common
between the two numbers. A factor is a number that divides another
number without resulting in a remainder.

Examples:

commonPrimeFactors(12, 50); // => [ 2 ]
commonPrimeFactors(6, 24); // => [ 2, 3 ]
commonPrimeFactors(11,22); // => [ 11 ]
commonPrimeFactors(45, 60); // => [ 3, 5 ]
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

function isPrime(num) {
    if(num < 2) {
        return false
    } else if (num === 2) {
        return true
    }
    for (let i = 3; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}

function commonPrimeFactors(num1, num2) {
    let num1Factors = factorFinder(num1)
    let num2Factors = factorFinder(num2)
    let commonFactors = []

    for (let i = 0; i < num1Factors.length; i++) {

        if (num2Factors.includes(num1Factors[i])) {
            commonFactors.push(num1Factors[i])
        }
    }

    return commonFactors.filter(isPrime)
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = commonPrimeFactors;
