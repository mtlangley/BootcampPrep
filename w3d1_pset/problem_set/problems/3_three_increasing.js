/***********************************************************************
Write a function `threeIncreasing(arr)` that takes in an array of
numbers and returns true if the array contains 3 consecutive numbers in
increasing order. The function should return false otherwise.

Note that the 3 consecutive numbers should be increasing by 1, so the
the second  number is 1 greater than the first, and the third number is
1 greater  than the second.

Examples:

threeIncreasing([3, 2, 11, 12, 13, 2, 4]); // => true
threeIncreasing([7, 2, 4, 5, 2, 1, 6]); // => false
***********************************************************************/

function threeIncreasing(arr) {
    for (let i = 0; i < arr.length; i++) {
        let prev = arr[i - 1]
        let ele = arr[i]
        let next = arr[i + 1]

        if (ele - prev === 1 && next - ele === 1) {
            return true
        }
    }

    return false
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = threeIncreasing;
