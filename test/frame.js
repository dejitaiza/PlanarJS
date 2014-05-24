var should = require("should");
var frame = require("../lib/frame");

describe('Frame', function() {
    it('should be loaded correctly', function() {
        should(frame).not.equal(undefined);
    });
    it('should have a default origin', function() {
        var f = frame.init();
        f.o.x().should.equal(0);
        f.o.y().should.equal(0);
    });
    it('should change origin coordinates', function() {
        var f = frame.init();
        f.setFromCartesian(-3, 5);
        f.o.x().should.equal(-3);
        f.o.y().should.equal(5);
        f.setFromPolar(20, 2);
        f.o.r().should.equal(20);
        f.o.th().should.equal(2);
    });
});
