import {jest} from '@jest/globals';
import { fibonacci } from "../0-fibonacci/fibonacci";

test('should handle when n=0"', () => {
  expect(fibonacci(0)).toEqual(0);
});

test('should handle when n=1"', () => {
  expect(fibonacci(1)).toEqual(1);
});

test('should handle when n=2"', () => {
  expect(fibonacci(2)).toEqual(1);
});

test('should handle when n=20"', () => {
  expect(fibonacci(20)).toEqual(6765);
});

test('should handle when n=73"', () => {
  expect(fibonacci(73)).toEqual(806515533049393);
});