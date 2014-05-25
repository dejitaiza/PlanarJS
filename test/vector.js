var should = require("should")
var position = require("../lib/position")
var vector = require("../lib/vector")

describe('Vector', function() {
    it('should be loaded correctly', function() {
        should(vector).not.equal(undefined);
    });
    it('should return the coordinates used to construct it', function() {
        var a = vector.init('cartesian', 2, 2);
        a.x().should.equal(2);
        a.y().should.equal(2);
    });
    it('should add vectors and return the result', function() {
        var a = vector.init('cartesian', 2, 3);
        var b = vector.init('cartesian', 4, 5);
        var c = vector.add(a, b);
        c.x().should.equal(6);
        c.y().should.equal(8);
    });
    it('should subtract vectors and return the result', function() {
        var a = vector.init('cartesian', 2, 3);
        var b = vector.init('cartesian', 4, 5);
        var c = vector.subtract(a, b);
        c.x().should.equal(-2);
        c.y().should.equal(-2);
    });
    it('should initialize a vector from two points', function() {
        var pointA = position.init('cartesian', 0, 2);
        var pointB = position.init('cartesian', 5, 2);
        var vectorAB = vector.fromPoints(pointA, pointB);
        vectorAB.x().should.equal(5);
        vectorAB.y().should.equal(0);
    });
    it('should obey Chasles relation ', function() {
        var pointO = position.init('cartesian', 0, 0);
        var pointA = position.init('cartesian', 4, 2);
        var pointB = position.init('cartesian', 8, 3);
        var vectorAO = vector.fromPoints(pointA, pointO);
        var vectorOB = vector.fromPoints(pointO, pointB);
        var vectorAB = vector.fromPoints(pointA, pointB);
        var sumAOOB = vector.add(vectorAO, vectorOB);
        vectorAB.x().should.equal(sumAOOB.x());
        vectorAB.y().should.equal(sumAOOB.y());
    });
    it('should compute a dot product between two vectors', function() {
        var a = vector.init('cartesian', 2, 3);
        var b = vector.init('cartesian', 4, 5);
        var product = vector.dotProduct(a, b);
        product.should.equal(23);
    });
    it('should compute a scalar product between a scalar and a vector', function() {
        var s = 5;
        var a = vector.init('cartesian', 2, 8);
        var c = vector.scalarProduct(s, a);
        c.x().should.equal(10);
        c.y().should.equal(40);
    });
});
