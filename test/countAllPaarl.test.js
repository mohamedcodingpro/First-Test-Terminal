import { countAllPaarl } from  "../countAllPaarl.js";
import assert from 'assert';

describe('countAllPaarl', function() {
    it('should return 3 for "CJ 123, CJ 456, CJ 789"', function() {
        assert.equal(countAllPaarl('CJ 123, CJ 456, CJ 789'), 3);
    });

    it('should return 0 for "CA 123, CY 456, CL 789"', function() {
        assert.equal(countAllPaarl('CA 123, CY 456, CL 789'), 0);
    });
});