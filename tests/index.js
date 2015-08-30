var proclaim = require('proclaim');
var object2map = require('..');

suite('throws if bad type', function() {
    test('number', function() {
        proclaim.throws(
            function() {
                object2map(2);
            },

            'Expecting object, got number'
        );
    });

    test('string', function() {
        proclaim.throws(
            function() {
                object2map('test');
            },

            'Expecting object, got string'
        );
    });
});

suite('convert to map', function() {
    test('a simple object', function() {
        var object = { test: true };

        var map = object2map(object);

        proclaim.strictEqual(map.size, 1);
        proclaim.isTrue(map.has('test'));
        proclaim.strictEqual(map.get('test'), true);
    });
});
