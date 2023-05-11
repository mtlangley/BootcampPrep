// Nested loops & multidimensional arrays

// function everycombination() {
//     for (let i = 0; i < 3; i++) {
//         console.log('=======')
//         console.log(`Outer loop: i: ${i}`)
//         for (let j = i + 1; j < 5; j++) {
//             console.log(`inner loop: j: ${j}`)
//         }
//         console.log('=======')
//     }
// }
// function everycombination() {
//     for (let i = 0; i < 5; i++) {
//         for (let j = i + 1; j < 5; j++) {
//             console.log(`Outer: ${i} Inner: ${j}`)
//         }
//     }
// }
// everycombination()

// let arr1 = [0, 1, 2, 3, 4, 5, 6]
// let target1 = 6
// function twoSum(arr, target) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         let num1 = arr[i]
//         for(let j = i + 1; j < arr.length; j++) {
//             let num2 = arr[j]
//             let sum = num1 + num2
//             if (sum === target) {
//                 result.push([i, j])
//             }
//         }
//     }
//     return result
// }
// console.log(twoSum(arr1, target1))

let twoDArray = [
    [11, 3, 5],
    [9, 7, 6],
    [100, 23, 31]
]
console.log(twoDArray[2][0])

// function decompressArray(array) {
//     let result = []
//     for (let i = 0; i < array.length; i++) {
//         let subArr = array[i]
//         for (j = 0; j < subArr.length; j++) {
//             let element = subArr[j]
//             result.push(element)
//         }
//     }
//     return result
// }
// function decompressArray(array) {
//     let result = []
//     for (let i = 0; i < array.length; i++) {
//         let subArr = array[i]
//         result.push(...subArr)
//     }
//     return result
// }
// console.log(decompressArray(twoDArray))

let teamOfPokemon = [
    {name: 'Charizard', nickname: 'Charlie', shiny: true, personality: 'clumsy', hobbies: ['smoking', 'bbq']},
    {name: 'Darkrai', nickname: 'Ghost', shiny: true, personality: 'lazy', hobbies: ['scaring people']}
]
console.log(teamOfPokemon)

function attributeFinder(arr,target) {
    let hobbies = []
    for (let i = 0; i < arr.length; i++) {
        let pokemon = arr[i]
        hobbies.push(pokemon[target])
    }
    return hobbies
}

console.log(attributeFinder(teamOfPokemon, 'attacks'))