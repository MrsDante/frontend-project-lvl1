/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
// Wait for user's response.
// eslint-disable-next-line import/prefer-default-export

const generateProgression = (startNumber, progressionStep, progressionLength) => {
    const progressionArray = [];
    for (let i = 0; i < progressionLength; i += 1) {
      progressionArray.push(startNumber + (progressionStep * i));
    }
    return progressionArray;
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const progression = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    console.log('What number is missing in the progression?');
    let roundsCount = 3;
    let sumOfAnswers = 0;

    for (let i = 1; i <= roundsCount; i += 1) {
        const startNumber = getRandomNumber(1, 10);
        const progressionStep = getRandomNumber(1, 10);
        const progressionLength = getRandomNumber(5, 10);

        const progressionGame = generateProgression(startNumber, progressionStep, progressionLength);

        const missingNumber = getRandomNumber(0, progressionLength - 1);
        const correctAnswer = String(progressionGame[missingNumber]);

        progressionGame[missingNumber] = '..';

        const question = progressionGame.join(' ');

        console.log('Question: ' + question);
        const userAnswer = readlineSync.question('Your answer: ');

        if(userAnswer == correctAnswer){
            sumOfAnswers += 1;
            console.log('Correct!');
          }else{
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, '${userName}!'`);
          break;
        }

    }
    if(sumOfAnswers === 3){
        console.log(`Congratulations, ${userName}!`);
    }

}