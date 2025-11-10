const averageAbs = require('./average');

describe('average', () => {
    test('calculates the average of positive numbers', () => {
        expect(averageAbs([1, 2, 3, 4, 5])).toBe(3);
    });

});