const app = require ('./app.js');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
Calc.js

Welcome to the Node.js Calculator app!
Version: 2.1.0.

Usage: The user will be prompted for two numbers,
then asked to select their operation of choice.
`);

rl.question('Enter the first number: ',(x) => {
    rl.question('Enter the second number: ', (y) => {
        rl.question(`
        Please select from the following options:
        [1] Addition (+)
        [2] Subtraction (-)
        [3] Multiplication (*)
        [4] Division (/)
        Enter your choice: `, (choice) => {
            if (!app.validateNumbers(x, y)) {
                console.log('Only numbers are allowed! Please restart the program.');
              } else {
                  switch(choice){
                      case '1':
                      console.log(`The sum of ${x} and ${y} is ${app.add(x, y)}.`);
                      break;
                      case '2':
                      console.log(`The difference of ${x} and ${y} is ${app.subtract(x, y)}.`);
                      break;
                      case '3':
                      console.log(`The product of ${x} and ${y} is ${app.multiply(x, y)}.`);
                      break;
                      case'4':
                      console.log(`The diffrence between ${x} and ${y} is ${app.divide(x, y)}.`)
                      default:
                      console.log('Please restart the program and select a number between 1 and 4');
                      break;

                  }
              }
            rl.close();
        });
    });
});


