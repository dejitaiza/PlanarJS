var should = require("should");
var cartesian = require("../lib/cartesian");
var polar = require("../lib/polar");
var utilities = require("../lib/utilities");
var position = require("../lib/position");


var delta = require("../lib/config").delta; // Maximum amount of acceptable error of cartesian to polar conversion

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
