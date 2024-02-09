// Uncomment the code below and write your tests
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';
import { expect, jest, test } from '@jest/globals';
jest.mock('fs');
jest.mock('fs/promises');
jest.mock('path');
import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import path, { join } from 'path';

let callback: jest.Mock;
const delay = 1350;

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    jest.spyOn(global, 'setTimeout');
    callback = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should set timeout with provided callback and timeout', () => {
    // Write your test here

    doStuffByTimeout(callback, delay);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(callback, delay);
  });

  test('should call callback only after timeout', () => {
    // Write your test here
    doStuffByTimeout(callback, delay);
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(delay);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  beforeEach(() => {
    jest.spyOn(global, 'setInterval');
    callback = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should set interval with provided callback and timeout', () => {
    // Write your test here
    doStuffByInterval(callback, delay);
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(callback, delay);
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
    doStuffByInterval(callback, delay);
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(delay * 10);
    expect(callback).toHaveBeenCalledTimes(10);
  });
});

describe('readFileAsynchronously', () => {
  const pathToFile = 'directory/path';
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should call join with pathToFile', async () => {
    // Write your test here
    const mockedExistsSync = existsSync as jest.Mocked<typeof existsSync>;
    mockedExistsSync.mockReturnValue(false);
    jest.spyOn(path, 'join');
    await readFileAsynchronously(pathToFile);
    expect(join).lastCalledWith(__dirname, pathToFile);
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
    const mockedExistsSync = existsSync as jest.Mocked<typeof existsSync>;
    mockedExistsSync.mockReturnValue(false);
    expect(await readFileAsynchronously(pathToFile)).toBeNull();
  });

  test('should return file content if file exists', async () => {
    // Write your test here
    const content = 'This is content from fake file.';
    const mockedExistsSync = existsSync as jest.Mocked<typeof existsSync>;
    const mockedReadFile = readFile as jest.Mocked<typeof readFile>;
    mockedExistsSync.mockReturnValue(true);
    mockedReadFile.mockReturnValue(new Promise((res) => res(content)));
    expect(await readFileAsynchronously(pathToFile)).toBe(content);
  });
});
