// test/findItemsOver20.test.js
import { findItemsOver20 } from '../findItemsOver20.js';
import assert from 'assert';

describe('findItemsOver20', function() {
    it('should return items with quantity greater than 20', function() {
        const items = [
            {name: 'item1', qty: 10},
            {name: 'item2', qty: 30},
            {name: 'item3', qty: 25},
            {name: 'item4', qty: 15}
        ];
        const result = findItemsOver20(items);
        const expected = [
            {name: 'item2', qty: 30},
            {name: 'item3', qty: 25}
        ];
        assert.deepStrictEqual(result, expected);
    });

    it('should return an empty array if no items have quantity greater than 20', function() {
        const items = [
            {name: 'item1', qty: 10},
            {name: 'item2', qty: 15},
            {name: 'item3', qty: 5}
        ];
        const result = findItemsOver20(items);
        assert.deepStrictEqual(result, []);
    });

    it('should return an empty array if input list is empty', function() {
        const items = [];
        const result = findItemsOver20(items);
        assert.deepStrictEqual(result, []);
    });
});
