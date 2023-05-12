/***********************************************************************
Write a function `pairProduct(arr, num)` that accepts an array of
numbers (arr) and a target number (num). It should return pairs of
indices whose elements multiply to `num`. No pair should appear twice in
the result.

Use only `while` loops. No `for` loops.

Examples:

pairProduct([1,2,3,4,5], 4); //=> [ [ 0, 3 ] ]
pairProduct([1,2,3,4,5], 8); //=> [ [ 1, 3 ] ]
pairProduct([1, 2, 3, 12, 8], 24); //=> [ [ 1, 3 ], [ 2, 4 ] ]
***********************************************************************/

function pairProduct(arr, num) {
    let pairs = []
    let counter1 = 0

    while (counter1 < arr.length) {
        
        let counter2 = counter1 + 1
        
        while (counter2 < arr.length) {
            if (arr[counter1] * arr[counter2] === num) {
                pairs.push([counter1, counter2])
            }
            counter2++
        }
        counter1++
    }

    return pairs
}
console.log(pairProduct([1,2,3,4,5], 4)); //=> [ [ 0, 3 ] ]
console.log(pairProduct([1,2,3,4,5], 8)); //=> [ [ 1, 3 ] ]
console.log(pairProduct([1, 2, 3, 12, 8], 24)); //=> [ [ 1, 3 ], [ 2, 4 ] ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = pairProduct;
