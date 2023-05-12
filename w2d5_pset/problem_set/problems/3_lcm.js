/***********************************************************************
Write a function `lcm(num1, num2)` that returns the lowest number which
is a multiple of both num1 and num2.

Examples:

lcm(2, 3); // => 6
lcm(6, 10); // => 30
lcm(24, 26); // => 312
***********************************************************************/

function lcm(num1, num2) {
    let big = num1
    if (num1 < num2) {
        big = num2
    }
    let sum = num1 * num2
    for (let i = big; i < sum; i++) {
        if (i % num1 === 0 && i % num2 === 0 ) {
            return i
        }
    }
    return sum
}
console.log(lcm(2, 3)); // => 6
console.log(lcm(6, 10)); // => 30
console.log(lcm(24, 26)); // => 312

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = lcm;
