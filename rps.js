'use strict';

var colors = require('colors');

var rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var LOOSE = { msg: 'You loose :-(', color: 'red' },
    WIN = { msg: 'You win ;-)', color: 'green' },
    DRAW = { msg: 'No winner :-|, try again...', color: 'grey' };

var possibleChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'],
    winTable = {
        rock: { rock: DRAW, paper: LOOSE, scissors: WIN, lizard: WIN, spock: LOOSE },
        paper: { rock: WIN, paper: DRAW, scissors: LOOSE, lizard: LOOSE, spock: WIN },
        scissors: { rock: LOOSE, paper: WIN, scissors: DRAW, lizard: WIN, spock: LOOSE },
        lizard: { rock: LOOSE, paper: WIN, scissors: LOOSE, lizard: DRAW, spock: WIN },
        spock: { rock: WIN, paper: LOOSE, scissors: WIN, lizard: DRAW, spock: WIN }
    };

function getRandomComputerAnswer() {
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

rl.question('\nRock ? Paper ? Scissors ? Lizard ? Spock ?\n\nYour choice     : ', function (answer) {

    answer = answer.toLowerCase();
    var idx = possibleChoices.indexOf(answer);

    if (idx !== -1) {
        var computerAnswer = getRandomComputerAnswer();

        console.log('Computer choice : ' + computerAnswer + '\n');

        var result = winTable[answer][computerAnswer];
        console.log(colors[result.color](result.msg + '\n'));
    } else {
        console.error('\nIncorrect choice !');
    }

    rl.close();
});