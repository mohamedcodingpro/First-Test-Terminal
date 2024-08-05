import { yearsAgo } from  "../yearsAgo.js";
import assert from 'assert';

describe('yearsAgo', function() {
    it('should return the correct number of years ago for 1976', function() {
        const currentYear = new Date().getFullYear();
        assert.equal(yearsAgo(1976), currentYear - 1976);
    });

    it('should return the correct number of years ago for 2000', function() {
        const currentYear = new Date().getFullYear();
        assert.equal(yearsAgo(2000), currentYear - 2000);
    });
});