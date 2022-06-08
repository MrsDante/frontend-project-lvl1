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

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

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


export const calcGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  
  console.log('What is the result of the expression?');
  let roundsCount = 3;
  let sumOfAnswers = 0;

 
for (let i = 1; i <= roundsCount; i += 1) {
   const numberOne =  getNumberOne();
   const numberTwo = getNumberTwo();

   const randomOperator = mathOperators[getRandomNumber(0, mathOperators.length - 1)];
   const question = `${numberOne} ${randomOperator} ${numberTwo}`;

   console.log('Question: ' + question);
   const userAnswer = readlineSync.question('Your answer: ');
      
   const correctAnswer = calculate(numberOne, numberTwo, randomOperator).toString();

      if(userAnswer == correctAnswer){
        sumOfAnswers += 1;
        console.log('Correct!');
      }else{
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, '${userName}!'`);
      break;
    }
      
      /*return [question, correctAnswer];*/
  
}
if(sumOfAnswers === 3){
    console.log(`Congratulations, ${userName}!`);
}

};
