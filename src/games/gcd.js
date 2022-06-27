import mainLogic from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getNumberOne = () => {
  const num = Math.round(Math.random() * 100);
  return num;
};

const getNumberTwo = () => {
  const num = Math.round(Math.random() * 100);
  return num;
};

const gsd = (numberOne, numberTwo) => {
  if (!numberTwo) {
    return numberOne;
  }
  return gsd(numberTwo, numberOne % numberTwo);
};

function gameQaA() {
  const numberOne = getNumberOne();
  const numberTwo = getNumberTwo();

  const question = `${numberOne} ${numberTwo}`;

  const correctAnswer = (gsd(numberOne, numberTwo)).toString();

  return [question, correctAnswer];
}

const gcd = () => mainLogic(gameRules, gameQaA);

export default gcd;
