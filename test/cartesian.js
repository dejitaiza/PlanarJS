var should = require("should");
var cartesian = require("../lib/cartesian");
var polar = require("../lib/polar");
var utilities = require("../lib/utilities");

var delta = require("../lib/config").delta;

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
    it('should convert polar coordinates to cartesian', function() {
        var polarPoint1 = polar.init(0, 0);
        var cartPoint1 = cartesian.fromPolar(polarPoint1);
        cartPoint1.x().should.be.within(0 - delta, 0 + delta);
        cartPoint1.y().should.be.within(0 - delta, 0 + delta);

        var polarPoint2 = polar.init(1, 0);
        var cartPoint2 = cartesian.fromPolar(polarPoint2);
        cartPoint2.x().should.be.within(1 - delta, 1 + delta);
        cartPoint2.y().should.be.within(0 - delta, 0 + delta);

        var polarPoint3 = polar.init(1, Math.PI / 2);
        var cartPoint3 = cartesian.fromPolar(polarPoint3);
        cartPoint3.x().should.be.within(0 - delta, 0 + delta);
        cartPoint3.y().should.be.within(1 - delta, 1 + delta);

        var polarPoint4 = polar.init(Math.sqrt(2), Math.PI * (-3 / 4));
        var cartPoint4 = cartesian.fromPolar(polarPoint4);
        cartPoint4.x().should.be.within(-1 - delta, -1 + delta);
        cartPoint4.y().should.be.within(-1 - delta, -1 + delta);

        var polarPoint5 = polar.init(1, Math.PI);
        var cartPoint5 = cartesian.fromPolar(polarPoint5);
        cartPoint5.x().should.be.within(-1 - delta, -1 + delta);
        cartPoint5.y().should.be.within(0 - delta, 0 + delta);

        var polarPoint6 = polar.init(Math.sqrt(2), Math.PI * (3 / 4));
        var cartPoint6 = cartesian.fromPolar(polarPoint6);
        cartPoint6.x().should.be.within(-1 - delta, -1 + delta);
        cartPoint6.y().should.be.within(1 - delta, 1 + delta);

        var polarPoint7 = polar.init(1, Math.PI * (-1 / 2));
        var cartPoint7 = cartesian.fromPolar(polarPoint7);
        cartPoint7.x().should.be.within(0 - delta, 0 + delta);
        cartPoint7.y().should.be.within(-1 - delta, -1 + delta);

        var polarPoint8 = polar.init(Math.sqrt(2), Math.PI * (-1 / 4));
        var cartPoint8 = cartesian.fromPolar(polarPoint8);
        cartPoint8.x().should.be.within(1 - delta, 1 + delta);
        cartPoint8.y().should.be.within(-1 - delta, -1 + delta);

        var polarPoint9 = polar.init(Math.sqrt(2), Math.PI * (1 / 4));
        var cartPoint9 = cartesian.fromPolar(polarPoint9);
        cartPoint9.x().should.be.within(1 - delta, 1 + delta);
        cartPoint9.y().should.be.within(1 - delta, 1 + delta);
    });
});
