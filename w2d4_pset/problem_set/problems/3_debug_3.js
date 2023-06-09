// Debug this function below so it passes mocha

// Examples:
//
// var people = [
//   { happiness : 15},
//   { happiness : 13},
//   { happiness : 3},
//   { happiness : 20},
//   { happiness : 9},
//   { happiness : 7},
//   { happiness : 17},
//   { happiness : 1}
// ];
//
// isHappyGroup(people) //=> true;

function isHappy(person) {
  if (person.happiness > 5) {
    return true;
  }
  return false;
}

function isHappyGroup(group) {
  let amount = 0;

  for (let i = 0; i < group.length; i += 1) {
    let person = group[i];

    if (isHappy(person)) {
      amount += 1;
    }
  }

  if (amount > 5) {
    return true;
  }

  return false;
}

let people = [
  { happiness : 15},
  { happiness : 13},
  { happiness : 3},
  { happiness : 20},
  { happiness : 9},
  { happiness : 7},
  { happiness : 17},
  { happiness : 1}
];


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = isHappyGroup;
