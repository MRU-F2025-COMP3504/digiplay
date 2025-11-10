const averageAbs = require('./average');

describe('averageAbs', () => {
    test.each([
        { name: 'positive numbers', input: [1, 2, 3, 4, 5], expected: 3 },
        { name: 'negative numbers', input: [-1, -2, -3], expected: 2 },
        { name: 'zeros', input: [0, 0, 0], expected: 0 },
    ])('calculates the average of $name', ({ input, expected }) => {
        expect(averageAbs(input)).toBeCloseTo(expected);
    });

    test('throws when given null', () => {
        expect(() => averageAbs(null)).toThrow();
    });

    test('throws when array is empty' , () => { 
        expect(() => averageAbs([])).toThrow();
    })

    test('throws when given empty array', () => {
        expect(() => averageAbs([])).toThrow();
    });
});