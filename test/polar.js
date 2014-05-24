var should = require("should");
var cartesian = require("../lib/cartesian");
var polar = require("../lib/polar");
var utilities = require("../lib/utilities");
var position = require("../lib/position");


var delta = require("../lib/config").delta; // Maximum amount of acceptable error of cartesian to polar conversion

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
