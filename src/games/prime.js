/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
// Wait for user's response.
// eslint-disable-next-line import/prefer-default-export

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrimeNumber = (n) => {
    //n = getRandomNumber(1, 1000);

    if(n < 2) {
      return 'no';
    } else if (n === 2) {
      return 'yes';
    }
    
    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
      if(n % i === 0){
        return 'no';
      }
      i++
    }
    return 'yes';
  };

export const primeGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let roundsCount = 3;
  let sumOfAnswers = 0;

  for (let i = 1; i <= roundsCount; i += 1) {
    const number =  getRandomNumber(1, 1000);
    console.log('Question: ', number);
    const userAnswer = readlineSync.question('Your answer: ');
    const oppositeAnswer = (userAnswer === 'yes' ? 'no' : 'yes');
    const correctAnswer = isPrimeNumber(number);
 
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