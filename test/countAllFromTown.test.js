// test/countAllFromTown.test.js
import { countAllFromTown } from '../countAllFromTown.js';
import assert from 'assert';

describe('countAllFromTown', function() {
    it('should return the number of registration numbers from the specified town', function() {
        const regNumbers = 'CL 123, CJ 456, CL 789, CY 234';
        assert.strictEqual(countAllFromTown(regNumbers, 'CL'), 2);
    });
    it('should return 0 if there are no registration numbers from the specified town', function() {
        const regNumbers = 'CJ 123, CA 456, CY 789';
        assert.strictEqual(countAllFromTown(regNumbers, 'CL'), 0);
    });
    it('should handle an empty string of registration numbers', function() {
        const regNumbers = '';
        assert.strictEqual(countAllFromTown(regNumbers, 'CL'), 0);
    });
});
