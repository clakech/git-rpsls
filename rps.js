'use strict';

var colors = require('colors');

var rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var LOOSE = { msg: 'You loose :-(', color: 'red' },
    WIN = { msg: 'You win ;-)', color: 'green' },
    DRAW = { msg: 'No winner :-|, try again...', color: 'grey' };

var possibleChoices = ['rock', 'paper', 'scissors'],
    winTable = {
        rock: { rock: DRAW, paper: LOOSE, scissors: WIN },
        paper: { rock: WIN, paper: DRAW, scissors: LOOSE },
        scissors: { rock: LOOSE, paper: WIN, scissors: DRAW }
    };

function getRandom() {
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

rl.question('\nRock ? Paper ? Scissors ?\n\nYour choice     : ', function (answer) {

    answer = answer.toLowerCase();
    var idx = possibleChoices.indexOf(answer);

    if (idx !== -1) {
        var computerAnswer = getRandom();

        console.log('Computer choice : ' + computerAnswer + '\n');

        var result = winTable[answer][computerAnswer];
        console.log(colors[result.color](result.msg + '\n'));
    } else {
        console.error('\nIncorrect choice !');
    }

    rl.close();
});