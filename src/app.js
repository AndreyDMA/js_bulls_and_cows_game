'use strict';

const randomNumber = validNumber();
let userNumber = '';
let stats = `
            Try to guess number
`;

while (true) {
  userNumber = window.prompt(stats, '');

  if (userNumber === null) {
    break;
  }

  if (randomNumber === userNumber) {
    window.alert('YOU WIN!');
    break;
  }

  if (isValid(userNumber)) {
    bullsAndCows(randomNumber, userNumber);
  } else {
    window.alert('Enter valid number... (requiered four-digit number,'
      + ' digits must not repeat)');
  }
}

function isValid(number) {
  if (!isFinite(+number)) {
    return false;
  }

  if (number.length !== 4) {
    return false;
  }

  for (let i = 0; i < 3; i++) {
    for (let j = i + 1; j < 4; j++) {
      if (number.charAt(i) === number.charAt(j)) {
        return false;
      }
    }
  }

  return true;
}

function validNumber() {
  const max = 9876;
  const min = 1234;
  let number = '' + Math.floor(Math.random() * (max - min) + min);

  for (let i = 0; i < 3; i++) {
    for (let j = i + 1; j < 4; j++) {
      if ((number).charAt(i) === (number).charAt(j)) {
        number = validNumber();
      }
    }
  }

  return number;
}

function bullsAndCows(generatedNumber, enteredNumber) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (generatedNumber.charAt(i) === enteredNumber.charAt(j)) {
        if (i === j) {
          bulls++;
        } else {
          cows++;
        }
      }
    }
  }

  stats += `
    your try ${enteredNumber}          bulls: ${bulls}   cows: ${cows}`;

  return undefined;
}
