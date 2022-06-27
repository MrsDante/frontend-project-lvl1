import mainLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = (startNumber, progressionStep, progressionLength) => {
  const progressionArray = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progressionArray.push(startNumber + (progressionStep * i));
  }
  return progressionArray;
};

function gameQaA() {
  const startNumber = getRandomNumber(1, 10);
  const progressionStep = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 10);
  const progressionGame = generateProgression(startNumber, progressionStep, progressionLength);
  const missingNumber = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = String(progressionGame[missingNumber]);

  progressionGame[missingNumber] = '..';

  const question = progressionGame.join(' ');

  return [question, correctAnswer];
}

const progression = () => mainLogic(gameRules, gameQaA);

export default progression;
