import getRandomNumber from '../getRandomNumber.js';
import mainLogic from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (n) => {
  if (n < 2) {
    return 'no';
  } else if (n === 2) {
    return 'yes';
  }
    
  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

function gameQaA() {
  const number = getRandomNumber(1, 1000);

  const question = `${number}`;

  const correctAnswer = isPrimeNumber(number);

  return [question, correctAnswer];
}

const primeGame = () => mainLogic(gameRules, gameQaA);

export default primeGame;