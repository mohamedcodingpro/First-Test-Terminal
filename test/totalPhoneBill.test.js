import { totalPhoneBill } from  "../totalPhoneBill.js";
import assert from 'assert';
describe('totalPhoneBill', function() {
    it('should return "R7.45" for "call, sms, call, sms, sms"', function() {
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
    });

    it('should return "R0.00" for empty string', function() {
        assert.equal(totalPhoneBill(''), 'R0.00');
    });
});