/***********************************************************************
Write a function `signFlipCount` that takes in an array of numbers as
arguments. The function should return the number of times adjacent
numbers in the array switch signs from positive to negative or vice
versa. The number 0 is neither positive nor negative.

Examples:

signFlipCount([5, 6, 10, 3]); //=> 0
signFlipCount([-12, 0, -3, -5]); //=> 0
signFlipCount([-12, 10, -3, -5]); //=> 2
signFlipCount([1, -2, -3, -4]); //=> 1
signFlipCount([-1, 11.3, -3, 100]); //=> 3
***********************************************************************/

function signFlipCount(numbers) {
    let flips = 0

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === 0 || numbers[i - 1] === 0){
            continue
        } else if (Math.sign(numbers[i]) !== Math.sign(numbers[i - 1])) {
            flips++
        }
    }
    return flips
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = signFlipCount;
