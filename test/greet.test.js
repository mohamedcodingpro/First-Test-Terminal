// test/greet.test.js
import { greet } from '../greet.js';
import assert from 'assert';

describe('greet', function() {
    it('should greet a person by name', function() {
        assert.strictEqual(greet('Alice'), 'Hello, Alice');
    });
    it('should greet another person by name', function() {
        assert.strictEqual(greet('Bob'), 'Hello, Bob');
    });
});
