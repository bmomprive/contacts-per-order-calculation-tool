const { multiply } = require('./app');

test('Jest working', () => {
    expect(true).toBe(true);
})

describe('tests functions', () => {
    test(`tests multiple function`, () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-1, 5)).toBe(-5);
        expect(multiply(0, 100)).toBe(0);
        });
    test(`tests multiple functions with strings`, () => {
        expect(multiply('6', '7')).toBe(42);
        expect(multiply('a', 5)).toBeNaN();
    
    });
});