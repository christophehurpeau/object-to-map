/**
 * The method transforms a basic Object into a Map.
 *
 * @param  {object}   object
 * @return {Map}
 */
module.exports = function(object) {
    if (typeof object !== 'object') {
        throw new Error('Expecting object, got ' + typeof object);
    }

    var map = new Map();

    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            map.set(key, object[key]);
        }
    }

    return map;
};
