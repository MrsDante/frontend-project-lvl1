/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
// Wait for user's response.
// eslint-disable-next-line import/prefer-default-export

const getQuestion = () => {
    const num = Math.round(Math.random() * 100);
    return num;
  };


export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let roundsCount = 3;
  let sumOfAnswers = 0;

    for (let i = 1; i <= roundsCount; i += 1) {
      const number =  getQuestion();
      console.log('Question: ', number);
      const userAnswer = readlineSync.question('Your answer: ');
      const oppositeAnswer = (userAnswer === 'yes' ? 'no' : 'yes');
   
      if (((number % 2 === 0) && (userAnswer === 'yes')) || ((number % 2 !== 0) && (userAnswer === 'no'))) {
        sumOfAnswers += 1;
        console.log('Correct!');
      } else if (((number % 2 === 0) && (userAnswer === 'no')) || ((number % 2 !== 0) && (userAnswer === 'yes')) || ((userAnswer != 'yes') && (userAnswer != 'no'))){
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${oppositeAnswer}'. Let's try again, '${userName}!'`);
        break;
      }
      
    }
   if(sumOfAnswers === 3){
    console.log(`Congratulations, ${userName}!`);
   }
  };