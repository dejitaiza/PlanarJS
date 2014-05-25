var cartesian = require("./cartesian");
var polar = require("./polar");
var position = require("./position");

vector_instance = function(pos) {
    var posP = pos;
    this.x = function() {
        return posP.x();
    }
    this.y = function() {
        return posP.y();
    }
    this.r = function() {
        return posP.r();
    }
    this.th = function() {
        return posP.th();
    }
    this.set = function(type, arg1, arg2) {
        return posP.set(type, arg1, arg2);
    }
}

vector = function() {
    this.init = function(type, arg1, arg2) {
        var pos = position.init(type, arg1, arg2);
        return new vector_instance(pos);
    }
    this.add = function(vA, vB) {
        var xC = vA.x() + vB.x();
        var yC = vA.y() + vB.y();
        return this.init('cartesian', xC, yC);
    }
    this.subtract = function(vA, vB) {
        var xC = vA.x() - vB.x();
        var yC = vA.y() - vB.y();
        return this.init('cartesian', xC, yC);
    }
    this.fromPoints = function(pA, pB) {
        var xC = pB.x() - pA.x();
        var yC = pB.y() - pA.y();
        return this.init('cartesian', xC, yC);
    }
    this.dotProduct = function(vA, vB) {
        return ((vB.x() * vA.x()) + (vB.y() * vA.y()));
    }
    this.scalarProduct = function(sA, vB) {
        var xC = sA * vB.x();
        var yC = sA * vB.y();
        return this.init('cartesian', xC, yC);
    }
}

module.exports = new vector();
