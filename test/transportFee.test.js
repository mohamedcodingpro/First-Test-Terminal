// test/transportFee.test.js
import { transportFee } from '../transportFee.js';
import assert from 'assert';

describe('transportFee', function() {
    it('should return R20 for morning shift', function() {
        assert.strictEqual(transportFee('morning'), 'R20');
    });
    it('should return R10 for afternoon shift', function() {
        assert.strictEqual(transportFee('afternoon'), 'R10');
    });
    it('should return free for night shift', function() {
        assert.strictEqual(transportFee('night'), 'free');
    });
    it('should return Invalid shift for an invalid shift', function() {
        assert.strictEqual(transportFee('invalid'), 'Invalid shift');
    });
});
