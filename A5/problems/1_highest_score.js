/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/

function highestScore(students) {
  let highest = []
  let score = null

  for (let i = 0; i < students.length; i++) {
    let student = students[i]

    if (student.score > score) {
      score = student.score
      highest = [student.name, student.id]
    }
  }
  
  let initials = ''
  let name = highest[0].split(' ')

  for (let i = 0; i < name.length; i++) {
    initials += name[i][0]
  }
  
  initials += highest[1]

  return initials

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
