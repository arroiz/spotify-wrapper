/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('Main', () => {
  it('should return Fizz when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz`when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('should return the number when non-multiple 3 or 5', () => {
    expect(FizzBuzz(11)).to.be.equal(11);
  });
});
