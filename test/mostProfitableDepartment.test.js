// test/mostProfitableDepartment.test.js
import { mostProfitableDepartment } from '../mostProfitableDepartment.js';
import assert from 'assert';

describe('mostProfitableDepartment', function() {
    it('should return the most profitable department', function() {
        const salesData = [
            { department: 'hardware', sales: 4500, day: 'Monday' },
            { department: 'outdoor', sales: 1500, day: 'Monday' },
            { department: 'carpentry', sales: 5500, day: 'Monday' },
            { department: 'hardware', sales: 7500, day: 'Tuesday' },
            { department: 'outdoor', sales: 2505, day: 'Tuesday' },
            { department: 'carpentry', sales: 1540, day: 'Tuesday' },
            { department: 'hardware', sales: 1500, day: 'Wednesday' },
            { department: 'outdoor', sales: 8507, day: 'Wednesday' },
            { department: 'carpentry', sales: 8009, day: 'Wednesday' },
        ];
        assert.strictEqual(mostProfitableDepartment(salesData), 'hardware');
    });

    it('should return the most profitable department when all departments have equal sales', function() {
        const salesData = [
            { department: 'hardware', sales: 3000, day: 'Monday' },
            { department: 'outdoor', sales: 3000, day: 'Monday' },
            { department: 'carpentry', sales: 3000, day: 'Monday' },
        ];
        assert.strictEqual(mostProfitableDepartment(salesData), 'hardware');
    });

    it('should return an empty string if sales data is empty', function() {
        const salesData = [];
        assert.strictEqual(mostProfitableDepartment(salesData), '');
    });
});
