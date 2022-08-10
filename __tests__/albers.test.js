import {jest} from '@jest/globals';
import { squares } from '../2-albers/albers';

test('renders squares correctly', () => {
  expect(squares(500, 0)['width']).toEqual(500);
  expect(squares(500, 1)['width']).toEqual(375);
  expect(squares(500, 2)['width']).toEqual(281.25);
});

test('renders squares correctly with different widths', () => {
  expect(squares(250, 0)['width']).toEqual(250);
  expect(squares(1024, 1)['width']).toEqual(768);
  expect(squares(982, 2)['width']).toEqual(552.375);
  expect(squares(982, 99)['width']).toEqual(4.1992967280595126e-10);
});

test('square colors are unique', () => {
  expect(squares(500, 0)['color']).not.toEqual(squares(500, 1)['color']);
  expect(squares(500, 1)['color']).not.toEqual(squares(500, 2)['color']);
  expect(squares(500, 3)['color']).not.toEqual(squares(500, 4)['color']);
});

