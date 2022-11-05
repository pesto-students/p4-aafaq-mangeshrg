const mathOperations = require('./index');

describe("Test math operations", () => {
    test('Test sum', () => {
        expect(mathOperations.sum(1, 2)).toBe(3);
    });

    test('Test difference', () => {
        expect(mathOperations.diff(5, 3)).toBe(2);
    });

    test('Test product', () => {
        expect(mathOperations.product(10, 2)).toBe(20);
    });
});
