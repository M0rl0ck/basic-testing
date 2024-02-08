// Uncomment the code below and write your tests
import { BankAccount, SynchronizationFailedError, getBankAccount } from '.';
import { expect, jest, test } from '@jest/globals';
import _ from 'lodash';
jest.unmock('lodash');

describe('BankAccount', () => {
  let account: BankAccount;
  const startMoney = 355;
  beforeEach(() => {
    account = getBankAccount(startMoney);
  });

  test('should create account with initial balance', () => {
    // Write your test here
    expect(account).toBeInstanceOf(BankAccount);
    expect(account.getBalance()).toBe(startMoney);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    expect(() => {
      account.withdraw(startMoney + 1);
    }).toThrow();
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    const newAccount = new BankAccount(0);
    expect(() => {
      account.transfer(startMoney + 1, newAccount);
    }).toThrow();
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here;
    expect(() => {
      account.transfer(startMoney, account);
    }).toThrow();
  });

  test('should deposit money', () => {
    // Write your test here
    const countAddMoney = 100;
    expect(account.deposit(countAddMoney).getBalance()).toBe(
      startMoney + countAddMoney,
    );
  });

  test('should withdraw money', () => {
    // Write your test here
    expect(account.withdraw(startMoney).getBalance()).toBe(0);
  });

  test('should transfer money', () => {
    // Write your test here
    const newAccount = new BankAccount(0);
    account.transfer(startMoney, newAccount);
    expect(account.getBalance()).toBe(0);
    expect(newAccount.getBalance()).toBe(startMoney);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    _.random = jest.fn(() => 1);
    const balance = await account.fetchBalance();
    expect(typeof balance).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    _.random = jest.fn(() => 0);
    const balance = await account.fetchBalance();
    expect(balance).toBeNull();
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    _.random = jest.fn(() => 0);
    await expect(() => account.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
