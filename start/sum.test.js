// const sum = require('./sum');
import sum from './sum';

describe('Sum', () => {
    it("adds 1 and 3 to get 4", () => {
        expect(sum(1,3)).not.toBe(100);
        expect(sum(1,3)).toBe(4);
    });
});

test('Truthiness', () => {
    expect(false).toBeFalsy();
    expect(true).toBeTruthy();
});