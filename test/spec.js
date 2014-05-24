var assert = require("assert")
var should = require("should")
var cartesian = require("../lib/cartesian")
var polar = require("../lib/polar")
var utilities = require("../lib/utilities")
var position = require("../lib/position")


var delta = 0.000000000000001; // Maximum amount of acceptable error of cartesian to polar conversion

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
describe('Polar', function() {
    it('should be loaded correctly', function() {
        should(polar).not.equal(undefined);
    });
    it('should store the polar coordinates of a point and reduce theta to [-PI,PI]', function() {
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
    it('should convert cartesian coordinates to polar ', function() {
        var cartPoint1 = cartesian.init(0, 0);
        var polarPoint1 = polar.fromCartesian(cartPoint1);
        polarPoint1.r().should.equal(0);
        polarPoint1.th().should.equal(0);

        var cartPoint2 = cartesian.init(1, 0);
        var polarPoint2 = polar.fromCartesian(cartPoint2);
        polarPoint2.r().should.equal(1);
        polarPoint2.th().should.equal(0);

        var cartPoint3 = cartesian.init(0, 1);
        var polarPoint3 = polar.fromCartesian(cartPoint3);
        polarPoint3.r().should.equal(1);
        polarPoint3.th().should.equal(Math.PI / 2);

        var cartPoint4 = cartesian.init(-1, -1);
        var polarPoint4 = polar.fromCartesian(cartPoint4);
        polarPoint4.r().should.equal(Math.sqrt(2));
        polarPoint4.th().should.equal(Math.PI * (-3 / 4));

        var cartPoint5 = cartesian.init(-1, 0);
        var polarPoint5 = polar.fromCartesian(cartPoint5);
        polarPoint5.r().should.equal(1);
        polarPoint5.th().should.equal(Math.PI);

        var cartPoint6 = cartesian.init(-1, 1);
        var polarPoint6 = polar.fromCartesian(cartPoint6);
        polarPoint6.r().should.equal(Math.sqrt(2));
        polarPoint6.th().should.equal(Math.PI * (3 / 4));

        var cartPoint7 = cartesian.init(0, -1);
        var polarPoint7 = polar.fromCartesian(cartPoint7);
        polarPoint7.r().should.equal(1);
        polarPoint7.th().should.equal(Math.PI * (-1 / 2));

        var cartPoint8 = cartesian.init(1, -1);
        var polarPoint8 = polar.fromCartesian(cartPoint8);
        polarPoint8.r().should.equal(Math.sqrt(2));
        polarPoint8.th().should.equal(Math.PI * (-1 / 4));

        var cartPoint9 = cartesian.init(1, 1);
        var polarPoint9 = polar.fromCartesian(cartPoint9);
        polarPoint9.r().should.equal(Math.sqrt(2));
        polarPoint9.th().should.equal(Math.PI * (1 / 4));
    });
});

describe('Utilities', function() {
    it('should be loaded correctly', function() {
        should(utilities).not.equal(undefined);
    });
    it('should reduce any number to the interval [-PI,PI]', function() {
        utilities.mod2pi(2).should.equal(2);
        utilities.mod2pi(3 * Math.PI).should.equal(Math.PI);
        utilities.mod2pi(0).should.equal(0);
        utilities.mod2pi((-3 / 2) * Math.PI).should.equal((1 / 2) * Math.PI);
    });
});
describe('Position', function() {
    it('should be loaded correctly', function() {
        should(position).not.equal(undefined);
    });
    it('should return values of the cartesian coordinates used to construct it', function() {
        var pos = position.init('cartesian', 0, 1);
        pos.x().should.equal(0);
        pos.y().should.equal(1);
    });
    it('should convert the cartesian coordinates used to construct it to correct polar coordinates', function() {
        var pos = position.init('cartesian', 0, 1);
        pos.r().should.be.within(1 - delta, 1 + delta);
        pos.th().should.be.within((Math.PI / 2) - delta, (Math.PI / 2) + delta);
    });
    it('should return values of the polar coordinates used to construct it', function() {
        var pos = position.init('polar', 1, 0);
        pos.r().should.equal(1);
        pos.th().should.equal(0);
    });
    it('should convert the polar coordinates used to construct it to correct cartesian coordinates', function() {
        var pos = position.init('polar', 1, 0);
        pos.x().should.be.within(1 - delta, 1 + delta);
        pos.y().should.be.within(0 - delta, 0 + delta);
    });
    it('should update the coordinates of a position initialized from cartesian with cartesian values', function() {
        var pos = position.init('cartesian', 2, 2);
        pos.setFromCartesian(0, 1);
        pos.x().should.equal(0);
        pos.y().should.equal(1);
        pos.r().should.be.within(1 - delta, 1 + delta);
        pos.th().should.be.within((Math.PI / 2) - delta, (Math.PI / 2) + delta);
    });
    it('should update the coordinates of a position initialized from polar with polar values', function() {
        var pos = position.init('polar', 5, 3);
        pos.setFromPolar(1, 0);
        pos.r().should.equal(1);
        pos.th().should.equal(0);
        pos.x().should.be.within(1 - delta, 1 + delta);
        pos.y().should.be.within(0 - delta, 0 + delta);
    });
    it('should update the coordinates of a position initialized from cartesian with polar values', function() {
        var pos = position.init('cartesian', 2, 2);
        pos.setFromPolar(1, 0);
        pos.r().should.equal(1);
        pos.th().should.equal(0);
        pos.x().should.be.within(1 - delta, 1 + delta);
        pos.y().should.be.within(0 - delta, 0 + delta);
    });
    it('should update the coordinates of a position initialized from polar with cartesian values', function() {
        var pos = position.init('polar', 5, 3);
        pos.setFromCartesian(0, 1);
        pos.x().should.equal(0);
        pos.y().should.equal(1);
        pos.r().should.be.within(1 - delta, 1 + delta);
        pos.th().should.be.within((Math.PI / 2) - delta, (Math.PI / 2) + delta);
    });
    it('should compute the distance between two points', function() {
        var posA = position.init('cartesian', 0, 0);
        var posB = position.init('cartesian', 1, 1);
        var dist = position.distance(posA, posB);
        dist.should.be.within(Math.sqrt(2) - delta, Math.sqrt(2) + delta);
    });
});
