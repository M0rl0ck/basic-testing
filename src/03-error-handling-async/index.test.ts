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
    let value = await resolveValue('Test string');
    expect(value).toBe('Test string');
    value = await resolveValue(2314);
    expect(value).toBe(2314);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const error_message = 'Test message.';
    const err = new Error(error_message);
    expect(() => throwError(error_message)).toThrow(err);
  });

  test('should throw error with default message if message is not provided', () => {
    const err = new Error('Oops!');
    expect(() => throwError()).toThrow(err);
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
  });
});
