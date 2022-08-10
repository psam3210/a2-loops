import {jest} from '@jest/globals';
import { fizzBuzz } from './../1-fizzbuzz/fizzbuzz';

test('should handle n=2 correctly', () => {
  expect(fizzBuzz(2)).toEqual([1,2]);
});

test('should handle n=3 correctly', () => {
  expect(fizzBuzz(3)).toEqual([1,2,'Fizz']);
});

test('should handle n=5 correctly', () => {
  expect(fizzBuzz(5)).toEqual([1,2,'Fizz',4,'Buzz']);
});
  
test('should handle n=22 correctly', () => {
  expect(fizzBuzz(22)).toEqual([1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz',16,17,'Fizz',19,'Buzz','Fizz',22]);
});