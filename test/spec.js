var assert = require("assert")
var should = require("should")
var cartesian = require("../lib/cartesian")
var polar = require("../lib/polar")
var utilities = require("../lib/utilities")

describe('Cartesian', function() {
    it('should be loaded correctly', function() {
        should(cartesian).not.equal(undefined);
    });
    it('should store the cartesian coordinates of a point', function() {
        var x = 10;
        var y = 5;
        var point = cartesian.init(x, y);
        point.x().should.equal(x);
        point.y().should.equal(y);
    });
    it('should change the value of the coordinates of a point', function() {
        var x1 = 10;
        var y1 = 5;
        var x2 = 2;
        var y2 = 8;
        var point = cartesian.init(x1, y1);

        point.x().should.equal(x1);
        point.y().should.equal(y1);

        point.setPosition(x2, y2);

        point.x().should.equal(x2);
        point.y().should.equal(y2);
    });
});
describe('Polar', function() {
    it('should be loaded correctly', function() {
        should(polar).not.equal(undefined);
    });
    it('should store the polar coordinates of a point and reduce theta to [0,2PI]', function() {
        var r = 2;
        var th = 20;
        var point = polar.init(r, th);
        point.r().should.equal(r);
        point.th().should.equal(utilities.mod2pi(th));
    });
    it('should change the value of the coordinates of a point', function() {
        var r1 = 2;
        var th1 = 0.5;
        var r2 = 4;
        var th2 = 0.3;
        var point = polar.init(r1, th1);

        point.r().should.equal(r1);
        point.th().should.equal(th1);

        point.setPosition(r2, th2);

        point.r().should.equal(r2);
        point.th().should.equal(th2);
    });
    it('should not accept a negative radius value', function() {
        var r = -10;
        var th = 0;
        polar.init.bind(null, r, th).should.
        throw ();
    });
});

describe('Utilities', function() {
    it('should reduce any number to the interval [-PI,PI]', function() {
        utilities.mod2pi(2).should.equal(2);
        utilities.mod2pi(3 * Math.PI).should.equal(0);
        utilities.mod2pi(0).should.equal(0);
        utilities.mod2pi((-3 / 2) * Math.PI).should.equal((-1 / 2) * Math.PI);
    });
});
