// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';
import { expect, jest, test } from '@jest/globals';

const relativePath = '/users';
const baseUrl = 'https://jsonplaceholder.typicode.com';
const createConfig = {
  baseURL: baseUrl,
};
jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('throttledGetDataFromApi', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    //   jest.spyOn(axios, 'create');
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
    mockedAxios.mockClear();
  });

  test('should create instance with provided base url', async () => {
    // Write your test here
    const mockedGet = jest.fn(() => Promise.resolve({ data: 'Returned data' }));
    (mockedAxios.create as jest.Mock).mockImplementation((baseURL) => {
      return {
        baseURL: baseURL,
        get: mockedGet,
      };
    });
    await throttledGetDataFromApi(relativePath);
    jest.clearAllTimers();
    expect(mockedAxios.create).toHaveBeenCalled();
    expect(mockedAxios.create).toHaveBeenLastCalledWith(createConfig);
  });

  test('should perform request to correct provided url', async () => {
    // Write your test here
    // jest.mock('axios');
    // const mockedAxios = jest.mocked(axios);
    const mockedGet = jest.fn(() => Promise.resolve({ data: 'Returned data' }));
    (mockedAxios.create as jest.Mock).mockImplementation((baseURL) => {
      return {
        baseURL: baseURL,
        get: mockedGet,
      };
    });
    await throttledGetDataFromApi(relativePath);
    jest.clearAllTimers();
    expect(mockedGet).toHaveBeenCalled();
  });

  test('should return response data', async () => {
    // Write your test here
  });
});
