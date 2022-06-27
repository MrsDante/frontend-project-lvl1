import getRandomNumber from '../getRandomNumber.js';
import mainLogic from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
return 'no';
};

function gameQaA() {
  const number = getRandomNumber(1, 1000);

  const question = `${number}`;

  const correctAnswer = isEvenNumber(number);

  return [question, correctAnswer];
}

const even = () => mainLogic(gameRules, gameQaA);

export default even;
