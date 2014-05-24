var cartesian = require("./cartesian")
var polar = require("./polar")
var utilities = require('./utilities')
var errors = require('./config').errors

position_instance = function(cart) {
    var cartesianP = cart;
    var polarP = null;
    this.x = function() {
        return cartesianP.x();
    }
    this.y = function() {
        return cartesianP.y();
    }
    this.r = function() {
        if (polarP == null) {
            polarP = polar.fromCartesian(cartesianP);
        }
        return polarP.r();
    }
    this.th = function() {
        if (polarP == null) {
            polarP = polar.fromCartesian(cartesianP);
        }
        return polarP.th();
    }
    this.setFromCartesian = function(x, y) {
        cartesianP.setPosition(x, y);
        polarP = null;
    }
    this.setFromPolar = function(r, th) {
        if (polarP == null) {
            polarP = polar.init(r, th);
        } else {
            polarP.setPosition(r, th);
        }
        cartesianP = cartesian.fromPolar(polarP);
    }
}

position = function() {
    this.init = function(type, arg1, arg2) {
        if (type == "cartesian") {
            return this.initFromCart(arg1, arg2);
        } else if (type == "polar") {
            return this.initFromPol(arg1, arg2);
        } else {
            throw errors.unsupportedCoordSystem;
        }
    }
    this.initFromCart = function(x, y) {
        var cart = cartesian.init(x, y);
        return new position_instance(cart);
    }
    this.initFromPol = function(r, th) {
        var pol = polar.init(r, th);
        return new position_instance(cartesian.fromPolar(pol));
    }
    this.distance = function(posA, posB) {
        return Math.sqrt(Math.pow(posA.x() - posB.x(), 2) + Math.pow(posA.y() - posB.y(), 2));
    }
}

module.exports = new position();
