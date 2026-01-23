/**
Smoke test for Jest and app.js
*/

const { multiply, calculateContactsPerOrder } = require('./app');


test('Jest Smoke Test', () => {
    expect(true).toBe(true);
})

/**
Test calculateContactsPerOrder function and its variables.
 Expected behaviour:
 - Accepts numeric (or numeric-string) inputs
 - Rejects zero, negative, non-numeric, missing values
 - Returns a number (contacts / orders) for valid inputs
 */

describe('calculateContactsPerOrder', () => {
  test('returns contacts divided by orders for valid numbers', () => {
    expect(calculateContactsPerOrder(100, 1000)).toBeCloseTo(0.1, 4);
  });
  test('accepts numeric strings', () => {
    expect(calculateContactsPerOrder('50', '200')).toBeCloseTo(0.25, 4);
  });

  test('throws if contacts is missing/empty', () => {
    expect(() => calculateContactsPerOrder('', 100)).toThrow(/contacts/i);
  });

    test('throws if contacts is non-numeric', () => {
    expect(() => calculateContactsPerOrder('abc', 100)).toThrow(/number/i);
  });

    test('throws if contacts is 0 or negative', () => {
    expect(() => calculateContactsPerOrder(0, 100)).toThrow(/greater than 0/i);
    expect(() => calculateContactsPerOrder(-1, 100)).toThrow(/greater than 0/i);
  });

  test('throws if orders is missing/empty', () => {
    expect(() => calculateContactsPerOrder(100, '')).toThrow(/orders/i);
  });

  test('throws if orders is non-numeric', () => {
    expect(() => calculateContactsPerOrder(100, 'xyz')).toThrow(/number/i);
  });

  test('throws if orders is 0 or negative', () => {
    expect(() => calculateContactsPerOrder(100, 0)).toThrow(/greater than 0/i);
    expect(() => calculateContactsPerOrder(100, -10)).toThrow(/greater than 0/i);
  });
});