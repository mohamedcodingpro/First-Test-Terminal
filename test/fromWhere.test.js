import { fromWhere } from  "../fromWhere.js";
import assert from 'assert';
describe('fromWhere', function() {
    it('should return "Bellville" for "CY 123"', function() {
        assert.equal(fromWhere('CY 123'), 'Bellville');
    });

    it('should return "Paarl" for "CJ 123"', function() {
        assert.equal(fromWhere('CJ 123'), 'Paarl');
    });

    it('should return "Cape Town" for "CA 123"', function() {
        assert.equal(fromWhere('CA 123'), 'Cape Town');
    });

    it('should return "Some other place!" for "ZN 123"', function() {
        assert.equal(fromWhere('ZN 123'), 'Some other place!');
    });
});