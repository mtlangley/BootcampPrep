// //binary search algorithm
// function binarySearch(arr, val) {
//     if (arr.length === 0) return -1
//     const mid = Math.floor(arr.length/2)
//     const left = arr.slice(0, mid)
//     const right = arr.slice(mid + 1)
//     if (arr[mid] === val) {
//         return mid
//     } else if (val < arr[mid]) {
//         return binarySearch(left, val)
//     } else {
//         const res = binarySearch(right, val)
//         return res === -1 ? -1 : res + mid + 1
//     }
// }
// let arr2 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41]
// console.log(binarySearch(arr2, 37))
// console.log(binarySearch(arr2, 17))

// mergeSort algorithm

// const mergeSort = arr => {
//     if (arr.length <= 1) return arr
//     const mid = Math.floor(arr.length / 2)
//     const left = mergeSort(arr.slice(0, mid))
//     const right = mergeSort(arr.slice(mid))
//     return merge(left, right)
// }

// const merge = (left, right) => {
//     const merged = []

//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             merged.push(left.shift())
//         } else {
//             merged.push(right.shift())
//         }
//     }
//     return merged.concat(left, right)
// }

// const nums = [7, 4, 2, 0, 1, 3, 5, 6]
// console.log(mergeSort(nums));

// quickSort algorithm
// const quickSort = arr => {
//     if (arr.length <= 1) return arr
//     const pivot = arr.shift()
//     const left = quickSort(arr.filter(ele => ele <= pivot))
//     const right = quickSort(arr.filter(ele => ele > pivot))
//     return left.concat([pivot], right)
// }
// const nums = [7, 1, 2, 4, 0, 3, 6, 5]

// console.log(quickSort(nums))

// [7, 1, 2, 4, 0, 3, 6, 5].filter(ele => ele <= 7)

const bubbleSort = nums => {
    let sorted = false;
    
    while (!sorted) {
        sorted = true;

        for (let i = 0; i < nums.length - 1; i += 1) {
            if (nums[i] > nums[i + 1]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums [i]];
                sorted = false;
            }
        }
    }
    return nums;
}


array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

console.log(bubbleSort(array))