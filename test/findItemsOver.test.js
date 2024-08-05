import { findItemsOver } from  "../findItemsOver.js";
import assert from 'assert';

describe('findItemsOver', function() {
    it('should return items with quantity over the threshold', function() {
        const itemList = [
            {name: 'apples', qty: 10},
            {name: 'pears', qty: 37},
            {name: 'bananas', qty: 27},
            {name: 'grapes', qty: 3},
        ];
        const result = [
            {name: 'pears', qty: 37},
            {name: 'bananas', qty: 27},
        ];
        assert.deepEqual(findItemsOver(itemList, 20), result);
    });
});