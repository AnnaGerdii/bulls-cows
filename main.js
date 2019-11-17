'use strict';

let cows = 0;
let bulls = 0;
let generatedNumber = genRandomNumber();
let message = '';
let enteredNumber = '';

function genRandomNumber() {
    let randomNumberStr = '';
    let randomDigit = '';

    for (let i = 0; i < 4; i++) {
        do {
            randomDigit = Math.floor(Math.random() * (10)).toString();
        }
        while (randomNumberStr.includes(randomDigit))
        {
            randomNumberStr += randomDigit;
        }
    }

    return randomNumberStr;
}

function compare(genRandomNumber, attempt) {
    for (let i = 0; i < 4; i++) {
        if (genRandomNumber[i] === attempt[i]) {
            bulls++;
        } else if (genRandomNumber.includes(attempt[i])) {
            cows++;
        }
    }
}

function game() {
    while (enteredNumber !== generatedNumber) {
        cows = 0;
        bulls = 0;
        enteredNumber = prompt("Enter a 4-digits number:\n" + message);

        compare(generatedNumber, enteredNumber);

        if (!enteredNumber || enteredNumber.length !== 4 || !/^\d+$/.test(enteredNumber)) {
            alert('Error! \u{1F625} Please enter a 4-digits number. All the digits must be unique.');

        } else if (/(.).*\1/.test(enteredNumber)) {
            alert('Error! \u{1F625} All the digits must be unique');

        } else if (enteredNumber === generatedNumber) {
            message += enteredNumber + ' ' + bulls + ' bull(s)' + " " + cows + " cow(s)\n" + 'Congratulations! You won! \u{1F60E}';
            alert(message);

        } else {
            message += enteredNumber + ' ' + bulls + ' bull(s)' + " " + cows + " cow(s)\n";
        }
    }
}

