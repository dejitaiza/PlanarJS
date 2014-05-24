var utilities = require("./utilities");
var cartesian = require("./cartesian");
var errors = require("./config").errors;

polar_instance = function(r, th) {
    if (r < 0) {
        throw errors.polarNegativeRadius;
    }
    var rp = r;
    var thp = utilities.mod2pi(th);
    this.r = function() {
        return rp;
    }
    this.th = function() {
        return thp;
    }
    this.setPosition = function(r, th) {
        rp = r;
        thp = utilities.mod2pi(th);
    }
}

polar = function() {
    this.init = function(r, th) {
        return new polar_instance(r, th);
    }
    this.fromCartesian = function(cart) {
        var x = cart.x();
        var y = cart.y();
        var r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        var th = Math.atan2(y, x);
        return this.init(r, th);
    }
}


module.exports = new polar();
