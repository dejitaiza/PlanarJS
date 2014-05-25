var should = require("should");
var cartesian = require("../lib/cartesian");
var polar = require("../lib/polar");
var utilities = require("../lib/utilities");
var position = require("../lib/position");


var delta = require("../lib/config").delta; // Maximum amount of acceptable error of cartesian to polar conversion

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
    it('should update the coordinates using the generalized set function', function() {
        var pos = position.init('cartesian', 3, 3);

        pos.set('polar', 1, 0);
        pos.r().should.equal(1);
        pos.th().should.equal(0);
        pos.x().should.be.within(1 - delta, 1 + delta);
        pos.y().should.be.within(0 - delta, 0 + delta);

        pos.set('cartesian', 0, 1);
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
