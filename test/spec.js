var assert = require("assert")
var cartesian = require("../lib/cartesian")

describe('Cartesian', function() {
    it('should be loaded correctly', function() {
        should(cartesian).exist;
    });
    it('should store the cartesian coordinates of a point', function() {
        var x = 10;
        var y = 5;
        var point = cartesian.init(x, y);
        point.should.have.property('x', x)
        point.should.have.property('y', y)
    })
})
