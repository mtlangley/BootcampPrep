/***********************************************************************
Write a function `adults(people)` that takes in an array of person
objects. The function should return an array containing the names of
those who have an age of 18 or higher.

Example:

var ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];

adults(ppl); // => [ 'John', 'Jane' ]
***********************************************************************/

function adults(people) {
  let arr = []
  for (let i = 0; i < people.length; i++) {
    if (people[i]['age'] >= 18) {
      arr.push(people[i]['name'])
    }
  }
  return arr
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = adults;
