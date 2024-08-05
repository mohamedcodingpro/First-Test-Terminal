import { regCheck } from '../regCheck.js';
import assert from 'assert';
describe('regCheck', function() {
    it('should return true for DC 55 YU GP with GP', function() {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it('should return false for DC 55 YU GP with EC', function() {
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it('should return true for 5566 L with L', function() {
        assert.equal(regCheck('5566 L', 'L'), true);
    });

    it('should return false for 5566 L with M', function() {
        assert.equal(regCheck('5566 L', 'M'), false);
    });
});