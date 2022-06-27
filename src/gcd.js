/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
// Wait for user's response.
// eslint-disable-next-line import/prefer-default-export

const getNumberOne = () => {
    const num = Math.round(Math.random() * 100);
    return num;
  };

const getNumberTwo = () => {
    const num = Math.round(Math.random() * 100);
    return num;
  };


const gsd = (numberOne, numberTwo) => {
    if(!numberTwo){
     return numberOne;
      }
     return gsd(numberTwo, numberOne % numberTwo)
     };

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const gcd = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    console.log('Find the greatest common divisor of given numbers.');
    let roundsCount = 3;
    let sumOfAnswers = 0;

    for (let i = 1; i <= roundsCount; i += 1) {
        const numberOne =  getNumberOne();
        const numberTwo = getNumberTwo();

        const question = `${numberOne}  ${numberTwo}`;

        console.log('Question: ' + question);
        const userAnswer = readlineSync.question('Your answer: ');

        const correctAnswer = gsd(numberOne, numberTwo);

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
};