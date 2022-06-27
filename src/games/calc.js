import mainLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'What is the result of the expression?';

const getNumberOne = () => {
  const num = Math.round(Math.random() * 100);
  return num;
};

const getNumberTwo = () => {
  const num = Math.round(Math.random() * 100);
  return num;
};

const mathOperators = ['+', '-', '*'];
const calculate = (numberOne, numberTwo, operator) => {
  switch (operator) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      return 'Unknown symbol';
  }
};

function gameQaA() {
  const numberOne = getNumberOne();
  const numberTwo = getNumberTwo();

  const randomOperator = mathOperators[getRandomNumber(0, mathOperators.length - 1)];
  const question = `${numberOne} ${randomOperator} ${numberTwo}`;
  const correctAnswer = calculate(numberOne, numberTwo, randomOperator).toString();

  return [question, correctAnswer];
}

const calcGame = () => mainLogic(rules, gameQaA);

export default calcGame;
