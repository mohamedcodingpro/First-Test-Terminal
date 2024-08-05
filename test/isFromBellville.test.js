
import { isFromBellville } from '../isFromBellville.js';
import assert from 'assert';

describe('isFromBellville', function() {
    it('should return true if the registration number starts with CY', function() {
        assert.strictEqual(isFromBellville('CY 123'), true);
    });
    it('should return false if the registration number does not start with CY', function() {
        assert.strictEqual(isFromBellville('CJ 123'), false);
    });
});
