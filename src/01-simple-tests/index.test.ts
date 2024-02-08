// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 2, b: 7, action: Action.Add })).toBe(9);
    expect(simpleCalculator({ a: 0, b: 255, action: Action.Add })).toBe(255);
    expect(simpleCalculator({ a: -12, b: 37, action: Action.Add })).toBe(25);
    expect(simpleCalculator({ a: -7, b: 3, action: Action.Add })).toBe(-4);
    expect(simpleCalculator({ a: -5, b: -8, action: Action.Add })).toBe(-13);
    expect(simpleCalculator({ a: -5, b: 8, action: Action.Add })).toBe(3);
    // expect(simpleCalculator({ a: 1.0001, b: 2.0001, action: Action.Add })).toBe(
    //   3.0002,
    // );
  });

  test('should subtract two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 7, b: 7, action: Action.Subtract })).toBe(0);
    expect(simpleCalculator({ a: 7, b: 0, action: Action.Subtract })).toBe(7);
    expect(simpleCalculator({ a: 22, b: 10, action: Action.Subtract })).toBe(
      12,
    );
    expect(simpleCalculator({ a: 22, b: -10, action: Action.Subtract })).toBe(
      32,
    );
    expect(simpleCalculator({ a: -20, b: 7, action: Action.Subtract })).toBe(
      -27,
    );
    expect(simpleCalculator({ a: -2, b: -7, action: Action.Subtract })).toBe(5);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 21, b: 17, action: Action.Multiply })).toBe(
      357,
    );
    expect(simpleCalculator({ a: 12, b: -7, action: Action.Multiply })).toBe(
      -84,
    );
    expect(simpleCalculator({ a: -3, b: 18, action: Action.Multiply })).toBe(
      -54,
    );
    expect(simpleCalculator({ a: 214, b: 0, action: Action.Multiply })).toBe(0);
    expect(simpleCalculator({ a: 0, b: 7, action: Action.Multiply })).toBe(0);
    expect(simpleCalculator({ a: -21, b: -17, action: Action.Multiply })).toBe(
      357,
    );
  });

  test('should divide two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 21, b: 7, action: Action.Divide })).toBe(3);
    expect(simpleCalculator({ a: 3, b: 30, action: Action.Divide })).toBe(0.1);
    expect(simpleCalculator({ a: 21, b: -7, action: Action.Divide })).toBe(-3);
    expect(simpleCalculator({ a: -21, b: 7, action: Action.Divide })).toBe(-3);
    expect(simpleCalculator({ a: -21, b: -7, action: Action.Divide })).toBe(3);
    expect(simpleCalculator({ a: 0, b: 232, action: Action.Divide })).toBe(0);
    // expect(simpleCalculator({ a: 1, b: 0, action: Action.Divide })).toBe(
    //   Infinity,
    // );
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 7, b: 2, action: Action.Exponentiate })).toBe(
      49,
    );
    expect(simpleCalculator({ a: 12, b: 3, action: Action.Exponentiate })).toBe(
      1728,
    );
    expect(
      simpleCalculator({ a: 9, b: 0.5, action: Action.Exponentiate }),
    ).toBe(3);
    expect(simpleCalculator({ a: 2, b: -2, action: Action.Exponentiate })).toBe(
      0.25,
    );
    expect(simpleCalculator({ a: -7, b: 2, action: Action.Exponentiate })).toBe(
      49,
    );
    expect(
      simpleCalculator({ a: -12, b: 3, action: Action.Exponentiate }),
    ).toBe(-1728);
    expect(simpleCalculator({ a: 0, b: 2, action: Action.Exponentiate })).toBe(
      0,
    );
    expect(simpleCalculator({ a: 23, b: 0, action: Action.Exponentiate })).toBe(
      1,
    );
    expect(simpleCalculator({ a: 0, b: 0, action: Action.Exponentiate })).toBe(
      1,
    );
  });

  test('should return null for invalid action', () => {
    // Write your test here
    expect(
      simpleCalculator({ a: 21, b: 7, action: 'Action.Divide' }),
    ).toBeNull();
    expect(simpleCalculator({ a: 21, b: 7, action: 22 })).toBeNull();
    expect(simpleCalculator({ a: 21, b: 7, action: null })).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    expect(
      simpleCalculator({ a: '21', b: 7, action: Action.Divide }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: '21', b: '7', action: Action.Divide }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: 21, b: '7', action: Action.Divide }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: 21, b: undefined, action: Action.Divide }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: 21, b: false, action: Action.Divide }),
    ).toBeNull();
    expect(
      simpleCalculator({ a: 21, b: null, action: Action.Divide }),
    ).toBeNull();
  });
});
