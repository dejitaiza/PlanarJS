var cartesian = require("./cartesian")
var polar = require("./polar")
var utilities = require('./utilities')
var errors = require('./config').errors

position_instance = function(cart, pol) {
    var cartesian = cart;
    var polar = pol;
    this.x = function() {
        return cartesian.x();
    }
    this.y = function() {
        return cartesian.y();
    }
    this.r = function() {
        return polar.r();
    }
    this.th = function() {
        return polar.th();
    }
    this.setFromCartesian = function(x, y) {
        cartesian.setPosition(x, y);
        polar = utilities.cartesianToPolar(cartesian);
    }
    this.setFromPolar = function(r, th) {
        polar.setPosition(r, th);
        cartesian = utilities.polarToCartesian(polar);
    }
}

position = (function() {
    xpo = {
        init: function(type, coordinates) {
            if (type == "cartesian") {
                return xpo.initFromCart(coordinates);
            } else if (type == "polar") {
                return xpo.initFromPol(coordinates);
            } else {
                throw errors.unsupportedCoordSystem
            }
        },
        initFromCart: function(cart) {
            return new position_instance(cart, utilities.cartesianToPolar(cart));
        },
        initFromPol: function(pol) {
            return new position_instance(utilities.polarToCartesian(pol), pol);
        },
    }
    return xpo;
})();

module.exports = position
