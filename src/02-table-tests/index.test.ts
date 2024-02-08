// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 2, b: 7, action: Action.Add, expected: 9 },
  { a: 0, b: 255, action: Action.Add, expected: 255 },
  { a: -12, b: 37, action: Action.Add, expected: 25 },
  { a: -7, b: 3, action: Action.Add, expected: -4 },
  { a: -5, b: -8, action: Action.Add, expected: -13 },
  { a: -5, b: 8, action: Action.Add, expected: 3 },
  { a: 7, b: 7, action: Action.Subtract, expected: 0 },
  { a: 7, b: 0, action: Action.Subtract, expected: 7 },
  { a: 22, b: 10, action: Action.Subtract, expected: 12 },
  { a: 22, b: -10, action: Action.Subtract, expected: 32 },
  { a: -20, b: 7, action: Action.Subtract, expected: -27 },
  { a: -2, b: -7, action: Action.Subtract, expected: 5 },
  { a: 21, b: 17, action: Action.Multiply, expected: 357 },
  { a: 12, b: -7, action: Action.Multiply, expected: -84 },
  { a: -3, b: 18, action: Action.Multiply, expected: -54 },
  { a: 214, b: 0, action: Action.Multiply, expected: 0 },
  { a: 0, b: 7, action: Action.Multiply, expected: 0 },
  { a: -21, b: -17, action: Action.Multiply, expected: 357 },
  { a: 21, b: 7, action: Action.Divide, expected: 3 },
  { a: 3, b: 30, action: Action.Divide, expected: 0.1 },
  { a: 21, b: -7, action: Action.Divide, expected: -3 },
  { a: -21, b: 7, action: Action.Divide, expected: -3 },
  { a: -21, b: -7, action: Action.Divide, expected: 3 },
  { a: 0, b: 232, action: Action.Divide, expected: 0 },
  { a: 7, b: 2, action: Action.Exponentiate, expected: 49 },
  { a: 12, b: 3, action: Action.Exponentiate, expected: 1728 },
  { a: 9, b: 0.5, action: Action.Exponentiate, expected: 3 },
  { a: 2, b: -2, action: Action.Exponentiate, expected: 0.25 },
  { a: -7, b: 2, action: Action.Exponentiate, expected: 49 },
  { a: -12, b: 3, action: Action.Exponentiate, expected: -1728 },
  { a: 0, b: 2, action: Action.Exponentiate, expected: 0 },
  { a: 23, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: 0, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: 21, b: 7, action: 'Action.Divide', expected: null },
  { a: 21, b: 7, action: 22, expected: null },
  { a: 21, b: 7, action: null, expected: null },
  { a: '21', b: 7, action: Action.Divide, expected: null },
  { a: '21', b: '7', action: Action.Divide, expected: null },
  { a: 21, b: '7', action: Action.Divide, expected: null },
  { a: 21, b: undefined, action: Action.Divide, expected: null },
  { a: 21, b: false, action: Action.Divide, expected: null },
  { a: 21, b: null, action: Action.Divide, expected: null },
];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test.each(testCases)(
    'should be return calculated result or null if parameters are wrong',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
  // Consider to use Jest table tests API to test all cases above
});
