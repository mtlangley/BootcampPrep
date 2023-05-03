let coffeeCup = 'full';

const coffeeCupSwitch = function() {
    if (coffeeCup === 'full') {
        coffeeCup = 'empty';
    } else {
        coffeeCup = 'full';
    }
}
console.log(coffeeCup);
coffeeCupSwitch();
console.log(coffeeCup);
coffeeCupSwitch();
console.log(coffeeCup);