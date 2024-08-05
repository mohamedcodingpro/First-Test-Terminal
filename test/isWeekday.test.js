import { isWeekday } from  "../isWeekday.js";
import assert from 'assert';
describe('isWeekday', function() {
    it('should return false for Saturday', function() {
        assert.equal(isWeekday('Saturday'), false);
    });

    it('should return true for Monday', function() {
        assert.equal(isWeekday('Monday'), true);
    });

    it('should return true for Wednesday', function() {
        assert.equal(isWeekday('Wednesday'), true);
    });
});