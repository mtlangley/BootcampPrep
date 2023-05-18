let arr = [5, 23, 18, 30]

// arr.forEach((index) => {
//     console.log(index);
// })

let results = arr.map((element, index, array) => {
    return element * 3
})

console.log(results)
console.log(arr)

let filter = arr.some((element, index, array) => {
    if (element >= 20) {
        return true
    }
    return false
})

console.log(filter)