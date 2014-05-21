var assert = require("assert")
var should = require("should")
var cartesian = require("../lib/cartesian")

describe('Cartesian', function() {
    it('should be loaded correctly', function() {
        console.log(cartesian)
        should(cartesian).not.equal(undefined);
    });
    it('should store the cartesian coordinates of a point', function() {
        var x = 10;
        var y = 5;
        var point = cartesian.init(x, y);
        point.x().should.equal(x)
        point.y().should.equal(y)
    });
})
