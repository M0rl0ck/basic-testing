// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';
import { expect, jest, test } from '@jest/globals';

const relativePath = '/users';
const baseUrl = 'https://jsonplaceholder.typicode.com';
const createConfig = {
  baseURL: baseUrl,
};
const mockedReturnData = 'Returned data';
jest.mock('axios');
const mockedAxios = jest.mocked(axios);
let mockedGet: jest.Mock<
  () => Promise<{
    data: string;
  }>
>;

describe('throttledGetDataFromApi', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    mockedGet = jest.fn(() => Promise.resolve({ data: mockedReturnData }));
    (mockedAxios.create as jest.Mock).mockImplementation((baseURL) => {
      return {
        baseURL: baseURL,
        get: mockedGet,
      };
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
    mockedAxios.mockClear();
  });

  test('should create instance with provided base url', async () => {
    await throttledGetDataFromApi(relativePath);
    jest.runAllTimers();
    expect(mockedAxios.create).toHaveBeenCalled();
    expect(mockedAxios.create).toHaveBeenLastCalledWith(createConfig);
  });

  test('should perform request to correct provided url', async () => {
    await throttledGetDataFromApi(relativePath);
    jest.runAllTimers();
    expect(mockedGet).toHaveBeenCalled();
    expect(mockedGet).toHaveBeenCalledWith(relativePath);
  });

  test('should return response data', async () => {
    // Write your test here
    const returnedData = await throttledGetDataFromApi(relativePath);
    jest.runAllTimers();
    expect(returnedData).toBe(mockedReturnData);
  });
});
