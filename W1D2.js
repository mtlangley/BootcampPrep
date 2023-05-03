// Notes + code for Bootcamp Prep, W1D2
// function functionName(para1, para2) {
//     console.log(para1 + para2 + " " + "inside function");
//     return 'returning out of function: ' + (para1 + para2);
//     console.log('Hello');
// }

// console.log(functionName(5000, 26));

// function average(num1, num2) {
//     let sum = num1 + num2;
//     return sum / 2;
// }

// console.log(average(10, 15));

// console.log(average);
// console.log(average(1, 2));


// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isOdd(2);    // => false
// isOdd(5);    // => true
// isOdd(-17);  // => true

// function isOdd(num) {
//     if (num % 2 === 1) {
//         return true;
//     } else {
//         return false;
//     }
//   }

// function isOdd(num) {
//     return (num % 2 === 1);
// }

// console.log(isOdd(1));
//   console.log(isOdd(2));
//   console.log(isOdd(5));
//   console.log(isOdd(-17));
//   console.log(isOdd(4.5));

// Write a function `plusFive` that takes in a number as an argument and returns
// the sum of that number and 5.
//
// Examples:
// plusFive(10);  // => 15
// plusFive(2);   // => 7
// plusFive(-8);  // => -3
//

// function plusFive(num) {
//     return num + 5;
//   }

//   console.log(plusFive(10));
//   console.log(plusFive(2));
//   console.log(plusFive(-8));

// Write a function `threeOrSeven` that takes in a number and returns `true`
// if the number is divisible by either 3 or 7 and `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
//
// Examples:
// threeOrSeven(3);   // => true
// threeOrSeven(42);  // => true
// threeOrSeven(8);   // => false
//
// function threeOrSeven(num) {
//     if (num % 3 === 0 || num % 7 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
function threeOrSeven(num) {
    return (num % 3 === 0 || num % 7 === 0);
}
// console.log(threeOrSeven(3));
// console.log(threeOrSeven(42));
// console.log(threeOrSeven(8));

// Write a function `hello` that takes in a string and prints out "Hello, " followed
// by the string. HINT: this function doesn't need to return anything, it should
// just print using console.log
//
// Examples:
// hello("child");    // prints "Hello, child"
// hello("Anthony");  // prints "Hello, Anthony"
//
// function hello(str) {
//     console.log('Hello, ' + str);
//   }
//   hello('child');
//   hello('Anthony');

  // Write a function `yell` that takes in a string and returns a "yelled" version
// of that string.
//
// Examples:
// yell("I want to go to the store"); // => "I WANT TO GO TO THE STORE!!!"
// yell("Time to program"); // => "TIME TO PROGRAM!!!"

// function yell(string) {
//     return string.toUpperCase() + '!!!';
//   }

//   console.log(yell('I want to go to the store'));
//   console.log(yell('Time to program'));

  // Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.
//
// Examples:
// whisper("Hey Anthony"); // => "...hey anthony..."
// whisper("YEA! that was fun"); // => "...yea! that was fun..."

// function whisper(string) {
//     return '...' + string.toLowerCase() + '...';
//   }

// console.log(whisper('Hey Anthony'));
// console.log(whisper('YEA! that was fun'));

// Write a function `isSubstring` that takes in two strings, `searchString` and
// `subString`. The function should return `true` if `subString` is a part of the
// `searchString`, `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isSubstring("The cat went to the store", "he cat went"); // => true
// isSubstring("Time to program", "time"); // => true
// isSubstring("Jump for joy", "joys"); // => false

// function isSubstring(searchString, subString) {
//     if (searchString.toLowerCase().indexOf(subString.toLowerCase()) === -1) {
//         return false;
//     } else {
//         return true;
//     }
//   }

function isSubstring(searchString, subString) {
    return searchString.toLowerCase().indexOf(subString.toLowerCase()) !== -1;
}
console.log(isSubstring('The cat went to the store', 'he cat went'));
console.log(isSubstring('Time to program', 'time'));
console.log(isSubstring('Jump for joy', 'joys'));

// Write a function `echo` that takes in a string and returns that string "echo-ized".
//
// Examples:
// echo("Mom!"); // => "MOM! ... Mom! ... mom!"
// echo("hey"); // => "HEY ... hey ... hey"
// echo("JUMp"); // => "JUMP ... JUMp ... jump"
//
// function echo(string) {
//     let ellipsis = ' ... '
//     return string.toUpperCase() + ellipsis + string + ellipsis + string.toLowerCase();
//   }

//   console.log(echo('Mom!'));
//   console.log(echo('hey'));
//   console.log(echo('JUMp'));

  // Write a function `isEven` that takes in a number and returns `true` if the number
// is even, `false` otherwise. Write `isEven` by using the `isOdd` function you
// made previously. HINT: you can call `isOdd` from within `isEven`.
//
// Examples:
// isEven(2); // => true
// isEven(5); // => false
function isEven(num) {
    return !isOdd(num);
  }

// console.log(isEven(2));
// console.log(isEven(5));

// Write a function `averageOfFour(num1, num2, num3, num4)` that takes in four
// numbers. The function should return the average of all of the numbers.
//
// Examples:
//
// averageOfFour(10, 10, 15, 5); // => 10
// averageOfFour(3, 10, 11, 4); // => 7
// averageOfFour(1, 2, 3, 4); // => 2.5

function averagefFour(num1, num2, num3, num4) {
    sum = num1 + num2 + num3 + num4;
    return sum / 4;
}
// console.log(averageOfFour(10, 10, 15, 5));
// console.log(averageOfFour(3, 10, 11, 4));
// console.log(averageOfFour(1, 2, 3, 4));

// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }
// console.log(sayHello('bootcamp prep'));

// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }
// console.log(sayHello('bootcamp prep'));

// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }

// console.log(sayHello('Michael Langley'));

// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }

// console.log(sayHello('Nyamekye Coleman'));

// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }

// console.log(sayHello('Patrick Langley'));

// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }
// console.log(sayHello('Karen Langley'));

// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }
// console.log(sayHello('Edsel Langley'));

// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }
// console.log(sayHello('Irene Langley'));

// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }

// console.log(sayHello('David Deneroff'));

// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }

// console.log(sayHello('Dylan Riessen'));

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num > 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }
// console.log(checkNumber(5));

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }
// console.log(checkNumber(0));

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }

// console.log(checkNumber(-19));

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }

// console.log(checkNumber(9));

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }
// console.log(checkNumber(0));

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }
// console.log(checkNumber(-45));

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }

// console.log(checkNumber(28));

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }
// console.log(checkNumber(0));

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }
// console.log(checkNumber(-33));

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }
// console.log(checkNumber(100));

