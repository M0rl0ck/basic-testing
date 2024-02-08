// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    // Write your test here
    let value = await resolveValue('Test string');
    expect(value).toBe('Test string');
    value = await resolveValue(2314);
    expect(value).toBe(2314);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    // Write your test here
    const error_message = 'Test message.';
    const err = new Error(error_message);
    expect(() => throwError(error_message)).toThrow(err);
  });

  test('should throw error with default message if message is not provided', () => {
    // Write your test here
    const err = new Error('Oops!');
    expect(() => throwError()).toThrow(err);
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    // Write your test here
    expect(() => throwCustomError()).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    // Write your test here
    // expect.assertions(1);
    await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
  });
});
