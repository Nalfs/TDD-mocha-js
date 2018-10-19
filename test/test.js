const app = require ('../src/app.js');
const assert = require('assert');


        it('should return true', () => {
            assert.equal(true, true);
          });

          it('correctly calculates the sum of 1 and 3', () => {
            assert.equal(app.add(1, 3), 4);
          });
          it('correctly calculates the sum of 1 and 3', () => {
            assert.equal(app.add(1, 3), 4);
          });

          it('correctly calculates the sum of -1 and -1', () => {
            assert.equal(app.add(-1, -1), -2);
          });

          it('correctly calculates the difference of 33 and 3', () => {
            assert.equal(app.subtract(33, 3), 30);
          });

          it('correctly calculates the product of 12 and 12', () => {
            assert.equal(app.multiply(12, 12), 144);
          });

          it('correctly calculates the quotient of 10 and 2', () => {
            assert.equal(app.divide(10, 2), 5);
          });
          it('indicates failure when a string is used instead of a number', () => {
            assert.equal(app.validateNumbers('sammy', 5), false);
          });

          it('indicates failure when two strings is used instead of numbers', () => {
            assert.equal(app.validateNumbers('sammy', 'sammy'), false);
          });

          it('successfully runs when two numbers are used', () => {
            assert.equal(app.validateNumbers(5, 5), true);
          });