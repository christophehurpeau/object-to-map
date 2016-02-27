const assert = require('assert');
const object2map = require('..');

suite('throws if bad type', function() {
    test('number', function() {
        assert.throws(
            function() {
                object2map(2);
            },
            'Expecting object, got number'
        );
    });

    test('string', function() {
        assert.throws(
            function() {
                object2map('test');
            },
            'Expecting object, got string'
        );
    });
});

suite('convert to map', function() {
    test('a simple object', function() {
        const object = { test: true };
        const map = object2map(object);

        assert.strictEqual(map.size, 1);
        assert.ok(map.has('test'));
        assert.strictEqual(map.get('test'), true);
    });
});
