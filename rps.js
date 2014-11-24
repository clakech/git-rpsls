'use strict';

var rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var LOOSE = 'You loose :-(',
    WIN = 'You win ;-)',
    DRAW = 'No winner :-|, try again...';

var possibleChoices = ['rock', 'paper', 'scissors'],
    winTable = {
        rock: { rock: DRAW, paper: LOOSE, scissors: WIN },
        paper: { rock: WIN, paper: DRAW, scissors: LOOSE },
        scissors: { rock: LOOSE, paper: WIN, scissors: DRAW }
    };

rl.question('\nRock ? Paper ? Scissors ?\n\nYour choice     : ', function (answer) {

    answer = answer.toLowerCase();
    var idx = possibleChoices.indexOf(answer);

    if (idx !== -1) {
        var computerAnswer = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];

        console.log('Computer choice : ' + computerAnswer + '\n');
        console.log(winTable[answer][computerAnswer] + '\n');
    } else {
        console.error('\nIncorrect choice !');
    }

    rl.close();
});